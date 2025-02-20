import { Request } from "express";
import DataUtils from "./utils";
import { ProductForm } from "../../interfaces/productForm";

export default class DataServices {
  static async getAllTestimonials(req: Request) {
    try {
      const testimonials = await DataUtils.findAllTestimonials();

      return testimonials;
    } catch (err) {
      throw err;
    }
  }

  static async getAllProducts(req: Request) {
    try {
      const products = await DataUtils.findAllProducts();

      return products;
    } catch (err) {
      throw err;
    }
  }

  static async postProduct(req: Request) {
    try {
      const productForm = req.body as ProductForm;

      let product;

      if (productForm.promoted === "true") {
        product = await DataUtils.postMainProduct(productForm);
      } else if (productForm.promoted === "false") {
        product = await DataUtils.postProduct(productForm);
      } else {
        throw new Error("Invalid promoted input");
      }

      return product;
    } catch (err) {
      throw err;
    }
  }
}
