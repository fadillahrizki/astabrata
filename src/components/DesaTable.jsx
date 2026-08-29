import {
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Medal,
  RefreshCw,
  UserRound,
  Users,
} from "lucide-react";

export default function DesaTable() {
  const desaRows = [
    ["1", "Desa Air Batu"],
    ["2", "Kel. Selawan"],
    ["3", "Desa Aek Loba"],
    ["4", "Kel. Kisaran Naga"],
    ["5", "Desa Hessa Air Genting"],
  ];

  const cards = [
    [
      "blue",
      Users,
      "PPKS TERIDENTIFIKASI",
      "12.456",
      "PPKS (100%)",
      "#062b67",
      "bg-blue-50 border-blue-200",
    ],
    [
      "red",
      UserRound,
      "BELUM DIINTERVENSI",
      "4.236",
      "PPKS (34,0%)",
      "#dc2626",
      "bg-red-50 border-red-200",
    ],
    [
      "orange",
      RefreshCw,
      "DALAM INTERVENSI",
      "5.012",
      "PPKS (40,3%)",
      "#f97316",
      "bg-orange-50 border-orange-200",
    ],
    [
      "green",
      ClipboardCheck,
      "EVALUASI HASIL",
      "1.834",
      "PPKS (14,7%)",
      "#15803d",
      "bg-green-50 border-green-200",
    ],
    [
      "purple",
      GraduationCap,
      "KANDIDAT GRADUASI",
      "892",
      "PPKS (7,2%)",
      "#581c87",
      "bg-purple-50 border-purple-200",
    ],
    [
      "cyan",
      Medal,
      "GRADUASI",
      "482",
      "PPKS (3,9%)",
      "#0e7490",
      "bg-cyan-50 border-cyan-200",
    ],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden card-shadow">
      <div className="p-4">
        <h2 className="font-extrabold text-[#092b68]">AGREGAT PER WILAYAH</h2>
      </div>
      <div className="p-3">
        <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-[#092b68] outline-none">
          <option>Kabupaten Asahan</option>
          <option>Kisaran Barat</option>
          <option>Kisaran Timur</option>
        </select>

        <div className="grid grid-cols-3 gap-3 mt-3">
          {cards.map(([key, Icon, label, value, sub, color, iconBg]) => (
            <div key={key} className="stat-card border-slate-200">
              <div className={`stat-icon ${iconBg}`} style={{ color }}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <p
                  className="text-[11px] leading-[1.5] font-extrabold"
                  style={{ color }}
                >
                  {label}
                </p>
                <p
                  className="text-[25px] leading-tight font-extrabold mt-1.5"
                  style={{ color }}
                >
                  {value}
                </p>
                <p className="text-[11px] font-semibold mt-1 text-[#0b2552]">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-extrabold text-[#092b68]">
          RINGKASAN PPKS PER DESA / KELURAHAN
        </h2>
      </div>
      <div className="overflow-auto small-scroll">
        <table className="w-full text-[11px] text-center whitespace-nowrap">
          <thead className="bg-slate-50 text-[#092b68]">
            <tr className="border-y border-slate-200">
              <th className="px-3 py-3">No.</th>
              <th className="px-3 py-3 text-left">Desa / Kelurahan</th>
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
            </tr>
          </thead>
          <tbody>
            {desaRows.map((r) => (
              <tr
                key={r[0]}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="px-3 py-2.5">{r[0]}</td>
                <td className="px-3 py-2.5 font-semibold text-left">{r[1]}</td>
                {[2, 3, 4, 5, 6, 7].map((i) => (
                  <td
                    key={i}
                    className={`px-3 py-2.5 ${i === 3 ? "text-red-600" : i === 4 ? "text-orange-500" : i === 5 ? "text-green-700" : i === 6 ? "text-purple-800" : i === 7 ? "text-cyan-700" : ""}`}
                  >
                    X.XXX
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3">
        <button className="w-full border border-slate-200 rounded-lg py-2.5 text-sm font-bold text-[#0643ad] hover:bg-slate-50">
          Lihat semua Desa / Kelurahan{" "}
          <ChevronRight className="w-4 h-4 inline-block align-middle" />
        </button>
      </div>
    </div>
  );
}
