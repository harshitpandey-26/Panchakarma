import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class ClinicRepository extends CrudRepository {
  constructor() {
    super(db.Clinic_Profile);
  }

}

export default ClinicRepository;
