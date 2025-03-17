import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";
import { NextFunction, Request, Response } from "express";
import CloudinaryServices from "../services/cloudinary.services/services";

export default class Cloudinary {
  constructor() {
    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });
  }

  private async signHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const signature = await CloudinaryServices.sign(req);

      res.status(200).json({ signature });
    } catch (err) {
      res.status(parseInt(String(err).slice(7, 10)) || 500).send({
        message: parseInt(String(err).slice(7, 10))
          ? String(err).slice(12)
          : String(err).slice(7),
      });
      next(err);
    }
  }

  public sign() {
    return this.signHandler;
  }

  public async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await CloudinaryServices.destroy(req);

      res.status(200).send({
        message: "Asset deleted",
        data: data,
      });
    } catch (err) {
      res.status(parseInt(String(err).slice(7, 10)) || 500).send({
        message: parseInt(String(err).slice(7, 10))
          ? String(err).slice(12)
          : String(err).slice(7),
      });
      next(err);
    }
  }
}
