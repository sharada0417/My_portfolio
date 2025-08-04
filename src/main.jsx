import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import { Home } from "./components/sections/Home";
import RootLayout from "./Layout/root-layout.layout";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<RootLayout />}>
         <Route path="/" element={<Home />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
