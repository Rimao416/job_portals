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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var form_1 = require("@/components/ui/form");
var h1_1 = require("@/components/ui/h1");
var validation_1 = require("@/lib/validation");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var input_1 = require("@/components/ui/input");
var job_types_1 = require("@/lib/job-types");
var select_1 = require("@/components/ui/select");
var LocationInput_1 = require("@/components/LocationInput");
var lucide_react_1 = require("lucide-react");
var label_1 = require("@/components/ui/label");
var RichTextEditor_1 = require("@/components/RichTextEditor");
var markdown_draft_js_1 = require("markdown-draft-js");
var LoadingButton_1 = require("@/components/LoadingButton");
function NewJobForm() {
    var _this = this;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validation_1.createJobSchema)
    });
    var handleSubmit = form.handleSubmit, watch = form.watch, trigger = form.trigger, control = form.control, setValue = form.setValue, setFocus = form.setFocus, isSubmitting = form.formState.isSubmitting;
    function onSubmit(data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                alert(JSON.stringify(data));
                return [2 /*return*/];
            });
        });
    }
    return (react_1["default"].createElement("main", { className: "m-auto my-10 max-w-3xl space-y-10" },
        react_1["default"].createElement("div", { className: "space-y-5 text-center" },
            react_1["default"].createElement(h1_1["default"], null, "Find your perfect developer"),
            react_1["default"].createElement("p", { className: "text-muted-foreground" }, "Get your job posting seen by thousands of job seekers")),
        react_1["default"].createElement("div", { className: "space-y-6 rounded-lg border p-4" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "font-semibold" }, "Job Details"),
                react_1["default"].createElement("p", { className: "text-muted-foreground" }, "Provide a job description and details")),
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { className: "space-y-4", noValidate: true, onSubmit: form.handleSubmit(onSubmit) },
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "title", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Job Title"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Job Title" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "type", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Job Type"),
                                react_1["default"].createElement(select_1["default"], __assign({}, field, { defaultValue: "" }),
                                    react_1["default"].createElement("option", { value: "", hidden: true }, "Select an option"),
                                    job_types_1.jobTypes.map(function (jobType) { return (react_1["default"].createElement("option", { key: jobType, value: jobType }, jobType)); }))));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "companyName", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Company Name"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Company Name" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "companyLogo", render: function (_a) {
                            var _b = _a.field, value = _b.value, fieldValues = __rest(_b, ["value"]);
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Company Name"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Company Name" }, fieldValues, { type: "file", accept: "image/*", onChange: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                            var file;
                                            var _a;
                                            return __generator(this, function (_b) {
                                                file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
                                                fieldValues.onChange(file);
                                                return [2 /*return*/];
                                            });
                                        }); } }))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "locationType", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Job Type"),
                                react_1["default"].createElement(select_1["default"], __assign({}, field, { defaultValue: "", onChange: function (e) {
                                        field.onChange(e);
                                        if (e.currentTarget.value == "Remote") {
                                            trigger("location");
                                        }
                                    } }),
                                    react_1["default"].createElement("option", { value: "", hidden: true }, "Select an option"),
                                    job_types_1.locationTypes.map(function (locationType) { return (react_1["default"].createElement("option", { key: locationType, value: locationType }, locationType)); }))));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: control, name: "location", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Office Location "),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(LocationInput_1["default"], { onLocationSelected: field.onChange, ref: field.ref })),
                                watch("location") && (react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                                    react_1["default"].createElement("button", { type: "button", onClick: function () {
                                            setValue("location", "", { shouldValidate: true });
                                        } },
                                        react_1["default"].createElement(lucide_react_1.X, { size: 20 })),
                                    react_1["default"].createElement("span", { className: "text-sm" }, watch("location")))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement("div", { className: "space-y-2" },
                        react_1["default"].createElement(label_1.Label, { htmlFor: "applicationEmail" }, "How To Apply"),
                        react_1["default"].createElement("div", { className: "flex justify-between" },
                            react_1["default"].createElement(form_1.FormField, { control: control, name: "applicationEmail", render: function (_a) {
                                    var field = _a.field;
                                    return (react_1["default"].createElement(form_1.FormItem, { className: "grow" },
                                        react_1["default"].createElement(form_1.FormControl, null,
                                            react_1["default"].createElement("div", { className: "flex items-center" },
                                                react_1["default"].createElement(input_1.Input, __assign({ id: "applicationEmail", placeholder: "Application Email", type: "email" }, field)),
                                                react_1["default"].createElement("span", { className: "mx-2" }, "or"))),
                                        react_1["default"].createElement(form_1.FormMessage, null)));
                                } }),
                            react_1["default"].createElement(form_1.FormField, { control: control, name: "applicationUrl", render: function (_a) {
                                    var field = _a.field;
                                    return (react_1["default"].createElement(form_1.FormItem, { className: "grow" },
                                        react_1["default"].createElement(form_1.FormControl, null,
                                            react_1["default"].createElement(input_1.Input, __assign({ id: "applicationUrl", placeholder: "Website URL", type: "url" }, field, { onChange: function (e) {
                                                    field.onChange(e);
                                                    trigger("applicationEmail");
                                                } }))),
                                        react_1["default"].createElement(form_1.FormMessage, null)));
                                } })))),
                react_1["default"].createElement(form_1.FormField, { control: control, name: "description", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, null,
                            react_1["default"].createElement(label_1.Label, null, "Description"),
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement(RichTextEditor_1["default"], { onChange: function (draft) { return field.onChange(markdown_draft_js_1.draftToMarkdown(draft)); }, ref: field.ref })),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(form_1.FormField, { control: control, name: "salary", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, null,
                            react_1["default"].createElement(form_1.FormLabel, null, "Salary"),
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Salary" }, field, { type: "number" }))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(LoadingButton_1["default"], { type: "submit", loading: isSubmitting }, "Submit")))));
}
exports["default"] = NewJobForm;
