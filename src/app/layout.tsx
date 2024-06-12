import { ThemeProvider } from "@/components/global/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes';
import FooterSite from "@/components/site/footer";
export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Organize your tasks with TaskyApp",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
      <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: [dark, neobrutalism]
      }}
      >
        <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
              <main>{children}</main>
            <FooterSite />
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
