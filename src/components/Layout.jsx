import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [page, setPage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar page={page} setPage={setPage} open={open} setOpen={setOpen} />
      <div className="lg:pl-[174px] min-h-screen">
        <Header setOpen={setOpen} open={open} />
        <Outlet />
      </div>
    </>
  );
}
