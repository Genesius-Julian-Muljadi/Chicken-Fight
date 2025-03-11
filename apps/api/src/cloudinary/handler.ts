import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";
import { Request, Response } from "express";

export default class Cloudinary {
  constructor() {
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
  }

  private async handler(req: Request, res: Response) {
    const { paramsToSign } = req.body;

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      String(CLOUDINARY_API_SECRET)
    );

    res.status(200).json({ signature });
  }

  public sign() {
    return this.handler;
  }
}
