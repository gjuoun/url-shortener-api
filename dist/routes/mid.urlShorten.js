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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const Link_model_1 = __importDefault(require("../model/Link.model"));
const app_1 = require("../app");
function saveToDb(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const fromIp = (_a = req.headers["x-forwarded-for"], (_a !== null && _a !== void 0 ? _a : req.connection.remoteAddress));
        const _id = nanoid_1.nanoid(10);
        const shortenedUrl = `${app_1.HOST_HREF}/${_id}`;
        const linkModel = new Link_model_1.default({
            _id,
            shortenedUrl: shortenedUrl,
            originalUrl: req.body.originalUrl,
            fromIp: fromIp || "",
            timestamp: Math.trunc(Date.now() / 1000),
        });
        yield linkModel.save();
        // links.push(link);
        res.shortenedUrl = shortenedUrl;
        next();
    });
}
exports.saveToDb = saveToDb;
function validateUrl(req, res, next) {
    if (!req.body.originalUrl) {
        res.status(500);
        return res.send({
            success: false,
            errMessage: "originalUrl is needed",
        });
    }
    if (!Validation.isValidUrl(req.body.originalUrl)) {
        res.status(500);
        return res.send({
            success: false,
            errMessage: "Url is not valid",
        });
    }
    next();
}
exports.validateUrl = validateUrl;
//# sourceMappingURL=mid.urlShorten.js.map