import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./app/index.jsx";
import ProductDetail from "./productDetail/index.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>,
);
