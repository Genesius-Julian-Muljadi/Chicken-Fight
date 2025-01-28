import { Request } from "express";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import AuthUtils from "./utils";

export default class AuthServices {
  static async loginUser(req: Request) {
    try {
      const { key, password } = req.body;
      const findUser = await AuthUtils.findUserByKey(key);

      await AuthUtils.verifyCredentials(findUser, password);

      const payload = {
        role: "admin",
      };
      const token = sign(payload, String(SECRET_KEY));

      return token;
    } catch (err) {
      throw err;
    }
  }
}
