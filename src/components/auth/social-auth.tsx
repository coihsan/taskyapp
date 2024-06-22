"use client"
import { RiGithubFill } from "../icons/githubicons"
import { RiGoogleFill } from "../icons/googleIcons"
import { Button } from "../ui/button"

const SocialAuth = () =>{
    return(
        <div className="flex items-center gap-x-2 w-full">
            <Button
            size={'lg'}
            className="w-full flex items-center gap-x-3 justify-center"
            variant="secondary"
            onClick={() => {}}
            >
                <RiGoogleFill className="size-6" />
                <span>Google</span>
            </Button>
            <Button
            size={'lg'}
            className="w-full flex items-center gap-x-3 justify-center"
            variant="secondary"
            onClick={() => {}}
            >
                <RiGithubFill className="size-6" />
                <span>GitHub</span>
            </Button>
        </div>
    )
}

export default SocialAuth