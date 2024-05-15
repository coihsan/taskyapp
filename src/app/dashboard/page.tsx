import * as React from "react";
import { Sidebar } from "@/components/sidebar";
import DashboardNav from "./_components/navigation";

const Dashboard = () => {
  return (
    <section className="w-full h-screen overflow-scroll bg-gradient-to-br from-onyx-950 to-onyx-900 rounded-2xl p-6 my-3 borderStyle">
      <DashboardNav />
      <main>
        Login Success
      </main>
    </section>
  );
};

export default Dashboard;