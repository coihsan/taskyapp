import HeaderBar from '@/components/headerbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full border-l-[1px] min-h-[100dvh] h-full CardStyle border-t-[1px] pb-20 border-muted-foreground/20 overflow-hidden">
      <HeaderBar />
        {children}
    </div>
  )
}

export default Layout