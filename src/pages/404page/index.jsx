import Navbar from "../../components/navbar.jsx";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 flex justify-center items-center flex-col">
        <h2 className="text-[#d20f39]">404 Error</h2>
        <p>Oops! The page you're looking for does not exist.</p>
      </div>
    </>
  );
}
