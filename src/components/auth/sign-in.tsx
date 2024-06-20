"use client"
import { signIn } from "@/auth"
 
export async function SignIn() {
  return (
    <form
    action={async () => {
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 