import { Router } from "express";
import DataControllers from "../controllers/data.controllers";

export default class DataRoutes {
  private router;
  private controllers = new DataControllers();

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get(
      "/testimonials",
      this.controllers.getAllTestimonials
    )
  }

  public getRoutes() {
    return this.router;
  }
}
