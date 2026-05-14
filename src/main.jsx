// main.jsx - The entry point of the React app.
// This file connects React to the HTML page and wraps the app with providers.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // enables page routing (URL navigation)
import AppContextProvider from "./context/AppContext.jsx"; // global state (cart, token, etc.)
import { Provider } from "react-redux"; // makes Redux store available to all components
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider gives all components access to the Redux store */}
    <Provider store={store}>
      {/* BrowserRouter enables navigation between pages */}
      <BrowserRouter>
        {/* AppContextProvider shares token, cart, and user data globally */}
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
