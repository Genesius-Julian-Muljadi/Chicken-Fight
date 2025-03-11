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
        message: "Testimonials retrieved!",
        data: testimonials,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }

  public async postTestimonial(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const testimonial = await DataServices.postTestimonial(req);

      res.status(200).send({
        message: "Testimonial posted!",
        data: testimonial,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }

  public async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await DataServices.getAllProducts(req);

      res.status(200).send({
        message: "Products retrieved!",
        data: products,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }

  public async postProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await DataServices.postProduct(req);

      res.status(200).send({
        message: "Product posted!",
        data: product,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }

  public async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await DataServices.deleteProduct(req);

      res.status(200).send({
        message: "Product deleted!",
        data: product,
      });
    } catch (err) {
      res.status(401).send({
        message: String(err),
      });
      next(err);
    }
  }
}
