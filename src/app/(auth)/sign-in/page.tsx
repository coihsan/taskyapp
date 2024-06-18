import { redirect } from "next/navigation"
import { signIn, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import { Button } from "@/components/ui/button"
 
export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server"
            try {
              await signIn(`${provider.id}`, { redirectTo: "/dashboard" })
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${process.env.SIGNIN_ERROR_URL}?error=${error.type}`)
              }
              throw error
            }
          }}
        >
          <Button type="submit">
            <span>Sign in with {provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  )
}