import { Router } from "express";
import DataControllers from "../controllers/data.controllers";
import ProductValidations from "../middlewares/validations/product_validation";

export default class DataRoutes {
  private router;
  private controllers = new DataControllers();
  private productValidations = new ProductValidations();

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/testimonials", this.controllers.getAllTestimonials);
    this.router.get("/products", this.controllers.getAllProducts);
    this.router.post(
      "/product",
      this.productValidations.productValidation,
      this.controllers.postProduct
    );
    this.router.delete("/product/:id", this.controllers.deleteProduct);
  }

  public getRoutes() {
    return this.router;
  }
}
