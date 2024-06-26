import { db } from '../db'
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";

