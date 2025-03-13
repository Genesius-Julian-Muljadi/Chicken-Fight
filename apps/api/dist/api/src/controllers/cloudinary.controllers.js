"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const config_1 = require("../config");
const services_1 = __importDefault(require("../services/cloudinary.services/services"));
class Cloudinary {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: config_1.CLOUDINARY_CLOUD_NAME,
            api_key: config_1.CLOUDINARY_API_KEY,
            api_secret: config_1.CLOUDINARY_API_SECRET,
        });
    }
    signHandler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const signature = yield services_1.default.sign(req);
                res.status(200).json({ signature });
            }
            catch (err) {
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
    sign() {
        return this.signHandler;
    }
    destroyByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield services_1.default.destroy(req);
                res.status(200).send({
                    message: "Asset deleted",
                    data: data,
                });
            }
            catch (err) {
                res.status(parseInt(String(err).slice(7, 10)) || 500).send({
                    message: parseInt(String(err).slice(7, 10))
                        ? String(err).slice(12)
                        : String(err).slice(7),
                });
                next(err);
            }
        });
    }
}
exports.default = Cloudinary;
