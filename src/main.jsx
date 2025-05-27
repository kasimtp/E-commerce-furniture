import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";

import { Provider } from "react-redux";
import store from "./app/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* ✅ Redux Provider added */}
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
