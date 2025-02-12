"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_controllers_1 = __importDefault(require("../controllers/data.controllers"));
class DataRoutes {
    constructor() {
        this.controllers = new data_controllers_1.default();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/testimonials", this.controllers.getAllTestimonials);
        this.router.get("/products", this.controllers.getAllProducts);
    }
    getRoutes() {
        return this.router;
    }
}
exports.default = DataRoutes;
