import * as React from "react";
import { Sidebar } from "@/components/sidebar";
import DashboardNav from "./_components/navigation";

const Dashboard = () => {
  return (
    <section className="w-full h-screen overflow-scroll">
      <DashboardNav />
      <main>
        Login Success
      </main>
    </section>
  );
};

export default Dashboard;