import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider} from "react-redux";
import { store } from "./store/store.js";

import "./index.css";
import Main from "./routes.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
);

