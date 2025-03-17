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
const config_1 = require("../../config");
class CloudinaryServices {
    static sign(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { paramsToSign } = req.body;
                const signature = cloudinary_1.v2.utils.api_sign_request(paramsToSign, String(config_1.CLOUDINARY_API_SECRET));
                return signature;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static destroy(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publicID = req.body.publicID;
                const resource_type = req.body.resource_type;
                const data = yield cloudinary_1.v2.api.delete_resources([publicID], {
                    type: "upload",
                    resource_type: resource_type || "image",
                });
                if (data.deleted[publicID] === "not_found") {
                    throw new Error("404: Resource not found with public ID and type");
                }
                return data;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = CloudinaryServices;
