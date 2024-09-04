"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperSignIn = exports.DeveloperSignUp = exports.PremiumUserSignIn = exports.PremiumUserSignUp = exports.UserSignInInp = exports.UserSignUpInp = void 0;
const zod_1 = require("zod");
exports.UserSignUpInp = zod_1.z.object({
    fistName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    phoneNo: zod_1.z.number().min(10),
});
exports.UserSignInInp = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8)
});
exports.PremiumUserSignUp = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    phoneNo: zod_1.z.number().min(10)
});
exports.PremiumUserSignIn = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8),
});
exports.DeveloperSignUp = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    Role: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8),
    phoneNo: zod_1.z.number().min(10)
});
exports.DeveloperSignIn = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(8)
});
