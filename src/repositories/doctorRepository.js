import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class DoctorRepository extends CrudRepository {
  constructor() {
    super(db.Doctor_Profile);
  }

}

export default DoctorRepository;
