import { useState } from "react";
import Person from "../components/Person";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  FileText,
  RefreshCw,
  Target,
} from "lucide-react";
import Status from "../components/Status";

export default function Convergence() {
  const [modal, setModal] = useState(null);

  const needs = [
    [
      "1",
      "Kesehatan",
      "Dinas Kesehatan",
      "Kepesertaan BPJS PBI dan layanan kesehatan sesuai kebutuhan",
      "Terlayani kesehatan",
      "30 Jun 2026",
      "Proses",
      "Verifikasi berkas sedang diproses oleh Puskesmas",
      "-",
    ],
    [
      "2",
      "Pekerjaan",
      "Dinas Ketenagakerjaan",
      "Pelatihan kerja menjahit dan penempatan kerja",
      "Bekerja / berpenghasilan",
      "31 Aug 2026",
      "Belum",
      "-",
      "-",
    ],
    [
      "3",
      "Perumahan",
      "Dinas Perumahan dan Kawasan Permukiman",
      "Penanganan Rumah Tidak Layak Huni (RTLH)",
      "Rumah layak huni",
      "30 Sep 2026",
      "Belum",
      "-",
      "-",
    ],
    [
      "4",
      "Pemberdayaan Ekonomi",
      "Dinas Koperasi, UKM dan Perdagangan",
      "Bantuan modal usaha dan pendampingan usaha",
      "Usaha produktif berjalan",
      "31 Jul 2026",
      "Selesai",
      "Modal usaha diterima dan usaha sembako sudah berjalan",
      "-",
    ],
  ];

  const stats = [
    ["Kebutuhan Belum Terpenuhi", "4", FileText, "text-blue-700"],
    ["OPD Sedang Menangani", "2", Building2, "text-orange-500"],
    ["Intervensi Selesai", "1", CheckCircle2, "text-green-700"],
    ["Belum Selesai", "3", Clock3, "text-red-600"],
  ];

  const tableHeaders = [
    "NO.",
    "KEBUTUHAN BELUM TERPENUHI",
    "OPD PELAKSANA",
    "INTERVENSI YANG DITETAPKAN",
    "TARGET HASIL",
    "TANGGAL TARGET",
    "STATUS",
    "HASIL INTERVENSI",
    "AKSI",
  ];
  return (
    <main className="p-4 lg:p-6 space-y-4 max-w-[1700px] mx-auto">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="page-title">KONVERGENSI INTERVENSI OPD</h1>
          <p className="page-subtitle">
            Menetapkan dan mengawal intervensi lintas OPD untuk memenuhi
            kebutuhan PPKS.
          </p>
        </div>
        <button className="secondary-btn">
          <RefreshCw /> Riwayat Konvergensi
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-3">
        <Person />
        <div className="grid grid-cols-2 gap-3">
          {stats.map(([l, v, I, c]) => (
            <div
              key={l}
              className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3"
            >
              <I className={c + " w-9 h-9"} />
              <div>
                <b className="text-2xl text-[#092b68]">{v}</b>
                <p className="text-xs font-bold">{l}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="status-banner">
        <Target /> <b>STATUS KONVERGENSI:</b> <strong>1</strong> dari 4
        kebutuhan telah diselesaikan
      </div>
      <div className="rounded-xl border border-slate-200 bg-white overflow-auto card-shadow">
        <table className="w-full min-w-[1200px] text-[12px]">
          <thead className="bg-slate-50">
            <tr>
              {tableHeaders.map((x) => (
                <th key={x}>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {needs.map((r) => (
              <tr className="border-t" key={r[0]}>
                {r.map((v, i) => (
                  <td key={i} className={i === 1 ? "font-bold" : ""}>
                    {i === 6 ? (
                      <Status>{v}</Status>
                    ) : i === 8 ? (
                      <button
                        onClick={() => setModal(r)}
                        className="border border-blue-200 rounded-lg px-3 py-2 text-[#0643ad] font-bold"
                      >
                        {r[6] === "Belum" ? "Atur Intervensi" : "Detail"}
                      </button>
                    ) : i === 5 ? (
                      <>
                        <CalendarDays className="w-4 inline mr-1" />
                        {v}
                      </>
                    ) : (
                      v
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="note-box">
          <CircleAlert />
          <div>
            <b>Catatan:</b>
            <p>
              Setiap OPD bertanggung jawab menindaklanjuti intervensi sesuai
              kewenangan, mencatat hasil intervensi dan menyelesaikan kebutuhan
              PPKS.
            </p>
          </div>
        </div>
        <button className="primary-large">
          KIRIM KE MONITORING GRADUASI{" "}
          <span>(Setelah seluruh kebutuhan terpenuhi)</span>
          <ArrowRight />
        </button>
      </div>
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-extrabold text-lg">{modal[1]}</h3>
            <p className="text-sm mt-3">{modal[3]}</p>
            <button className="primary-btn mt-5" onClick={() => setModal(null)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
