import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class PatientRepository extends CrudRepository {
  constructor() {
    super(db.Patient_Profile);
  }

}

export default PatientRepository;
