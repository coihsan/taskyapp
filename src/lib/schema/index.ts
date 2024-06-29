import { db } from "@/lib/db"
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";

//  Get the user is logged in or not

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  avatar: z.string().default('/avatar.png').optional(),
});

export const NewOrganizationSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string(),
  logo: z.any(),
  role: z.string()
});

export const NewSpaceSchema = z.object({
  title: z.string().min(1, "Required"),
  description: z.string().min(1, "Optional"),
  dueDateFrom: z.date().optional().transform(toString),
  dueDateTo: z.date().optional().transform(toString),
  organizationId: z.string()
});

export const NewWorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});