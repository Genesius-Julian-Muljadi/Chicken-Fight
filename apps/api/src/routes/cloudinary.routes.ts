import { Router } from "express";
import Cloudinary from "../controllers/cloudinary.controllers";

export default class CloudinaryRoutes {
  private router;
  private controllers = new Cloudinary();

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post("/sign", this.controllers.sign());
    this.router.delete("/destroy", this.controllers.destroyByID);
  }

  public getRoutes() {
    return this.router;
  }
}
