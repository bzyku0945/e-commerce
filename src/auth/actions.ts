"use server"

import z from "zod"
import { signInSchema } from "./schemas"

export const signIn = async(unsafeData: z.infer<typeof signInSchema>) => {
    const {success, data} = signInSchema.safeParse(unsafeData)
    if(!success) return "Unable to login"
}