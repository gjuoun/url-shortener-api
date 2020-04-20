"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const Link = new app_1.mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    shortenedUrl: {
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
exports.default = app_1.mongoose.model("link", Link);
//# sourceMappingURL=Link.model.js.map