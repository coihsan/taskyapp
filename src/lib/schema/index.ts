import { db } from "@/lib/db"
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";

//  Get the user is logged in or not

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  avatar: z.string().optional(),
});

export const NewOrganizationSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string(),
  logo: z.any()
});

export const NewSpaceSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Optional"),
  logo: z.string().optional(),
});

export const NewWorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});