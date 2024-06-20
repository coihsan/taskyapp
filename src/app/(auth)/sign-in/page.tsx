import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {RiGithubFill} from "@/components/icons/githubicons"
import {RiGoogleFill} from "@/components/icons/googleIcons"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SIGNIN_ERROR_URL = "/signin-error"
export function SignInPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div>
            {Object.values(providerMap).map((provider) => (
            <form
                action={async () => {
                "use server"
                try {
                    await signIn(provider.id)
                } catch (error) {
                    if (error instanceof AuthError) {
                    return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                    }
                    throw error
                }
                }}
            >
                <Button className="border flex gap-4" variant={'ghost'} type="submit">
                {provider.id === 'github' ? <RiGithubFill /> : <RiGoogleFill />}
                <span>{provider.name}</span>
                </Button>
            </form>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
