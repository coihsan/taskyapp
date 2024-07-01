import React, { useEffect, useMemo, useState } from 'react'
import {getAllOrganization} from '../../_action/organization-action'
import NewOrganization from '@/components/forms/NewOrganization'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import ShortName from '../../_action/short-name'

const OrganizaztionList = async () => {
  const organization = await getAllOrganization()


  return (
    <div className=''>
        <Select>
            <SelectTrigger className="h-12 CardStyle">
              <SelectValue placeholder="Select a organization" />
            </SelectTrigger>
            <SelectContent className='CardStyle'>
              <SelectGroup>
                <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">
                  Your Own
                </SelectLabel>
                {organization.map((list ) =>{
                  return <SelectItem value={list.id} key={list.id}>
                    <div className="flex items-center gap-4 w-full overflow-hidden">
                      <div className="">
                        <Avatar>
                          <AvatarImage src={`${list.organizationLogo}`} alt="@shadcn" />
                          <AvatarFallback className='bg-lime-500'><ShortName text={list.name} /></AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="truncate overflow-hidden">{list?.name}</p>
                    </div>
                  </SelectItem>
                })}
              </SelectGroup>
              <SelectSeparator />
              <NewOrganization />
            </SelectContent>
          </Select>
    </div>
  )
}

export default OrganizaztionList