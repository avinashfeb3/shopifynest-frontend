import React from "react";
import { FaLock, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
const AccountSidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="space-y-1">
        <Link to="/account/profile" className={`px-4 py-2 rounded-md w-full flex font-semibold hover:bg-blue-700 hover:text-white items-center transition-colors ${isActive("/account/profile") ? "bg-blue-700 text-white" : "bg-[#EB5F0D] text-white"}`}>
          <FaUser className="me-2" />
          Profile
        </Link>
        <Link to="/account/orders" className={`px-4 py-2 rounded-md w-full flex font-semibold hover:bg-blue-700 hover:text-white items-center transition-colors ${isActive("/account/orders") ? "bg-blue-700 text-white" : "bg-[#EB5F0D] text-white"}`}>
          <FaShoppingCart className="me-2" />
          Orders
        </Link>
        <Link to="/account/change-password" className={`px-4 py-2 rounded-md w-full flex font-semibold hover:bg-blue-700 hover:text-white items-center transition-colors ${isActive("/account/change-password") ? "bg-blue-700 text-white" : "bg-[#EB5F0D] text-white"}`}>
          <FaLock className="me-2" /> Change Password
        </Link>
        <Link to="#" className="bg-[#EB5F0D] text-white px-4 py-2 rounded-md w-full flex font-semibold hover:bg-blue-700 hover:text-white items-center">
          <IoLogOutSharp size={20} className="me-2" /> Logout
        </Link>
      </div>
    </>
  );
};

export default AccountSidebar;
