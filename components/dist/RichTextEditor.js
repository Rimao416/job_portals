"use client";
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
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
require("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
var Editor = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-draft-wysiwyg"); }).then(function (mod) { return mod.Editor; }); }, { ssr: false });
exports["default"] = react_1.forwardRef(function RichTextEditor(props, ref) {
    return (React.createElement(Editor, __assign({ editorClassName: utils_1.cn("border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2", props.editorClassName), toolbar: {
            options: ["inline", "list", "textAlign", "link", "image"],
            inline: {
                options: ["bold", "italic", "underline", "strikethrough"]
            },
            list: {
                options: ["unordered", "ordered"]
            },
            textAlign: {
                options: ["left", "center", "right"]
            },
            link: {
                options: ["link"]
            },
            image: {
                options: ["image"]
            }
        }, editorRef: function (r) {
            if (r) {
                if (typeof ref === "function") {
                    ref(r);
                }
                else if (ref) {
                    ref.current = r;
                }
            }
        } }, props)));
});
