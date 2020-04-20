"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mid_urlShorten_1 = require("./mid.urlShorten");
const mid_getOrigin_1 = require("./mid.getOrigin");
const route = express_1.Router();
route.get("/", mid_urlShorten_1.validateUrl, mid_urlShorten_1.saveToDb, (req, res) => {
    res.json({
        success: true,
        shortenedUrl: res.shortenedUrl,
    });
});
route.get("/:shortenedUrl", mid_getOrigin_1.getOriginalUrl, (req, res) => {
    res.redirect(res.originalUrl);
});
exports.default = route;
//# sourceMappingURL=route.index.js.map