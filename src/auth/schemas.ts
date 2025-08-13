import { email } from "./../../node_modules/zod/src/v4/core/regexes";
import z from "zod";

export const signInSchema = z.object({
  email: z.email().min(1).max(20),
  password: z.string().min(8).max(24)
});

export const signUpSchema = z.object({
  email: z.email().min(1).max(20),
  password: z.string().min(8).max(24)
});

