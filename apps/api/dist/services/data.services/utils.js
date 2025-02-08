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
const prisma_1 = __importDefault(require("../../lib/prisma"));
class DataUtils {
    static findAllTestimonials() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findTestimonials = yield prisma_1.default.testimonials.findMany();
                if (!findTestimonials)
                    throw new Error("Unable to find testimonials");
                if (findTestimonials.length < 1)
                    throw new Error("No testimonials available");
                return findTestimonials;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findProducts = yield prisma_1.default.products.findMany();
                if (!findProducts)
                    throw new Error("Unable to find products");
                if (findProducts.length < 1)
                    throw new Error("No products available");
                return findProducts;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = DataUtils;
