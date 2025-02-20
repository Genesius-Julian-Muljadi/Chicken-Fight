import { ProductForm } from "../../interfaces/productForm";
import prisma from "../../lib/prisma";

export default class DataUtils {
  static async findAllTestimonials() {
    try {
      const findTestimonials = await prisma.testimonials.findMany();
      if (!findTestimonials) throw new Error("Unable to find testimonials");
      if (findTestimonials.length < 1)
        throw new Error("No testimonials available");

      return findTestimonials;
    } catch (err) {
      throw err;
    }
  }

  static async findAllProducts() {
    try {
      const findProducts = await prisma.products.findMany();
      if (!findProducts) throw new Error("Unable to find products");
      if (findProducts.length < 1) throw new Error("No products available");

      return findProducts;
    } catch (err) {
      throw err;
    }
  }

  static async postMainProduct(product: ProductForm) {
    try {
      const newMainProduct = await prisma.products.create({
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
    } catch (err) {
      throw err;
    }
  }

  static async postProduct(product: ProductForm) {
    try {
      const newProduct = await prisma.products.create({
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
    } catch (err) {
      throw err;
    }
  }
}
