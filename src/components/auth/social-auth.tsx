"use client"
import { RiGithubFill } from "../icons/githubicons"
import { RiGoogleFill } from "../icons/googleIcons"
import { Button } from "../ui/button"

const SocialAuth = () =>{
    return(
        <div className="flex items-center gap-x-2 w-full">
            <Button
            size={'lg'}
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
                <RiGoogleFill className="size-6" />
            </Button>
            <Button
            size={'lg'}
            className="w-full"
            variant="outline"
            onClick={() => {}}
            >
                <RiGithubFill className="size-6" />
            </Button>
        </div>
    )
}

export default SocialAuth