import { Request } from "express";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import AuthUtils from "./utils";
import prisma from "../../lib/prisma";

export default class AuthServices {
  static async registerUser(req: Request) {
    try {
      const { regkey, password } = req.body;

      const findUser = await AuthUtils.findUserByKey(regkey);
      if (!findUser) {
        throw new Error(
          "Key not found in database! This error shouldn't have been reachable."
        );
      }

      const hashedPassword = await AuthUtils.bcryptHash(password);

      const newUser = await prisma.users.update({
        data: {
          password: hashedPassword,
        },
        where: {
          regkey: regkey,
        },
      });

      return newUser;
    } catch (err) {
      throw err;
    }
  }

  static async loginUser(req: Request) {
    try {
      const { regkey, password } = req.body;
      const findUser = await AuthUtils.findUserByKey(regkey);

      if (!findUser) throw new Error("401: Invalid credentials");

      // First login attempt. Switch to registration instead
      if (!findUser.password) return 1;

      await AuthUtils.verifyCredentials(findUser, password);

      const payload = {
        id: findUser!.id,
        role: findUser!.role,
      };
      const token = sign(payload, String(SECRET_KEY));

      return token;
    } catch (err) {
      throw err;
    }
  }
}
