import {z} from "zod";
import { email } from "zod/mini";

export const usernameValidation = z
    .string()
    .min(1, "username cannot be empty")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(6, {message: "password should be min of 6 length"})
})