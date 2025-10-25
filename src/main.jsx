import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Provider, useSelector } from "react-redux";
import { store } from "./store/store.js";

import "./index.css";
import App from "./app/index.jsx";
import ProductDetail from "./productDetail/index.jsx";
import PageNotFound from "./404page/index.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
);

function Main() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
