"use server"
import { signIn } from "@/auth"
 
export async function SignIn() {
  return (
    <form
      action={async () => {
        await signIn()
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}