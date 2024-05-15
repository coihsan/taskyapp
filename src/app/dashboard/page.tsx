import * as React from "react";
import { Sidebar } from "@/components/sidebar";
import DashboardNav from "./_components/navigation";

const Dashboard = () => {
  return (
    <section className="w-full h-screen py-3 pl-3 overflow-hidden">
      <div className="h-full w-full bg-gradient-to-b from-onyx-50 to-onyx-200/40 dark:from-onyx-950 dark:to-onyx-900/40 rounded-[30px] borderStyle">
      <DashboardNav />
      <div>
        Login Success
      </div>
    </div>
    </section>
  );
};

export default Dashboard;