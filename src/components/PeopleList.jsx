import {
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Search,
} from "lucide-react";
import Status from "./Status";

export default function PeopleList({ person, setPerson }) {
  const people = [
    ["Siti Aminah", "Selawan", "1", "Berprogres"],
    ["Ahmad Syahputra", "Air Batu", "2", "Graduasi"],
    ["Rukiyah", "Lestari", "1", "Belum Berubah"],
    ["Surya Adi", "Kisaran Naga", "3", "Berprogres"],
    ["Rina Wati", "Bunga Tanjung", "2", "Berprogres"],
    ["Muhammad Ilyas", "Selawan", "1", "Graduasi"],
    ["Dewi Sartika", "Air Batu", "2", "Belum Berubah"],
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden card-shadow">
      <div className="p-4 flex justify-between">
        <h2 className="font-extrabold">DAFTAR PPKS DIMONITORING</h2>
        <span className="text-xs">Total: 12.456</span>
      </div>
      <div className="px-4 pb-3 flex gap-2">
        <div className="flex-1 border rounded-lg px-3 py-2 text-xs text-slate-500">
          <Search className="w-4 inline" /> Cari NIK / Nama PPKS
        </div>
        <button className="border rounded-lg px-3">
          <Filter className="w-4" />
        </button>
      </div>
      <table className="w-full text-[11px]">
        <thead className="bg-slate-50">
          <tr>
            <th>Nama PPKS</th>
            <th>Desa / Kelurahan</th>
            <th>Desil</th>
            <th>Status Graduasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr
              key={p[0]}
              onClick={() => setPerson(p)}
              className={
                "border-t cursor-pointer " +
                (person[0] === p[0] ? "bg-blue-50" : "")
              }
            >
              <td>{p[0]}</td>
              <td>{p[1]}</td>
              <td>
                <span className="desil red">{p[2]}</span>
              </td>
              <td>
                <Status>{p[3]}</Status>
              </td>
              <td>
                <button className="border rounded px-2 py-1">Lihat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 flex justify-center gap-1">
        {[ChevronsLeft, ChevronLeft].map((I, i) => (
          <button className="page-btn" key={i}>
            <I />
          </button>
        ))}
        {[1, 2, 3, 4, 5].map((n) => (
          <button className={"page-btn " + (n === 1 ? "selected" : "")} key={n}>
            {n}
          </button>
        ))}
        <button className="page-btn">...</button>
        <button className="page-btn">1246</button>
        <button className="page-btn">
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
}
