import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsCountry from "./pages/DetailsCountry/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:name" element={<DetailsCountry />} />
        {/* outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
