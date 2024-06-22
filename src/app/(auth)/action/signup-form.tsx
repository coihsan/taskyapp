"use client"
import LoginWrapper from "./login-wrapper";
import { Form, FormField, FormLabel, FormMessage, FormControl, FormItem} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from 'zod'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupSchema } from "./schema";

const SignupForm = () =>{
    const form = useForm<z.infer<typeof SignupSchema>>({
        mode: "onChange",
        resolver: zodResolver(SignupSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      });

function handleSubmit(){
    console.log(form.getValues())
}
  return(
    <LoginWrapper
    headerLabel="Enter your email below to create your account"
    backButtonLabel="Already have an account?"
    backButtonHref="/sign-in"
    showSocial>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(() => {})}
        className="space-y-4">
            <div className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="achonk" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
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
            <Button className="w-full" variant={'default'} type="submit">
                Create an account
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

export default SignupForm