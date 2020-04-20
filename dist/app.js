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
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const route_index_1 = __importDefault(require("./routes/route.index"));
const app = express_1.default();
const HOST_HREF = "http://" + process.env.DOMAIN || "localhost";
exports.HOST_HREF = HOST_HREF;
mongoose_1.default.connect(process.env.MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(body_parser_1.default.json());
app.use("/", route_index_1.default);
app.listen(3000, () => {
    console.log("Running on 3000");
});
//# sourceMappingURL=app.js.map