import { CalendarDays, Clock3, Menu, UserRound } from "lucide-react";
export default function Header({ setOpen }) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="h-[88px] px-5 lg:px-8 flex items-center gap-5">
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden rounded-lg border border-slate-200 p-2 text-[#062b67]"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden sm:flex items-center gap-4">
          <div className="h-12 w-px bg-slate-200" />
          <div className="text-[15px] font-bold leading-6 text-[#092b68] max-w-[360px]">
            Dashboard Pemantauan & Pengendalian
            <br />
            Penanganan PPKS Kabupaten Asahan
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
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <span className="w-8 h-8 rounded-full bg-[#062b67] text-white flex items-center justify-center">
              <UserRound className="w-5 h-5" />
            </span>
            <span className="hidden md:inline">Admin Kabupaten</span>
            <span>⌄</span>
          </div>
        </div>
      </div>
    </header>
  );
}
