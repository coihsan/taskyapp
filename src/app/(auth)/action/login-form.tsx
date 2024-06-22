"use client"
import LoginWrapper from "../action/login-wrapper";
import { Form, FormField, FormLabel, FormMessage, FormControl, FormItem} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import FromAuthError from "@/components/auth/form-auth-error";
import FormAuthSuccess from "@/components/auth/form-auth-success";
import { loginAction } from "./login-action";
import { LoginSchema } from "./schema";


const LoginForm = () =>{
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });

const onSubmit = (values : z.infer<typeof LoginSchema>) =>{
    setError("")
    setSuccess("")

    startTransition(() => {
        loginAction(values)
        .then((data) =>{
            setError(data.error)
            setSuccess(data.success)
        })
        .catch((error) =>{
            setError(error)
        })
    })
}

  return(
    <LoginWrapper
    headerLabel="Enter your email below to login to your account"
    backButtonLabel="Don't have an account?"
    backButtonHref="/sign-up"
    showSocial>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(() => {onSubmit})}
        className="space-y-4">
            <div className="space-y-4">
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="achonk@gmail.com" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="********" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>
            <FromAuthError message={error} />
            <FormAuthSuccess message={success} />
            <Button className="w-full" variant={'default'} type="submit">
                Login
            </Button>
            {/* <div className="flex items-center space-x-3 w-full">
                <Separator orientation="horizontal" />
                <div className="w-max text-sm text-muted-foreground">OR</div>
                <Separator orientation="horizontal" />
            </div> */}
        </form>
      </Form>
    </LoginWrapper>
  )
}

export default LoginForm