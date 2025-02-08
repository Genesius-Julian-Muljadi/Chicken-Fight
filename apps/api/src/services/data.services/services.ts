import { Request } from "express";
import DataUtils from "./utils";

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
}
