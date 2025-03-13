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
                    throw new Error("404: Unable to find testimonials");
                if (findTestimonials.length < 1)
                    throw new Error("404: No testimonials available");
                return findTestimonials;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static secretValidateTestimonial(testimonial) {
        // work on this
        // secret validation to still return success if this fails
        // Prevent spam and nonsense posts from filling database
        return true;
    }
    static postTestimonial(testimonial) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTestimonial = yield prisma_1.default.testimonials.create({
                    data: {
                        id: testimonial.id ? parseInt(testimonial.id) : undefined,
                        testifier: testimonial.testifier,
                        testimony: testimonial.testimony,
                        dateCreated: testimonial.dateCreated
                            ? new Date(testimonial.dateCreated)
                            : undefined,
                    },
                });
                return newTestimonial;
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
                    throw new Error("404: Unable to find products");
                if (findProducts.length < 1)
                    throw new Error("404: No products available");
                return findProducts;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static postMainProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMainProduct = yield prisma_1.default.products.create({
                    data: {
                        image: product.image,
                        promoted: true,
                        name: product.name,
                        type: parseInt(product.type),
                        overview: product.overview || undefined,
                        desc: product.desc || undefined,
                    },
                });
                return newMainProduct;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static postProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield prisma_1.default.products.create({
                    data: {
                        image: product.image,
                        promoted: false,
                        name: product.name,
                        type: parseInt(product.type),
                        overview: product.overview || undefined,
                        desc: product.desc || undefined,
                    },
                });
                return newProduct;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static editMainProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield prisma_1.default.products.update({
                    data: {
                        image: product.image,
                        promoted: true,
                        name: product.name,
                        type: parseInt(product.type),
                        overview: product.overview || undefined,
                        desc: product.desc || undefined,
                    },
                    where: {
                        id: parseInt(product.id),
                    },
                });
                return newProduct;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static editProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield prisma_1.default.products.update({
                    data: {
                        image: product.image,
                        promoted: false,
                        name: product.name,
                        type: parseInt(product.type),
                        overview: product.overview || undefined,
                        desc: product.desc || undefined,
                    },
                    where: {
                        id: parseInt(product.id),
                    },
                });
                return newProduct;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static deleteProductByID(productID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oldProduct = yield prisma_1.default.products.delete({
                    where: {
                        id: productID,
                    },
                });
                return oldProduct;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = DataUtils;
