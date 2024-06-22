"use server"
import * as z from 'zod';
import { LoginSchema, SignupSchema } from './schema';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/lib/data/user';

export const loginAction = async (values : z.infer<typeof LoginSchema>) =>{
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success){
        return {error : "Invalid credentials!" }
    }
    const {email, password} = validatedFields.data;

    const existingUser = await db.user.findUnique({
        where: {
            email,
            password
        }
    })

    if (!existingUser){
        return {error: "User does not exist"}
    }

    return {success: "Login Successful"}
}

export const SignupAction = async (values : z.infer<typeof SignupSchema>) =>{
    const validatedFields = SignupSchema.safeParse(values);

    if (!validatedFields.success){
        return {error : "Invalid credentials!" }
    }
    const {email, password, name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if (existingUser){
        return {error: "User already exists"}
    } 

    await db.user.create({
        data:{
            email,
            name,
            password: hashedPassword
        }
    });

    // TODO : Send verification token

    return {success: "Sign up Successful"}
}