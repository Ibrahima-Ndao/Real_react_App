import React from "react";
import Header from "../../components/public/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
