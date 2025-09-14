import db from "../models/index.js";
import CrudRepository from "./crudRepository.js";

class UserSessionRepository extends CrudRepository {
  constructor() {
    super(db.User_Session);
  }

}

export default UserSessionRepository;
