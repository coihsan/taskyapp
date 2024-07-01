import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { FluentAdd24Filled } from "../icons/add-24-filled";
import NewOrganization from "../forms/NewOrganization";

const OrganizationButton = () =>{
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="flex items-center gap-2" variant={'secondary'}><FluentAdd24Filled /> <span className="text-sm">Create</span></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="CardStyle">
                        <DropdownMenuItem>
                            <NewOrganization />
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Space</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>
                <p>Create new ...</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}

export default OrganizationButton