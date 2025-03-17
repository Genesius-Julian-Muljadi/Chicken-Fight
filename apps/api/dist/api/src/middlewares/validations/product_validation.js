"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ProductValidations {
    constructor() {
        this.productValidation = [
            (0, express_validator_1.body)("image").trim().notEmpty().withMessage("Image file name is required"),
            (0, express_validator_1.body)("promoted")
                .trim()
                .notEmpty()
                .withMessage("Promoted status is required"),
            (0, express_validator_1.body)("name").trim().notEmpty().withMessage("Product name is required"),
            (0, express_validator_1.body)("type").trim().notEmpty().withMessage("Product type is required"),
            (0, express_validator_1.body)("overview").trim(),
            (0, express_validator_1.body)("desc").trim(),
            (req, res, next) => {
                try {
                    const errors = (0, express_validator_1.validationResult)(req);
                    if (!errors.isEmpty()) {
                        throw new Error(errors.array()[0].msg);
                    }
                    next();
                }
                catch (err) {
                    res.status(400).send({
                        message: String(err),
                    });
                    next(err);
                }
            },
        ];
    }
}
exports.default = ProductValidations;
