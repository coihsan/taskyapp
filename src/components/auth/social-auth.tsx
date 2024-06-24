"use client"
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes"
import { RiGithubFill } from "../icons/githubicons"
import { RiGoogleFill } from "../icons/googleIcons"
import { Button } from "../ui/button"
import signIn from "next-auth/react"

const SocialAuth = () =>{
    const onClick = (provider : "google" | "github") =>{
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }
    return(
        <div className="flex items-center gap-x-2 w-full">
            <Button
            size={'lg'}
            className="w-full flex items-center gap-x-3 justify-center"
            variant="default"
            onClick={() => onClick("google")}
            >
                <RiGoogleFill className="size-6" />
                <span>Google</span>
            </Button>
            <Button
            size={'lg'}
            className="w-full flex items-center gap-x-3 justify-center"
            variant="default"
            onClick={() => onClick("github")}
            >
                <RiGithubFill className="size-6" />
                <span>GitHub</span>
            </Button>
        </div>
    )
}

export default SocialAuth