"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
route.get("/:shortenedLink", (req, res) => {
    console.log("getOrigin");
});
exports.default = route;
//# sourceMappingURL=route.getOrigin.js.map