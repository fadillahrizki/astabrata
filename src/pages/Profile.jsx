import KecamatanTable from "../components/KecamatanTable";
import Filters from "../components/Filters";
import MapPanel from "../components/MapPanel";
import StatCards from "../components/StatCards";

export default function Profile() {
  return (
    <main className="p-4 lg:p-6 space-y-4 max-w-[1700px] mx-auto">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[#062b67]">
          PROFIL & KEBUTUHAN PPKS
        </h1>
        <p className="text-xs lg:text-sm text-[#385584] mt-1">
          Lihat sebaran, profil singkat dan kebutuhan utama PPKS untuk
          menentukan intervensi yang tepat.
        </p>
      </div>
      <Filters />
      <StatCards />
      <div className="flex items-center gap-2 text-xs text-[#385584]">
        <span className="text-base">ⓘ</span> Data dihitung berdasarkan Data
        Tunggal Sosial Ekonomi Nasional (DTSEN) per 19 Mei 2026
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <MapPanel profile />
        <KecamatanTable />
      </div>
    </main>
  );
}
