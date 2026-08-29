import { useState } from "react";
import mapProfile from "../assets/map-profile.jpg";
import { Maximize, Minus, Plus } from "lucide-react";
export default function MapPanel({ profile }) {
  const [tab, setTab] = useState("kabupaten");
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 card-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h2 className="font-extrabold text-[#092b68]">PETA SEBARAN PPKS</h2>
        <div className="flex text-xs font-bold">
          <button
            onClick={() => setTab("kabupaten")}
            className={`px-4 py-2 rounded-l-lg ${tab === "kabupaten" ? "bg-[#062b67] text-white" : "border border-slate-200 text-[#092b68]"}`}
          >
            Agregat Kabupaten
          </button>
          <button
            onClick={() => setTab("kecamatan")}
            className={`px-4 py-2 rounded-r-lg ${tab === "kecamatan" ? "bg-[#062b67] text-white" : "border border-slate-200 text-[#092b68]"}`}
          >
            Agregat Kecamatan
          </button>
        </div>
      </div>
      <div className="map-wrap rounded-lg relative aspect-[1.2]">
        <img
          src={mapProfile}
          className="w-full h-full object-cover"
          alt="Peta sebaran PPKS"
        />
        {profile && (
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            <button className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center">
              <Minus className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-white/95 rounded-lg p-3 shadow-md text-[10px]">
          <div className="font-bold mb-2">
            {profile ? "Jumlah PPKS per Kecamatan" : "KETERANGAN (TOTAL PPKS)"}
          </div>
          <div className="grid gap-1.5">
            {(profile
              ? [
                  ["> 2.000", "#075b36"],
                  ["1.001 - 2.000", "#19804a"],
                  ["501 - 1.000", "#62ae76"],
                  ["101 - 500", "#a5d0a6"],
                  ["≤ 100", "#d5ebd1"],
                ]
              : [
                  ["Sangat Tinggi", "#075b36"],
                  ["Tinggi", "#19804a"],
                  ["Sedang", "#62ae76"],
                  ["Rendah", "#a5d0a6"],
                  ["Sangat Rendah", "#d5ebd1"],
                ]
            ).map(([label, bg]) => (
              <span key={label}>
                <i
                  className="inline-block w-4 h-4 rounded align-middle mr-2"
                  style={{ background: bg }}
                />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ⓘ Klik pada wilayah kecamatan untuk melihat detail desa/kelurahan.
      </p>
    </section>
  );
}
