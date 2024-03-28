import Joi from "joi";

export const userValid = Joi.object({
    name: Joi.string().required().min(2).max(30).message({
        "string.empty": "User không được để trống",
        "any.required": "Username là bắt buộc!",
        "string.min": "Username phải có ít nhất {#limit} ký tự",
        "string.max": "Username phải dưới {#limit + 1} ký tự"
    }),
   email: Joi.string().required().email().message({
    "string.empty": "Email không được để trống",
    "any.required": "Email là bắt buộc!",
    "string.email": "Email không được định dạng"
   }),
   password: Joi.string().required().min(6).max(100).message({
    "string.empty": "Password không được để trống",
    "any.required": "Password là bắt buộc!",
    "string.min": "Password phải có ít nhất {#limit} ký tự",
    "string.max": "Password phải dưới {#limit + 1} ký tự"
   }),
   confirmPassword:Joi.string().required().min(6).max(100).message({
    "string.empty": "Password không được để trống",
    "any.required": "Password là bắt buộc!",
    "string.min": "Password phải có ít nhất {#limit} ký tự",
    "string.max": "Password phải dưới {#limit + 1} ký tự"
   }),
   role:Joi.string()
});
export const signInValidator = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc!",
        "string.email": "Email không được định dạng"
    }),
    password: Joi.string().required().min(6).max(100).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Password là bắt buộc!",
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.max": "Password phải dưới {#limit + 1} ký tự"
    }),
});
