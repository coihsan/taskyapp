import type { Metadata } from "next";
import { Sidebar } from "@/app/(main)/organization/_components/sidebar";
import HeaderBar from "@/components/headerbar";
import { Toaster } from "@/components/ui/toaster"
import ModalProvider from "@/providers/modal-provider";
export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Generated by create next app",
};

export default function BoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="overflow-hidden h-screen min-h-[100dvh]">
        <ModalProvider>
          <HeaderBar />
          <div className="flex">
            <Sidebar />
            <aside className="w-full border-l-[1px] rounded-l-2xl h-screen CardStyle border-t-[1px] border-muted-foreground/20 overflow-scroll">
              {children}
            </aside>
          </div>
          <Toaster />
        </ModalProvider>
    </main>
  );
}