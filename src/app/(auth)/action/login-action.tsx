"use server"
import * as z from 'zod'
import { LoginSchema } from './schema'

export const loginAction = async (values : z.infer<typeof LoginSchema>) =>{
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success){
        return {error : "Invalid credentials!" }
    }
    return {success: "Login Successful"}
}