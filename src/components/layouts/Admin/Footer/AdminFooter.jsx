import React from "react";

const AdminFooter = ({ isCollapsed }) => {
  return (
    <footer
      className={`mt-auto border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 transition-all md:px-6 ${
        isCollapsed ? "md:ml-20" : "md:ml-64"
      }`}
    >
      <div className="text-center">
        Copyright &copy; {new Date().getFullYear()} ShopifyNest - Your Smart
        Shopping Hub - Design & Developed by Avinash Singh
      </div>
    </footer>
  );
};

export default AdminFooter;
