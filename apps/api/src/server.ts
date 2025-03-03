import express, { Application } from "express";
import cors from "cors";
import { BASE_WEB_URL, PORT } from "./config";
import helmet from "helmet";
import AuthRoutes from "./routes/auth.routes";
import DataRoutes from "./routes/data.routes";

export default class Server {
  private app: Application;
  private port: number | string;

  constructor() {
    this.port = PORT || 8000;
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    // Handle preflight requests
    this.app.options(
      "*",
      cors({
        origin: String(BASE_WEB_URL),
        credentials: true,
        methods: ["OPTIONS"],
        allowedHeaders: [
          "X-CSRF-Token",
          "X-Requested-With",
          "Accept",
          "Accept-Version",
          "Content-Length",
          "Content-MD5",
          "Content-Type",
          "Date",
          "X-Api-Version",
        ],
        optionsSuccessStatus: 200,
      })
    ); // Preflight requests for all routes
    this.app.use(
      cors({
        origin: String(BASE_WEB_URL),
        credentials: true,
        methods: ["GET", "POST", "DELETE"],
        allowedHeaders: [
          "X-CSRF-Token",
          "X-Requested-With",
          "Accept",
          "Accept-Version",
          "Content-Length",
          "Content-MD5",
          "Content-Type",
          "Date",
          "X-Api-Version",
        ],
      })
    );

    this.app.use(helmet());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use("/auth", new AuthRoutes().getRoutes());
    this.app.use("/data", new DataRoutes().getRoutes());
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}.`);
    });
  }
}
