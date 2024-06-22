import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full items-center -z-50 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
      {children}
    </div>
  );
};

export default AuthLayout;
