import React from 'react'
import { getAllOrganization } from '../../_action/organization-action'
import NewOrganization from '@/components/forms/NewOrganization'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import ShortName from '../../_action/short-name'

const OrganizaztionList = async () => {
  const list = await getAllOrganization()

  return (
    <div className=''>
        <Select>
            <SelectTrigger className="h-12 CardStyle rounded-full">
              <SelectValue placeholder="Select a organization" />
            </SelectTrigger>
            <SelectContent className='CardStyle'>
              <SelectGroup>
                <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">
                  Your Own
                </SelectLabel>
                <SelectItem value="apple">
                  <div className="flex items-center gap-4 w-full overflow-hidden">
                    <div className="">
                      <Avatar>
                        <AvatarImage src="/profile.jpeg" alt="@shadcn" />
                        <AvatarFallback><ShortName text={`${list.organizationName}`} /></AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="truncate overflow-hidden">{list?.organizationName && list.error}</p>
                  </div>
                </SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <NewOrganization />
            </SelectContent>
          </Select>
    </div>
  )
}

export default OrganizaztionList