import { CLOUDINARY_API_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET_KEY, PORT, JWT_SECRET } from "./serverConfig.js";
import { logger } from "./loggerConfig.js";

export default {
    PORT,
    logger,
    JWT_SECRET,
    CLOUDINARY_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY
}
