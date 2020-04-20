"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Link = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    shortenedLink: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true,
    },
    fromIp: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
});
exports.default = mongoose_1.default.model("link", Link);
//# sourceMappingURL=Link.js.map