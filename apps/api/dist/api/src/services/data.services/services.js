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
const utils_1 = __importDefault(require("./utils"));
class DataServices {
    static getAllTestimonials(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonials = yield utils_1.default.findAllTestimonials();
                return testimonials;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static postTestimonial(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testimonialForm = req.body;
                const validTestimony = utils_1.default.secretValidateTestimonial(testimonialForm);
                if (validTestimony) {
                    const testimonial = yield utils_1.default.postTestimonial(testimonialForm);
                    return testimonial;
                }
                // if not valid, still return success
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getAllProducts(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield utils_1.default.findAllProducts();
                return products;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static postProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productForm = req.body;
                let product;
                if (productForm.id) {
                    if (productForm.promoted === "true") {
                        product = yield utils_1.default.editMainProduct(productForm);
                    }
                    else if (productForm.promoted === "false") {
                        product = yield utils_1.default.editProduct(productForm);
                    }
                    else
                        throw new Error("400: Invalid promoted input");
                }
                else if (productForm.promoted === "true") {
                    product = yield utils_1.default.postMainProduct(productForm);
                }
                else if (productForm.promoted === "false") {
                    product = yield utils_1.default.postProduct(productForm);
                }
                else {
                    throw new Error("400: Invalid promoted input");
                }
                return product;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static deleteProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productID = req.params.id;
                const product = yield utils_1.default.deleteProductByID(parseInt(productID));
                return product;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = DataServices;
