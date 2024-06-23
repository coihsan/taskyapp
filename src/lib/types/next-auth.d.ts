import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth"{
    interface Session {
        user :{
            name: string,
            email: string,
            password: string,
            image: string
        } & DefaultSession["user"]
    }
    interface JWT {
        idToken?: string
      }

    interface User {}
    interface Account {}
    interface Profile {}
}