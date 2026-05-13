// src/layouts/MainLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center gap-5 bg-black px-6 py-4 text-white">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/settings">
          Settings
        </Link>

        <Link to="/error">
          Error Test
        </Link>
      </div>

      {/* Pages */}
      <Outlet />
    </div>
  );
};

export default MainLayout;