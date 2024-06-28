"use client";
import React, {useTransition} from "react";
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
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { NewOrganizationSchema } from "@/lib/schema";
import { createNewOrganization } from "@/app/(main)/organization/_action/organization-action";
import { useRouter } from "next/navigation";
import { useModal } from "@/providers/modal-provider";
import Loading from "../global/loading";

const NewOrganization = () => {
  const router = useRouter()
  const { setClose } = useModal()
  const form = useForm<z.infer<typeof NewOrganizationSchema>>({
    mode: "onChange",
    resolver: zodResolver(NewOrganizationSchema),
    defaultValues:{
      name: '',
      description: '',
      logo: '',
    }
  });

  const handleSubmit = async(values : z.infer<typeof NewOrganizationSchema>) =>{
    const organization = await createNewOrganization(values.name, values.description, values.logo)
    if(organization){
      toast.message(organization.message)
      router.refresh()
    }
    setClose()
  }
  const isLoading = form.formState.isLoading
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mt-4 w-full flex items-center gap-3"
            variant={"ghost"}
          >
            <PlusIcon className="w-4 h-4" />
            New Organization
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px] CardStyle">
          <DialogHeader>
            <DialogTitle>New Organization</DialogTitle>
            <DialogDescription>Create a new organization</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
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
                      <Textarea disabled={isLoading} placeholder="Type your description here." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Avatar</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} type="file" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
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
export default NewOrganization;
