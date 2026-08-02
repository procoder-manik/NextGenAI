import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryProvider } from "./hooks/useQueryConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryProvider>
        <App />
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </QueryProvider>
    </HelmetProvider>
  </React.StrictMode>
);
