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
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
    postTestimonial(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonial = yield services_1.default.postTestimonial(req);
                res.status(201).send({
                    message: "Testimonial posted!",
                    data: testimonial,
                });
            }
            catch (err) {
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
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
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
    postProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield services_1.default.postProduct(req);
                res.status(201).send({
                    message: "Product posted!",
                    data: product,
                });
            }
            catch (err) {
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
    deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield services_1.default.deleteProduct(req);
                res.status(200).send({
                    message: "Product deleted!",
                    data: product,
                });
            }
            catch (err) {
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
}
exports.default = DataControllers;
