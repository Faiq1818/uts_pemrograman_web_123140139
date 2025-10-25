import { useSelector } from "react-redux";

export default function Footer() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      <footer
        className={`flex flex-col items-center py-4 ${theme === "dark" ? "bg-[#1e1e2e]" : " bg-white"}`}
      >
        <p>UTS Pemrograman Aplikasi Web RA</p>
        <p>Faiq Ghozy Erlangga</p>
        <p>123140139</p>
        <p>faiq.123140139@student.itera.ac.id</p>
      </footer>
    </>
  );
}
