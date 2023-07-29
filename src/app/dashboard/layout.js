import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-x-4">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
