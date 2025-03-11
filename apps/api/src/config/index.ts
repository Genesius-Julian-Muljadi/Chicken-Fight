import { config } from "dotenv";

config({
  path: ".env",
});

export const {
  PORT,
  DATABASE_URL,
  DIRECT_URL,
  SECRET_KEY,
  BASE_WEB_URL,
  CREATOR_EMAIL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;
