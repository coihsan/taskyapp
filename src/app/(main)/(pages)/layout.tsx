import HeaderBar from '@/components/headerbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen border-l-[1px] CardStyle border-t-[1px] pb-20 border-muted-foreground/20 overflow-scroll">
      <HeaderBar />
      {children}
    </div>
  )
}

export default Layout