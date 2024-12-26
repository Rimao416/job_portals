"use strict";
exports.__esModule = true;
exports.jobFilterSchema = exports.createJobSchema = void 0;
var zod_1 = require("zod");
var job_types_1 = require("./job-types");
var requiredString = zod_1.z.string().min(1, "Required");
var numeriRequiredString = requiredString.regex(/^\d+$/, "Must be a number");
var companyLogoSchema = zod_1.z
    .custom()
    .refine(function (file) { return !file || (file instanceof File && file.type.startsWith("image/")); }, "Invalid Company Logo")
    .refine(function (file) { return file && file.size < 5 * 1024 * 1024; }, "File size should be less than 5MB");
var applicationSchema = zod_1.z
    .object({
    applicationEmail: zod_1.z.string().max(100).email().optional().or(zod_1.z.literal("")),
    applicationUrl: zod_1.z.string().url().optional().or(zod_1.z.literal(""))
})
    .refine(function (data) { return data.applicationEmail || data.applicationUrl; }, {
    message: "Application Email or Application Url is required",
    path: ["applicationEmail", "applicationUrl"]
});
var locationSchema = zod_1.z
    .object({
    locationType: requiredString.refine(function (value) { return job_types_1.locationTypes.includes(value); }, "Invalid Location Type"),
    location: requiredString
})
    .refine(function (data) {
    return !data.locationType || data.locationType === "Remote" || data.location;
}, {
    message: "Location is required",
    path: ["location"]
});
exports.createJobSchema = zod_1.z
    .object({
    title: requiredString.max(100),
    type: requiredString.refine(function (value) { return job_types_1.jobTypes.includes(value); }, "Invalid Job Type"),
    companyName: requiredString.max(100),
    companyLogo: companyLogoSchema,
    description: zod_1.z.string().max(5000).optional(),
    salary: numeriRequiredString.max(9, "Must be a number").optional()
})
    .and(applicationSchema)
    .and(locationSchema);
exports.jobFilterSchema = zod_1.z.object({
    q: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    remote: zod_1.z.coerce.boolean().optional()
});
