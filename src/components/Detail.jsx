import { ArrowRight, Download, FileText, UserRound } from "lucide-react";

export default function Detail({ person }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 card-shadow">
      <h2 className="font-extrabold">DETAIL MONITORING</h2>
      <div className="mt-2 p-4 border rounded-xl flex gap-5 flex-wrap">
        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
          <UserRound className="w-12 text-[#062b67]" />
        </div>
        <div>
          <h3 className="font-extrabold text-lg">{person[0].toUpperCase()}</h3>
          <p className="text-xs">
            NIK
            <br />
            <b>1208XXXXXXXXXX0001</b>
            <br />
            <br />
            Desa / Kelurahan
            <br />
            <b>{person[1]}</b>
          </p>
        </div>
        <div className="text-xs">
          <b>Kecamatan</b>
          <p>Kisaran Barat</p>
          <b>Desil DTSEN</b>
          <p>1</p>
        </div>
        <div className="text-xs">
          <b>Kategori PPKS</b>
          <p>Fakir Miskin</p>
          <b>Tanggal Mulai Intervensi</b>
          <p>12 Februari 2026</p>
        </div>
      </div>
      <h3 className="font-extrabold mt-4">
        PERUBAHAN KONDISI (SEBELUM – TERKINI)
      </h3>
      <div className="overflow-auto">
        <table className="w-full min-w-[680px] mt-2 text-[11px] border">
          <thead className="bg-slate-50">
            <tr>
              <th>Dimensi</th>
              <th>Sebelum Intervensi</th>
              <th>Monitoring Sebelumnya</th>
              <th>Monitoring Terakhir</th>
              <th>Perubahan</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Kesehatan",
                "Belum Terlayani",
                "Terdaftar BPJS PBI",
                "Rutin Berobat",
              ],
              [
                "Pendidikan Anak",
                "Anak Tidak Sekolah",
                "Terdaftar Sekolah",
                "Aktif Sekolah",
              ],
              [
                "Pekerjaan",
                "Tidak Bekerja",
                "Mengikuti Pelatihan",
                "Bekerja (Serabutan)",
              ],
              [
                "Perumahan",
                "Rumah Tidak Layak",
                "Perbaikan Rumah",
                "Rumah Layak Huni",
              ],
              [
                "Pendapatan",
                "< Rp 500.000 / bln",
                "± Rp 750.000 / bln",
                "± Rp 1.500.000 / bln",
              ],
            ].map((r) => (
              <tr className="border-t" key={r[0]}>
                <td className="font-bold">{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td className="text-green-700 font-bold">↑ Membaik</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 grid md:grid-cols-3 gap-3">
        <div className="monitor-box">
          <b>STATUS GRADUASI</b>
          <strong>Berprogres</strong>
        </div>
        <div className="monitor-box">
          <b>Skor Perubahan Kondisi</b>
          <strong>
            68% <small>(Cukup Baik)</small>
          </strong>
        </div>
        <div className="monitor-box">
          <b>Prediksi Graduasi</b>
          <strong>Agustus 2026</strong>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <button className="secondary-btn">
          <FileText /> Riwayat Intervensi OPD
        </button>
        <button className="secondary-btn">
          <Download /> Laporan Perkembangan
        </button>
        <button className="primary-large flex-1">
          Lanjut ke Monitoring Pascagraduasi <ArrowRight />
        </button>
      </div>
    </div>
  );
}
