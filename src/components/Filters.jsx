import { Filter } from "lucide-react";
import { useState } from "react";

export default function Filters() {
  const [filtered, setFiltered] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 card-shadow p-3 lg:p-4 flex flex-col lg:flex-row gap-3 lg:items-end">
      <label className="flex-1">
        <span className="block text-xs font-semibold text-[#092b68] mb-1.5">
          Tahun
        </span>
        <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-[#092b68] outline-none">
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
      </label>
      <label className="flex-1">
        <span className="block text-xs font-semibold text-[#092b68] mb-1.5">
          Wilayah
        </span>
        <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-[#092b68] outline-none">
          <option>Kabupaten Asahan</option>
          <option>Kisaran Barat</option>
          <option>Kisaran Timur</option>
        </select>
      </label>
      <button
        onClick={() => setFiltered(true)}
        className={`lg:w-[130px] ${filtered ? "bg-emerald-600" : "bg-[#062b67]"} hover:bg-[#0a3b86] text-white rounded-lg px-5 py-2.5 font-semibold flex items-center justify-center gap-2 transition`}
      >
        <Filter className="w-5 h-5" />
        {filtered ? "✓ Diterapkan" : "Filter"}
      </button>
    </div>
  );
}
