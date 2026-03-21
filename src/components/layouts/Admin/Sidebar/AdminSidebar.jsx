import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { TbBrandSafari } from "react-icons/tb";
import { FaRegListAlt } from "react-icons/fa";

const menuItems = [
  {
    label: "Dashboard",
    icon: AiFillDashboard,
    to: "/admin/dashboard",
  },
  {
    label: "Categories",
    icon: BiSolidCategory,
    to: "/admin/categories",
  },
  {
    label: "Sub Categories",
    icon: BiSolidCategory,
    to: "/admin/sub-categories",
  },
  {
    label: "Brands",
    icon: TbBrandSafari,
    to: "/admin/brands",
  },
  {
    label: "Products",
    icon: FaRegListAlt,
    to: "/admin/products",
  },
  {
    label: "Orders",
    icon: FaRegListAlt,
    to: "/admin/orders",
  },
];

const AdminSidebar = ({ isCollapsed, isMobileOpen, onCloseMobile }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-full bg-linear-to-b from-blue-950 via-blue-900 to-blue-950 text-blue-50 shadow-md transition-all duration-200 md:translate-x-0 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      } ${isCollapsed ? "md:w-20" : "md:w-64"} w-64`}
    >
      <div className="px-4 py-4" />

      <nav className="mt-2 flex flex-col gap-1 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              onClick={onCloseMobile}
              className={`group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-700 text-white border-l-4 border-orange-400"
                  : "text-blue-100 hover:bg-blue-800 hover:text-white"
              } ${isCollapsed ? "justify-center" : "justify-start"}`}
            >
              <Icon size={18} />
              <span
                className={isCollapsed ? "inline md:hidden" : "inline"}
              >
                {item.label}
              </span>

              {isCollapsed && (
                <span className="pointer-events-none absolute left-full top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-orange-500 px-2 py-1 text-xs text-white shadow-md lg:group-hover:inline-block">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
