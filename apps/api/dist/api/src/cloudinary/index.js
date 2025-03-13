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
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const config_1 = require("../config");
class Cloudinary {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: config_1.CLOUDINARY_CLOUD_NAME,
            api_key: config_1.CLOUDINARY_API_KEY,
            api_secret: config_1.CLOUDINARY_API_SECRET,
        });
    }
    signHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { paramsToSign } = req.body;
            const signature = cloudinary_1.v2.utils.api_sign_request(paramsToSign, String(config_1.CLOUDINARY_API_SECRET));
            res.status(200).json({ signature });
        });
    }
    sign() {
        return this.signHandler;
    }
}
exports.default = Cloudinary;
