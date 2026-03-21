import React, { useContext } from "react";
import { AdminAuthContext } from "../../../context/AdminAuth";
import AdminLayout from "../../../components/layouts/Admin/AdminLayout";

const Dashboard = () => {
  const { logout } = useContext(AdminAuthContext);
  return (
    <AdminLayout userName="Avinash Singh" onLogout={logout}>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="rounded-md bg-white px-5 py-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-700 text-xl font-medium">Total Orders</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-gray-900">
                10
              </span>
            </div>
          </div>
          <div className="rounded-md bg-white px-5 py-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-700 text-xl font-medium">Total Users</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-gray-900">
                10
              </span>
            </div>
          </div>
          <div className="rounded-md bg-white px-5 py-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-700 text-xl font-medium">Revenue</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-gray-900">
                $100
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
