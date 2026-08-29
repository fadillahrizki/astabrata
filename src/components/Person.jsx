import { Building2, MapPin, UserRound, Users } from "lucide-react";

export default function Person() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 flex items-center gap-4 card-shadow">
      <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
        <UserRound className="w-12 h-12 text-[#062b67]" />
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-[#092b68]">SITI AMINAH</h2>
        <div className="flex flex-wrap gap-4 mt-3 text-xs font-semibold">
          <span>
            <MapPin className="w-4 inline" /> Kel. Selawan
          </span>
          <span>
            <Building2 className="w-4 inline" /> Kec. Kisaran Barat
          </span>
          <span className="bg-red-500 text-white px-2 py-1 rounded">
            Desil 1
          </span>
          <span>
            <Users className="w-4 inline" /> Kategori: Fakir Miskin
          </span>
        </div>
      </div>
    </div>
  );
}
