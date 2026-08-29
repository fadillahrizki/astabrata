import { ChevronRight, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function KecamatanTable() {
  const [selected, setSelected] = useState(null);

  const kecamatanRows = [
    ["1", "Kisaran Barat", "2.356", "832", "1.024", "312", "136", "52"],
    ["2", "Kisaran Timur", "1.872", "614", "764", "262", "156", "76"],
    ["3", "Air Batu", "1.203", "412", "486", "168", "92", "45"],
    ["4", "Pulau Rakyat", "896", "302", "358", "130", "70", "36"],
    ["5", "Tinggi Raja", "673", "218", "276", "96", "55", "28"],
    ["6", "Aek Songsongan", "632", "214", "254", "92", "48", "24"],
    ["7", "Aek Kuasan", "518", "176", "208", "78", "38", "18"],
    ["8", "Setia Janji", "549", "186", "222", "76", "44", "21"],
    ["9", "Rahuning", "410", "144", "168", "64", "24", "10"],
    ["10", "Lainnya", "355", "136", "172", "56", "29", "12"],
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden card-shadow">
      <div className="p-4 flex items-center justify-between">
        <h2 className="font-extrabold text-[#092b68]">
          REKAPITULASI PPKS PER KECAMATAN
        </h2>
        <button className="border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-[#092b68] flex gap-2 items-center hover:bg-slate-50">
          <Download className="w-4 h-4" /> Unduh
        </button>
      </div>
      <div className="overflow-auto small-scroll">
        <table className="w-full text-[12px] text-center whitespace-nowrap">
          <thead className="bg-slate-50 text-[#092b68]">
            <tr className="border-y border-slate-200">
              <th className="px-3 py-3">No.</th>
              <th className="px-3 py-3 text-left">Kecamatan</th>
              <th className="px-3 py-3">
                Total
                <br />
                PPKS
              </th>
              <th className="px-3 py-3 text-red-600">
                Belum
                <br />
                Diintervensi
              </th>
              <th className="px-3 py-3 text-orange-500">
                Dalam
                <br />
                Intervensi
              </th>
              <th className="px-3 py-3 text-green-700">
                Evaluasi
                <br />
                Hasil
              </th>
              <th className="px-3 py-3 text-purple-800">
                Kandidat
                <br />
                Graduasi
              </th>
              <th className="px-3 py-3 text-cyan-700">Graduasi</th>
              <th className="px-3 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kecamatanRows.map((r) => (
              <tr
                key={r[0]}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                {r.map((v, i) => (
                  <td
                    key={i}
                    className={`px-3 py-3 ${i === 1 ? "text-left font-semibold" : ""} ${i === 3 ? "text-red-600 font-bold" : ""} ${i === 4 ? "text-orange-500 font-bold" : ""} ${i === 5 ? "text-green-700 font-bold" : ""} ${i === 6 ? "text-purple-800 font-bold" : ""} ${i === 7 ? "text-cyan-700 font-bold" : ""}`}
                  >
                    {v}
                  </td>
                ))}
                <td className="px-3 py-3">
                  <button
                    onClick={() => setSelected(r[1])}
                    className={`eye-btn ${selected === r[1] ? "bg-blue-50 border-blue-300" : ""}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-4 flex justify-between items-center text-sm">
        <span className="text-slate-500">
          Menampilkan 1 - 10 dari 25 kecamatan
        </span>
        <button className="font-bold text-[#0643ad]">
          Lihat semua kecamatan{" "}
          <ChevronRight className="w-4 h-4 inline-block align-middle" />
        </button>
      </div>
    </div>
  );
}
