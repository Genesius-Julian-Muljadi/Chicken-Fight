import { v2 as cloudinary } from "cloudinary";
import { Request } from "express";
import { CLOUDINARY_API_SECRET } from "../../config";

export default class CloudinaryServices {
  static async sign(req: Request) {
    try {
      const { paramsToSign } = req.body;

      const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        String(CLOUDINARY_API_SECRET)
      );

      return signature;
    } catch (err) {
      throw err;
    }
  }

  static async destroy(req: Request) {
    try {
      const publicID = req.body.publicID as string;
      const resource_type = req.body.type as string;

      const data = await cloudinary.api.delete_resources([publicID], {
        type: "upload",
        resource_type: resource_type,
      });

      if (data.deleted[publicID] === "not_found") {
        throw new Error("404: Resource not found with public ID and type");
      }

      return data;
    } catch (err) {
      throw err;
    }
  }
}
