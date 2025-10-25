import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";

import App from "./pages/app/index.jsx";
import About from "./pages/about/index.jsx";
import ProductDetail from "./pages/productDetail/index.jsx";
import PageNotFound from "./pages/404page/index.jsx";

export default function Main() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#181825] text-[#cdd6f4]"
          : "text-[#4c4f69] bg-[#eff1f5]"
      }`}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
