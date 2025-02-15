const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "Invalid email" })
    .min(3, { message: "email must be minimum 3 characters" })
    .max(50, { message: "email must not greater than 50 characters" })
    .trim(),
  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "password must be minimum 8 characters" })
    .max(25, { message: "password must not greater than 25 characters" })
    .trim(),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "username is required" })
    .min(3, { message: "username must be minimum 3 characters" })
    .max(50, { message: "username must not greater than 50 characters" })
    .trim(),

  dob: z.string({ required_error: "dob is required" }),
});

module.exports = { signupSchema, loginSchema };
