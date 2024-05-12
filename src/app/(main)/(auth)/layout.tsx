import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[100vh] w-full flex items-center justify-center dark text-foreground bg-background">{children}</main>
  )
}

export default AuthLayout