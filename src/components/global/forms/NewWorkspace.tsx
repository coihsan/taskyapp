"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import React from "react"
const workspaceSchema = z.object({
    workspaceName: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
  })
const NewWorkspace = () =>{
    const form = useForm()
    const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <PlusIcon className="w-4 h-4" />
                </Button>
                </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle>New Workspace</DialogTitle>
                            <DialogDescription>Create a new workspace</DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form className="space-y-4">
                                <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Workspace Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type your description here." />
                                        </FormControl>
                                    </FormItem>
                                )}
                                />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <FormField
                                control={form.control}
                                name="file"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Avatar</FormLabel>
                                        <FormControl>
                                            <Input type='file' {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="file"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Target</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <Button
                                                id="date"
                                                variant={"outline"}
                                                className={cn(
                                                "w-[300px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date?.from ? (
                                                date.to ? (
                                                    <>
                                                    {format(date.from, "LLL dd, y")} -{" "}
                                                    {format(date.to, "LLL dd, y")}
                                                    </>
                                                ) : (
                                                    format(date.from, "LLL dd, y")
                                                )
                                                ) : (
                                                <span>Pick a date</span>
                                                )}
                                            </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                initialFocus
                                                mode="range"
                                                defaultMonth={date?.from}
                                                selected={date}
                                                onSelect={setDate}
                                                numberOfMonths={2}
                                            />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                                />
                                </div>
                                <Separator />
                                <DialogFooter className="flex flex-wrap flex-1 gap-3">
                                    <Button variant={'secondary'} type="submit">Cancel</Button>
                                    <Button variant={'default'} type="submit">Save changes</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default NewWorkspace