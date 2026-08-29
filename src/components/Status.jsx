export default function Status({ children }) {
  return (
    <span
      className={
        "status " +
        (children === "Selesai" || children === "Graduasi"
          ? "graduasi"
          : children === "Proses" || children === "Berprogres"
            ? "berprogres"
            : "belum-berubah")
      }
    >
      {children}
    </span>
  );
}
