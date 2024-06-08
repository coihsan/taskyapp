import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeaderBar from "@/components/headerbar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function BoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="flex flex-1 overflow-hidden h-screen min-h-full">
        <aside className="max-w-[260px] w-full h-full">
        <ScrollArea>
          <Sidebar />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </aside>
        <main className="w-full">
            <HeaderBar />
        {children}
      </main>
      </section>
  );
}