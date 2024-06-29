"use client";
import React, {useEffect, useTransition} from "react";
import { Button } from "@/components/ui/button";
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
import { PlusIcon } from "@radix-ui/react-icons";
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
import FileUploader from "../global/Uploader";
import { useToast } from '../ui/use-toast'
import { ToastAction } from "../ui/toast";
import { Projects } from "@prisma/client";

type Props = {
  data?: Partial<Projects>
}

const NewWorkspace = ({data} : Props) => {
  const router = useRouter()
  const { toast } = useToast()
  const { setClose } = useModal()
  
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

  const handleSubmit = async(values : z.infer<typeof NewSpaceSchema>) =>{
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
            onSubmit={form.handleSubmit(handleSubmit)}
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
                <Button disabled={isLoading} variant={"default"} type="submit">
                  {isLoading ? (
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
