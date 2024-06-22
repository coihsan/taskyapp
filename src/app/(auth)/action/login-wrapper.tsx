"use client"

import BackButtonAuth from "@/components/auth/back-button-auth"
import HeaderAuth from "@/components/auth/header-auth"
import SocialAuth from "@/components/auth/social-auth"
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card"

interface LoginWrapperProps{
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

const LoginWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
} : LoginWrapperProps) =>{
    return(
        <Card className="max-w-[400px] w-full CardStyle">
            <CardHeader>
                <HeaderAuth label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <SocialAuth />
                </CardFooter>
            )}
            <CardFooter>
                <BackButtonAuth href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}

export default LoginWrapper