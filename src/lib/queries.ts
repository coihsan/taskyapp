import { db } from "@/lib/db"
import { NextRequest, NextResponse } from 'next/server';
import { useSession, getSession } from "next-auth/react";
import { z } from "zod";

//  Get the user is logged in or not
export const getUserLoggedIn = async (req : NextRequest, res : NextResponse) => {
  const session = await getSession(req);
  const user = session?.user;

  if (user) {
    const prismaUser = await db.user.findUnique({
      where: {
        email
      },
    });

    if (prismaUser) {
      // Pengguna login
      res.json({
        isLoggedIn: true,
        user: prismaUser,
      });
    } else {
      // Pengguna tidak ditemukan di database
      res.status(401).json({
        error: 'Pengguna tidak ditemukan',
      });
    }
  } else {
    // Pengguna tidak login
    res.status(401).json({
      error: 'Anda harus login terlebih dahulu',
    });
  }
}


export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  avatar: z.string().optional(),
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