import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Menu,
  UserRound,
} from "lucide-react";
import Dropdown from "./Dropdown";

import astabrata from "../assets/astabrata.jpeg";
export default function Header({ open, setOpen }) {
  const menuItems = [
    {
      label: "Account settings",
      onClick: () => console.log("Account clicked"),
    },
    { label: "Support", onClick: () => console.log("Support clicked") },
    { label: "Logout", onClick: () => console.log("Logout clicked") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="h-[88px] px-5 lg:px-8 flex items-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-lg border border-slate-200 p-2 text-[#062b67]"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden sm:flex items-center gap-4">
          <img
            src={astabrata}
            className="object-cover rounded-sm w-20 h-20"
            alt="Astabrata"
          />
          <div className="h-12 w-px bg-slate-200" />
          <div className="text-[15px] font-bold leading-6 text-[#092b68] max-w-[360px]">
            Dashboard Pemantauan, Pengendalian dan Penanganan Graduasi PPKS
            Kabupaten Asahan
          </div>
        </div>
        <div className="sm:hidden font-extrabold text-[#062b67] text-lg">
          ASTABRATA
        </div>
        <div className="ml-auto flex items-center gap-5 text-[#082b68] text-sm font-semibold">
          <div className="hidden xl:flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            Selasa, 20 Mei 2026
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Clock3 className="w-5 h-5" />
            09:30 WIB
          </div>

          <Dropdown label="Manage Settings" items={menuItems} isUser={true} />
        </div>
      </div>
    </header>
  );
}
