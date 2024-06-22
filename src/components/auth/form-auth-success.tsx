import { CheckIcon } from "../icons/check";

interface FormSuccessProps{
    message: string | undefined
}
const FormAuthSuccess = ({message} : FormSuccessProps) =>{
    if (!message) return null;
    return(
        <div className="bg-green-500/10 p-3 rounded-md flex items-center gap-x-2 text-green-500">
            <CheckIcon className="size-5" />
            <span>{message}</span>
        </div>
    )
}
export default FormAuthSuccess;