"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services/data.services/services"));
class DataControllers {
    getAllTestimonials(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonials = yield services_1.default.getAllTestimonials(req);
                res.status(200).send({
                    message: "Testimonials retrieved!",
                    data: testimonials,
                });
            }
            catch (err) {
                res.status(401).send({
                    message: String(err),
                });
                next(err);
            }
        });
    }
    getAllProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield services_1.default.getAllProducts(req);
                res.status(200).send({
                    message: "Products retrieved!",
                    data: products,
                });
            }
            catch (err) {
                res.status(401).send({
                    message: String(err),
                });
                next(err);
            }
        });
    }
}
exports.default = DataControllers;
