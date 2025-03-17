import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export default class ProductValidations {
  public productValidation = [
    body("image").trim().notEmpty().withMessage("Image file name is required"),
    body("promoted")
      .trim()
      .notEmpty()
      .withMessage("Promoted status is required"),
    body("name").trim().notEmpty().withMessage("Product name is required"),
    body("type").trim().notEmpty().withMessage("Product type is required"),
    body("overview").trim(),
    body("desc").trim(),
    (req: Request, res: Response, next: NextFunction) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw new Error(errors.array()[0].msg);
        }
        next();
      } catch (err) {
        res.status(400).send({
          message: String(err),
        });
        next(err);
      }
    },
  ];
}
