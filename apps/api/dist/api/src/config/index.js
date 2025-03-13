"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.CREATOR_EMAIL = exports.BASE_WEB_URL = exports.SECRET_KEY = exports.DIRECT_URL = exports.DATABASE_URL = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: ".env",
});
_a = process.env, exports.PORT = _a.PORT, exports.DATABASE_URL = _a.DATABASE_URL, exports.DIRECT_URL = _a.DIRECT_URL, exports.SECRET_KEY = _a.SECRET_KEY, exports.BASE_WEB_URL = _a.BASE_WEB_URL, exports.CREATOR_EMAIL = _a.CREATOR_EMAIL, exports.CLOUDINARY_CLOUD_NAME = _a.CLOUDINARY_CLOUD_NAME, exports.CLOUDINARY_API_KEY = _a.CLOUDINARY_API_KEY, exports.CLOUDINARY_API_SECRET = _a.CLOUDINARY_API_SECRET;
