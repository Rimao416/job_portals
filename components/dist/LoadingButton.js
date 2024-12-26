"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var button_1 = require("./ui/button");
function LoadingButton(_a) {
    var children = _a.children, loading = _a.loading, props = __rest(_a, ["children", "loading"]);
    return (React.createElement(button_1.Button, __assign({}, props, { type: "submit", disabled: props.disabled }),
        React.createElement("span", { className: "flex items-center justify-center gap-1" },
            loading && React.createElement(lucide_react_1.Loader2, { size: 16, className: "animate-spin" }),
            children)));
}
exports["default"] = LoadingButton;
