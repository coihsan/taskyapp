import Image from "next/image"

const OrganizationProfile = () =>{
    return(
        <div className="flex items-center">
            <Image className="rounded-md" src={'/avatar/avatar2.png'} width={40} height={40} alt={'avatar'} />
            <div className="ml-3">
                <h1 className="text-md font-semibold">Organization Profle</h1>
                <p className="text-xs text-muted-foreground line-clamp-1">This is the organization profile page</p>
            </div>
        </div>
    )
}
export default OrganizationProfile