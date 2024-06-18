import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import type { Provider } from "next-auth/providers"
export default { providers: [Google, GitHub] } satisfies NextAuthConfig