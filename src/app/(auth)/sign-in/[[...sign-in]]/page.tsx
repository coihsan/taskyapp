import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn signUpFallbackRedirectUrl='/workspace' />
}