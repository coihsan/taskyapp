import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization:{
        URLSearchParams:{
          prompt:"consent",
          access_type:"offline",
          response_type:"code"
        }
      }
    }),
  ];

  export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
export default { providers } satisfies NextAuthConfig