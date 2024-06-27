import { db } from "../db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { z } from 'zod'