"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login, signup } from './actions'
import { z } from "zod"
import Image from "next/image"
import Logo from "@/components/global/logo"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
export default function LoginPage() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <section className='flex items-center justify-center flex-col h-screen'>
        <div className="flex items-center flex-col justify-center gap-3 w-full">
          <Logo />
          <h2 className="text-3xl lg:text-6xl font-semibold">Welcome Tasky</h2>
          <p className="text-center text-onyx-400">Organize All of your projects with one account.</p>
        </div>
        <div className="max-w-[500px] mx-auto w-full flex items-center justify-center p-5 mt-9">
          <div className="w-full borderStyle rounded-2xl p-5 grid gap-5">
              <h2 className="font-semibold pb-3 text-center text-xl">Log in to your account</h2>
            <Form {...form}>
              <form action="" className="grid gap-5">
              <FormField control={form.control} name="username" render={({field}) =>(
                <FormItem>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormControl>
                  <Input type="username" name="username" placeholder="jhondoe@example.com" />
                </FormControl>
              </FormItem>
              )} />
              <div className="grid">
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input type="password" name="password" placeholder="*******" />
                </FormControl>
              </FormItem>
              <div className="flex justify-between items-center mt-3 *:text-sm">
                <div className="flex items-center gap-3">
                  <Checkbox id="password" />
                  <label htmlFor="password">Remember me</label>
                </div>
                <Link className="text-lime-600 dark:text-lime-400" href="/forgot-password">Forgot password?</Link>
              </div>
              </div>
              <div className="grid gap-3 mt-6">
                <Button variant={'default'} formAction={login}>Log in</Button>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="text-center text-onyx-400">Don't have an account?</span>
                  <Link className="text-lime-600 dark:text-lime-400" href={'/sign-up'}>Sign up</Link>
                </div>
              </div>
              </form>
            </Form>
          </div>
        </div>
    </section>
  )
}