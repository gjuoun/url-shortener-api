"use strict";
var Validation;
(function (Validation) {
    function isValidUrl(url) {
        const urlRegExp = /^https?:\/\/(.+).*/i;
        return urlRegExp.test(url);
    }
    Validation.isValidUrl = isValidUrl;
})(Validation || (Validation = {}));
//# sourceMappingURL=validation.js.map