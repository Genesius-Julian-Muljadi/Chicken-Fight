"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cloudinary_controllers_1 = __importDefault(require("../controllers/cloudinary.controllers"));
class CloudinaryRoutes {
    constructor() {
        this.controllers = new cloudinary_controllers_1.default();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/sign", this.controllers.sign());
        this.router.delete("/destroy", this.controllers.destroy);
    }
    getRoutes() {
        return this.router;
    }
}
exports.default = CloudinaryRoutes;
