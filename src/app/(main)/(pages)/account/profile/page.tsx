"use client";
import React from 'react'
import { useAuth } from "@clerk/nextjs";
import { db } from '@/lib/db';

const ProfilePage = () =>{
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    if (!isLoaded || !userId) {
        return null;
      }
    return(
        <div>
            Hello, {userId} your current active session is {sessionId}
        </div>
    )
}

export default ProfilePage