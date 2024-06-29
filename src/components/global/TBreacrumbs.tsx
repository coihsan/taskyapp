"use client"
import React from "react"
import Link from "next/link"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { FluentHome24Regular } from "../icons/home"

type TBreadCrumbProps = {

}

const TBreadcrumbs = () =>{
    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    return(
        <>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="/">Dashboard</Link>
                </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {pathNames.map((link, index) => {
                    let href = `${pathNames.slice(0, index + 1).join('/')}`;
                    let itemLink = link[0].toUpperCase() + link.slice(1, link.length)
                    return(
                        <>
                        {index === 0 && (
                            <BreadcrumbItem key={index} >
                                <BreadcrumbLink>
                                    <Link href="/components">{itemLink}</Link>
                                </BreadcrumbLink>
                                {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
                            </BreadcrumbItem>
                        )}
                            {index === 1 && (
                                <BreadcrumbItem >
                                    <BreadcrumbPage>{itemLink}</BreadcrumbPage>
                                    {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
                                </BreadcrumbItem>
                            )}
                        </>
                    )
                })}
            </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}
export default TBreadcrumbs