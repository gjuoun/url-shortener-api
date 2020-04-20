"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation;
(function (Validation) {
    function isValidUrl(url) {
        const urlRegExp = /^https?:\/\/(.+).*/i;
        return urlRegExp.test(url);
    }
    Validation.isValidUrl = isValidUrl;
})(Validation = exports.Validation || (exports.Validation = {}));
//# sourceMappingURL=validation.js.map