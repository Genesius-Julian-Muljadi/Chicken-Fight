import { Request } from "express";
import DataUtils from "./utils";
import { ProductForm } from "../../interfaces/productForm";
import { TestimonialForm } from "../../interfaces/testimonialForm";

export default class DataServices {
  static async getAllTestimonials(req: Request) {
    try {
      const testimonials = await DataUtils.findAllTestimonials();

      return testimonials;
    } catch (err) {
      throw err;
    }
  }

  static async postTestimonial(req: Request) {
    try {
      const testimonialForm = req.body as TestimonialForm;

      const validTestimony: boolean = DataUtils.secretValidateTestimonial(testimonialForm);
      if (validTestimony) {
        const testimonial = await DataUtils.postTestimonial(testimonialForm);

        return testimonial;
      }
      // if not valid, still return success
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

      if (productForm.id) {
        if (productForm.promoted === "true") {
          product = await DataUtils.editMainProduct(productForm);
        } else if (productForm.promoted === "false") {
          product = await DataUtils.editProduct(productForm);
        } else throw new Error("400: Invalid promoted input");
      } else if (productForm.promoted === "true") {
        product = await DataUtils.postMainProduct(productForm);
      } else if (productForm.promoted === "false") {
        product = await DataUtils.postProduct(productForm);
      } else {
        throw new Error("400: Invalid promoted input");
      }

      return product;
    } catch (err) {
      throw err;
    }
  }

  static async deleteProduct(req: Request) {
    try {
      const productID = req.params.id as string;
      const product = await DataUtils.deleteProductByID(parseInt(productID));

      return product;
    } catch (err) {
      throw err;
    }
  }
}
