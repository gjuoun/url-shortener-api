"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== "prod") {
    dotenv_1.default.config();
}
const express_1 = __importDefault(require("express"));
exports.express = express_1.default;
const body_parser_1 = __importDefault(require("body-parser"));
const route_index_1 = __importDefault(require("./routes/route.index"));
const app = express_1.default();
const HOST_HREF = "http://" + process.env.DOMAIN || "localhost";
exports.HOST_HREF = HOST_HREF;
app.use(body_parser_1.default.json());
app.use("/", route_index_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Running on " + PORT);
});
//# sourceMappingURL=app.js.map