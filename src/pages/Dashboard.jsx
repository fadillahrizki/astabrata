import Filters from "../components/Filters";
import DesaTable from "../components/DesaTable";
import MapPanel from "../components/MapPanel";
import StatCards from "../components/StatCards";

export default function Dashboard() {
  return (
    <main className="p-4 lg:p-6 space-y-4 max-w-[1700px] mx-auto">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[#062b67]">
          DASHBOARD
        </h1>
      </div>
      <Filters />
      <StatCards />
      <div className="flex items-center gap-2 text-xs text-[#385584]">
        <span className="text-base">ⓘ</span> Data dihitung berdasarkan Data
        Tunggal Sosial Ekonomi Nasional (DTSEN) per 19 Mei 2026
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <MapPanel profile={false} />
        <DesaTable />
      </div>
    </main>
  );
}
