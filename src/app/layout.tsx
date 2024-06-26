import { ThemeProvider } from "@/components/global/theme-provider";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Organize your tasks with TaskyApp",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
                {children}
                <Toaster />
            </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
