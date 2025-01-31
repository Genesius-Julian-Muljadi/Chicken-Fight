import { Request } from "express";
import DataUtils from "./utils";

export default class DataServices {
  static async getAllTestimonials(req: Request) {
    try {
      const quizzes = await DataUtils.findAllTestimonials();

      return quizzes;
    } catch (err) {
      throw err;
    }
  }
}
