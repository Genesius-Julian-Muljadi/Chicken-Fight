"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_controllers_1 = __importDefault(require("../controllers/data.controllers"));
const product_validation_1 = __importDefault(require("../middlewares/validations/product_validation"));
class DataRoutes {
    constructor() {
        this.controllers = new data_controllers_1.default();
        this.productValidations = new product_validation_1.default();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/testimonials", this.controllers.getAllTestimonials);
        this.router.get("/products", this.controllers.getAllProducts);
        this.router.post("/product", this.productValidations.productValidation, this.controllers.postProduct);
        this.router.delete("/product/:id", this.controllers.deleteProduct);
    }
    getRoutes() {
        return this.router;
    }
}
exports.default = DataRoutes;
