import { Auth } from "@auth/core"
import Google from "@auth/core/providers/google"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET }),
  ],
})