"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
route.get("/", (req, res) => {
    console.log('genUrl');
});
exports.default = route;
//# sourceMappingURL=route.genUrl.js.map