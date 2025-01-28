import { NextFunction, Request, Response } from "express";
import AuthServices from "../services/auth.services/services";

const COOKIE_EXPIRATION_MINUTES = 120;

export default class AuthControllers {
  public async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = await AuthServices.loginUser(req);
      if (!authToken) throw new Error("Login failed");

      res
        .status(200)
        .cookie("access_token", authToken, {
          expires: new Date(
            new Date().valueOf() + COOKIE_EXPIRATION_MINUTES * 60000
          ),
        })
        .send({
          message: "Login successful!",
          cookie: authToken,
        });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }
}
