import prisma from "../../lib/prisma";
import { compare, genSalt, hash } from "bcrypt";

export default class AuthUtils {
  static async findUserByKey(regkey: string) {
    try {
      const user = await prisma.users.findUnique({
        where: {
          regkey: regkey,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  static async bcryptHash(password: string) {
    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      return hashedPassword;
    } catch (err) {
      throw err;
    }
  }

  static async verifyCredentials(user: any, password: string) {
    try {
      if (!user) throw new Error("401: Invalid credentials");

      const passwordMatches = await compare(password, user.password);
      if (!passwordMatches) throw new Error("401: Invalid credentials");
    } catch (err) {
      throw err;
    }
  }
}
