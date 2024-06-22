"use server"
import { auth } from "@/auth"

const settingsAuth = async () =>{
    const session = await auth()
    return(
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default settingsAuth