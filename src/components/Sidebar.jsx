import {
  ChartNoAxesCombined,
  Clock3,
  Home,
  Network,
  Settings,
  UserRound,
} from "lucide-react";

import crest from "../assets/crest.jpg";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ page, setPage, open, setOpen }) {
  const navItems = [
    { key: "/", label: <>Dashboard PPKS</>, icon: Home },
    {
      key: "profile",
      label: (
        <>
          Profil &<br /> Kebutuhan PPKS
        </>
      ),
      icon: UserRound,
    },
    {
      key: "konvergensi",
      label: (
        <>
          Konvergensi
          <br />
          Intervensi OPD
        </>
      ),
      icon: Network,
    },
    {
      key: "monitoring-graduasi",
      label: (
        <>
          Monitoring
          <br />
          Graduasi
        </>
      ),
      icon: ChartNoAxesCombined,
    },
    {
      key: "monitoring-pascagraduasi",
      label: (
        <>
          Monitoring
          <br />
          Pascagraduasi
        </>
      ),
      icon: Clock3,
    },
    { key: "pengaturan", label: <>Pengaturan</>, icon: Settings },
  ];

  const navigate = useNavigate();

  return (
    <aside
      className={`fixed z-40 inset-y-0 left-0 w-[174px] bg-[#062b67] text-white sidebar-shadow transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0 pt-[100px]" : "-translate-x-full"}`}
    >
      <div className="h-full flex flex-col">
        <div className="h-[145px] flex items-center justify-center border-b border-white/10">
          <img
            src={crest}
            className="w-[105px] h-[125px] object-cover rounded-sm"
            alt="Kabupaten Asahan"
          />
        </div>
        <nav className="px-2 py-4 space-y-2 text-[14px]">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setPage(key);
                navigate(`/${key}`);
              }}
              className={`nav-item w-full flex items-center gap-3 rounded-lg px-3 py-3 font-semibold text-left ${page === key ? "active" : ""}`}
            >
              <Icon className="w-6 h-6 shrink-0" strokeWidth={1.9} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-7 text-[12px] leading-6 text-white/90">
          <div className="h-px bg-white/30 mb-5" />
          © 2026 Pemerintah
          <br />
          Kabupaten Asahan
          <br />
          Semua hak dilindungi
        </div>
      </div>
    </aside>
  );
}
