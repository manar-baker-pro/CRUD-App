import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="py-6">
          <div className="lg:w-2/3 mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
