// services/doctorService.js
import { DatabaseError, NotFoundError } from "../utils/error/app-error.js";
import repository from "../repositories/index.js";
import { generateToken } from "../utils/common/token.js";
import bcrypt from 'bcrypt';
const doctorRepo = new repository.DoctorRepository();
const userRepo = new repository.UserRepository();


export const createDoctorForClinic = async (doctorData, clinicId) => {
  console.log("inside create doctor for clinic service");
  try {
    // Generate invitation token
    const invitationToken = generateToken(32);

    const hashedPassword = await bcrypt.hash(doctorData.password,10); 
    
    const doctorProfile = await doctorRepo.create({
      ...doctorData,
      password:hashedPassword,
      clinic_id: clinicId,
      invitation_token: invitationToken,
      invitation_sent_at: new Date(),
      status: 'pending'
    });
    
    return doctorProfile;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

export const acceptInvitation = async (token, userData) => {
  console.log("inside accept invitation repo");

  try {
    // Find doctor profile by token
    const doctorProfile = await doctorRepo.findByInvitationToken(token);
    
    if (!doctorProfile) {
      throw new NotFoundError('Invalid invitation token');
    }
    
    // Check if token is expired (e.g., 7 days)
    const expirationTime = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    if (Date.now() - new Date(doctorProfile.invitation_sent_at).getTime() > expirationTime) {
      throw new Error('Invitation token has expired');
    }
    
    // Create user account
    const user = await userRepo.create({
      email: userData.email,
      password: userData.password,
      name:userData.name,
      role: 'doctor'
    });
    
    // Update doctor profile with user ID
    const updatedDoctor = await doctorRepo.update(doctorProfile.id, {
      user_id: user.id,
      invitation_accepted_at: new Date(),
      status: 'active'
    });
    
    return updatedDoctor;
  } catch (error) {
    throw new DatabaseError(error);
  }
};

export const getClinicDoctors = async (clinic_id) => {
  console.log("inside get clinic doctors from service");
  try {
    return await doctorRepo.getDoctorsByClinic(clinic_id);
  } catch (error) {
    throw new DatabaseError(error);
  }
};