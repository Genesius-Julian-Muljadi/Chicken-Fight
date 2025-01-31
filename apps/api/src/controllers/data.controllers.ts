import { NextFunction, Request, Response } from "express";
import DataServices from "../services/data.services/services";

export default class DataControllers {
  public async getAllTestimonials(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const testimonials = await DataServices.getAllTestimonials(req);

      res.status(200).send({
        message: "Quizzes retrieved!",
        data: testimonials,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }
}
