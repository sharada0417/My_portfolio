import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import { Home } from "./components/sections/Home";
import RootLayout from "./Layout/root-layout.layout";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import Tutorials from "./components/sections/Tutorials";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<RootLayout />}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/tutorials" element={<Tutorials/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
