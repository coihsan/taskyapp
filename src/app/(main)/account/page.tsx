import React from 'react'
import { redirect } from 'next/navigation'
import Unauthorized from '@/components/unauthorized'
import { getAuthUserDetails } from './_action/account-action';

type Props = {
    searchParams: { state: string; code: string }
  }

const AccountUser = async ({searchParams} : Props) =>{
    const user = await getAuthUserDetails()
    if (!user) return

    
}

export default AccountUser