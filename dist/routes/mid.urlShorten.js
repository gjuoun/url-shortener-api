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
const model_Link_1 = __importDefault(require("../model/model.Link"));
const app_1 = require("../app");
const validation_1 = require("../validation");
function saveToDb(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // shortenedUrl: http://localhost/abcdefghij
        const _id = nanoid_1.nanoid(10);
        const newLink = new model_Link_1.default({
            _id,
            shortenedUrl: `${app_1.HOST_HREF}/${_id}`,
            originalUrl: req.body.originalUrl,
            fromIp: req.headers["x-forwarded-for"] ||
                req.connection.remoteAddress ||
                "",
            timestamp: Math.trunc(Date.now() / 1000),
        });
        yield newLink.save();
        // links.push(link);
        res.shortenedUrl = newLink.shortenedUrl;
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
    if (!validation_1.Validation.isValidUrl(req.body.originalUrl)) {
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