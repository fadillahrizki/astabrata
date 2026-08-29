import { Filter } from "lucide-react";
import { useState } from "react";
import PeopleList from "../components/PeopleList";
import Detail from "../components/Detail";

export default function Monitoring() {
  const people = [
    ["Siti Aminah", "Selawan", "1", "Berprogres"],
    ["Ahmad Syahputra", "Air Batu", "2", "Graduasi"],
    ["Rukiyah", "Lestari", "1", "Belum Berubah"],
    ["Surya Adi", "Kisaran Naga", "3", "Berprogres"],
    ["Rina Wati", "Bunga Tanjung", "2", "Berprogres"],
    ["Muhammad Ilyas", "Selawan", "1", "Graduasi"],
    ["Dewi Sartika", "Air Batu", "2", "Belum Berubah"],
  ];
  const [person, setPerson] = useState(people[0]);

  const selects = [
    "Jan – Mei 2026",
    "Semua Kecamatan",
    "Semua Desa / Kelurahan",
    "Semua Desil",
    "Semua Status",
  ];
  const labels = [
    "Periode Monitoring",
    "Kecamatan",
    "Desa / Kelurahan",
    "Desil",
    "Status Graduasi",
  ];
  const stats = [
    ["Total PPKS Dimonitoring", "12.456", "PPKS"],
    ["Berprogres (Menuju Graduasi)", "4.326", "PPKS • 34,7%"],
    ["Graduasi", "2.150", "PPKS • 17,2%"],
    ["Belum Berubah", "5.980", "PPKS • 48,1%"],
  ];
  return (
    <main className="p-4 lg:p-6 space-y-4 max-w-[1700px] mx-auto">
      <div>
        <h1 className="page-title">MONITORING GRADUASI</h1>
        <p className="page-subtitle">
          Pantau perubahan kondisi dan progres graduasi PPKS setelah intervensi
          dilaksanakan.
        </p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-3">
        {selects.map((x, i) => (
          <label key={x} className="text-xs font-bold">
            <span className="block mb-1.5">{labels[i]}</span>
            <select className="w-full border rounded-lg px-3 py-2.5">
              <option>{x}</option>
            </select>
          </label>
        ))}
        <button className="primary-btn">
          <Filter className="w-4 inline" /> Tampilkan
        </button>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {stats.map((x) => (
          <div
            key={x[0]}
            className="rounded-xl border border-slate-200 bg-white p-4 card-shadow"
          >
            <p className="text-xs font-bold">{x[0]}</p>
            <strong className="text-2xl text-[#092b68]">{x[1]}</strong>{" "}
            <small>{x[2]}</small>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[.75fr_1.25fr] gap-4">
        <PeopleList person={person} setPerson={setPerson} />
        <Detail person={person} />
      </div>
    </main>
  );
}
