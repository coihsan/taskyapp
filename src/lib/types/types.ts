import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});
export const NewOrganizationSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Optional"),
  logo: z.string().min(1, "Optional"),
});
export const NewWorkspaceSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Optional"),
  logo: z.string().min(1, "Optional"),
});
export const WorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});
export interface cardType {
  id: number;
  title?: string;
  tags?: string;
  createDate?: Date;
  subtask?: [
    {
      id: number;
      title?: string;
      isComplete?: boolean;
    },
  ];
  member?: string[];
  comment?: boolean;
  attachment?: boolean;
  media?: boolean;
}
export interface navlink {
  id: number;
  title: string;
  url: string;
  icons: any;
}

export type boardProps = {
  status: "Backlogs" | "Inprogress" | "Review" | "Done";
};
export enum status {
  "Backlogs",
  "Inprogress",
  "Review",
  "Done",
}

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}