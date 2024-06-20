
import NewOrganization from '@/components/forms/NewOrganization'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const OrganizaztionList = () => {
  return (
    <div className='CardStyle'>
        <Select>
            <SelectTrigger className="h-12">
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
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="truncate overflow-hidden">Freelancer.com</p>
                  </div>
                </SelectItem>
                <SelectItem value="bossco">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <Avatar>
                        <AvatarImage src="/profile.jpeg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="line-clamp-1">PT. Bossco Indolestari</p>
                  </div>
                </SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">
                  Your Joined
                </SelectLabel>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <NewOrganization />
            </SelectContent>
          </Select>
    </div>
  )
}

export default OrganizaztionList