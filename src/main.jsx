import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import "./index.css";
import App from "./pages/app/index.jsx";
import About from "./pages/about/index.jsx";
import ProductDetail from "./pages/productDetail/index.jsx";
import PageNotFound from "./pages/404page/index.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
