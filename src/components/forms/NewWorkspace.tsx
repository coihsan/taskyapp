"use client";
import React, {useState} from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { NewSpaceSchema } from "@/lib/schema";
import { createNewWorkspace } from "@/app/(main)/organization/_action/organization-action";
import { useRouter } from "next/navigation";
import { useModal } from "@/providers/modal-provider";
import Loading from "../global/loading";
import { useToast } from '../ui/use-toast'
import { ToastAction } from "../ui/toast";
import { Projects } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";

type Props = {
  data?: Partial<Projects>
}

const NewWorkspace = ({data} : Props) => {
  const router = useRouter()
  const { pending } = useFormStatus();
  const { toast } = useToast()
  const { setClose } = useModal()
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(+7),
  })
  
  const form = useForm<z.infer<typeof NewSpaceSchema>>({
    mode: "onChange",
    resolver: zodResolver(NewSpaceSchema),
    defaultValues:{
      title: '',
      description: '',
      dueDateFrom: data?.dueDateFrom?.toString(),
      dueDateTo: data?.dueDateTo?.toString(),
      organizationId: data?.organizationId
    }
  });

  const onSubmit = async(values : z.infer<typeof NewSpaceSchema>) =>{
    try {
      const workspace = await createNewWorkspace(values.title, values.description, values.dueDateTo, values.dueDateFrom ,values.organizationId)
      if(workspace){
        toast({
          title: 'Space created',
          action: (
            <ToastAction altText="Goto workspace to undo">Undo</ToastAction>
          ),
        })
        router.refresh()
        setClose()
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'Could not send invitation',
      })
    }
  }
  const isLoading = form.formState.isLoading

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            size={'icon'}
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px] CardStyle">
          <DialogHeader>
            <DialogTitle>New Space</DialogTitle>
            <DialogDescription>Create a new Space</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <Input disabled={isLoading} placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
              control={form.control}
              name="dueDateFrom"
              render={({field }) =>(
                <FormItem>
                  <FormLabel>
                  <Popover>
                    <PopoverTrigger className="ButtonStyle" asChild>
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
                      className="CardStyle"
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        {...field}
                      />
                    </PopoverContent>
                  </Popover>
                  </FormLabel>
                </FormItem>
              )}
              />
              <FormField
                disabled={isLoading}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea disabled={isLoading} placeholder="Type your description here." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex flex-wrap flex-1 gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button disabled={pending} variant={"default"} type="submit">
                  {pending ? (
                    <>
                      <Loading /> saving
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default NewWorkspace;
