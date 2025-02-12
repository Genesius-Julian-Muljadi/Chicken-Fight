import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export default class AuthValidations {
  public loginValidationUser = [
    body("regkey")
      .trim()
      .notEmpty()
      .withMessage("Registration key is required"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Passwords contain at least 6 characters"),
    (req: Request, res: Response, next: NextFunction) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw new Error(errors.array()[0].msg);
        }
        next();
      } catch (err) {
        res.status(401).send({
          message: String(err),
        });
        next(err);
      }
    },
  ];
}
