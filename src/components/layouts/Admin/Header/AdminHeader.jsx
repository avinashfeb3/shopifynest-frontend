import React, { useState } from "react";
import {
  IoMenu,
  IoClose,
  IoChevronDown,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo/logo.png";

const DUMMY_AVATAR =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><rect width='64' height='64' fill='%23E2E8F0'/><circle cx='32' cy='26' r='12' fill='%2394A3B8'/><rect x='14' y='42' width='36' height='14' rx='7' fill='%2394A3B8'/></svg>";

const AdminHeader = ({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onToggleMobile,
  userName,
  onLogout,
  avatarUrl,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const resolvedAvatar = avatarUrl || DUMMY_AVATAR;
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div
        className={`flex items-center justify-between px-4 py-3 transition-all md:px-6 ${
          isCollapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-slate-100 md:hidden"
            onClick={onToggleMobile}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
          </button>

          <button
            type="button"
            className="hidden rounded-md p-2 text-gray-700 hover:bg-slate-100 md:inline-flex"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <IoMenu size={20} /> : <IoClose size={20} />}
          </button>
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <img src={Logo} alt="Company logo" className="w-35 h-14"/>
          </Link>
        </div>

        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
          >
            <img
              src={resolvedAvatar}
              alt="User avatar"
              className="h-8 w-8 rounded-full border border-slate-200"
            />
            <span className="hidden text-sm font-medium md:inline">
              {userName || "Admin User"}
            </span>
            <IoChevronDown size={16} />
          </button>

          {isMenuOpen && (
            <div
              className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-slate-200 bg-white p-2 shadow-lg"
              role="menu"
            >
              <div className="flex items-center gap-3 rounded-md px-2 py-2">
                <img
                  src={resolvedAvatar}
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border border-slate-200"
                />
                <div className="text-sm">
                  <div className="font-semibold text-slate-800">
                    {userName || "Admin User"}
                  </div>
                  <div className="text-xs text-slate-500">Administrator</div>
                </div>
              </div>
              <button
                type="button"
                className="mt-1 w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (onLogout) {
                    onLogout();
                  }
                  navigate("/admin/login");
                }}
                role="menuitem"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
