import bcrypt from "bcrypt";
import { generateToken } from "../utils/helper/jwt.js";
import { UnauthorizedError } from "../utils/error/app-error.js";
import {
  AppError,
  ValidationError,
  DatabaseError,
  NotFoundError,
} from "../utils/error/app-error.js";
import repository from "../repositories/index.js";

const userRepository = new repository.UserRepository();
const patientRepository = new repository.PatientRepository();
const doctorRepository = new repository.DoctorRepository();
const clinicRepository = new repository.ClinicRepository();

export async function register(userData, profileData) {
  console.log("inside register auth service");
  try {
    const existingUser = await userRepository.find(userData.email);

    if (existingUser) {
      throw new AppError(
        "User already exists with this email",
        401,
        "ALREADY EXISTS",
        "warn"
      );
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await userRepository.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role: userData.role,
    });

    // Create role-specific profile
    let profile;
    switch (userData.role) {
      case "patient":
        profile = await patientRepository.create({
          user_id: user.id,
          ...profileData,
        });
        break;
      case "doctor":
        profile = await doctorRepository.create({
          user_id: user.id,
          ...profileData,
        });
        break;
      case "clinic":
        profile = await clinicRepository.create({
          user_id: user.id,
          ...profileData,
        });
        break;
      default:
        // For system_admin, no additional profile needed
        break;
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      is_verified: user.is_verified,
    };

    return {
      user: safeUser,
      profile,
      token,
    };
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      throw new ValidationError(
        error.errors.map((e) => ({ field: e.path, message: e.message }))
      );
    }
    throw new DatabaseError(error);
  }
}

export async function login({ email, password }) {
  console.log("inside login auth service");

  const user = await userRepository.find(email);
  if (!user) {
    throw new UnauthorizedError("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthorizedError("Invalid credentials");
  }

  // Get role-specific profile
  let profile;
  switch (user.role) {
    case "patient":
      profile = await patientRepository.getByUserId(user.id);
      break;
    case "doctor":
      profile = await doctorRepository.getByUserId(user.id);
      break;
    case "clinic_admin":
      profile = await clinicRepository.getByUserId(user.id);
      break;
    default:
      profile = null;
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return { user: safeUser, token };
}
