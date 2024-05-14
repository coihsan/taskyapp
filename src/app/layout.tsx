import { ThemeProvider } from "@/components/global/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Meta } from "@/app/meta/Meta";

export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Organize your tasks with TaskyApp",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <Meta />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
