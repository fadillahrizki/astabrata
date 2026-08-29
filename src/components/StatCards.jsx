import {
  ClipboardCheck,
  GraduationCap,
  Medal,
  RefreshCw,
  UserRound,
  Users,
} from "lucide-react";

export default function StatCards() {
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
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
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
  );
}
