import { NextFunction, Request, Response } from "express";
import AuthServices from "../services/auth.services/services";
import COOKIE_EXPIRATION_MINUTES from "../../../cookieExpiration";

// Login key must be provided from creator
// Once created, password will be empty
// First login attempt will convert to registration with inputted password
export default class AuthControllers {
  public async loginUser(req: Request, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    try {
      const authToken = await AuthServices.loginUser(req);

      // First time login. Convert to registration
      if (authToken === 1) {
        const user = await AuthServices.registerUser(req);
        if (!user) throw new Error("Register failed");

        res.status(200).send({
          message: "Registration successful!",
          data: user,
        });
      } else if (authToken) {
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
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }
}
