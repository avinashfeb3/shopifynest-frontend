import React, { useState } from "react";
import AdminHeader from "./Header/AdminHeader";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminFooter from "./Footer/AdminFooter";

const AdminLayout = ({ children, userName, onLogout, avatarUrl }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleToggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleCloseMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <AdminHeader
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onToggleCollapse={handleToggleCollapse}
        onToggleMobile={handleToggleMobile}
        userName={userName}
        onLogout={onLogout}
        avatarUrl={avatarUrl}
      />

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={handleCloseMobile}
        />
      )}

      <div className="flex flex-1">
        <AdminSidebar
          isCollapsed={isCollapsed}
          isMobileOpen={isMobileOpen}
          onCloseMobile={handleCloseMobile}
          onToggleCollapse={handleToggleCollapse}
        />

        <main
          className={`flex-1 px-4 pb-8 pt-6 transition-all md:px-6 ${
            isCollapsed ? "md:ml-20" : "md:ml-64"
          }`}
        >
          {children}
        </main>
      </div>

      <AdminFooter isCollapsed={isCollapsed} />
    </div>
  );
};

export default AdminLayout;
