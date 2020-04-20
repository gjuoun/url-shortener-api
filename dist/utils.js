"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidUrl(url) {
    const urlRegExp = /^https?:\/\/(.+).*/i;
    return urlRegExp.test(url);
}
exports.isValidUrl = isValidUrl;
//# sourceMappingURL=utils.js.map