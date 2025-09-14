
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ add Navigate
import { Home } from "./components/sections/Home";
import RootLayout from "./Layout/root-layout.layout";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import Tutorials from "./components/sections/Tutorials";
import About from "./components/sections/About";
import AboutUsLayout from "./Layout/about-layout.layout";
import Work from "./pages/Work";
import Education from "./pages/Education";

import FrontendLayout from "./Layout/frontend-layout.layout";

import Reactin from "./pages/React";
import Next from "./pages/Next";
import Express from "./pages/Express";
import SpringBoot from "./pages/SpringBoot";
import ReactNative from "./pages/ReactNative";
import Flutter from "./pages/Flutter";
import DataBaseLayout from "./Layout/database.layout";
import BackEndLayout from "./Layout/backend-layout";
import Sql from "./pages/Sql";
import MongoDB from "./pages/MongoDB";

import MobileLayout from "./Layout/mobilelayout";


import VideoEditing from "./pages/VideoEditing";
import Grapicdesign from "./pages/grapicdesign";
import Design from "./components/sections/Design";

import UIUX from "./pages/UIUX";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* RootLayout wraps all pages */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          {/* Design */}
          <Route path="/design" element={<Design />}>
            <Route index element={<Navigate to="graphic" replace />} />
            <Route path="graphic" element={<Grapicdesign />} />
            <Route path="video" element={<VideoEditing />} />
            <Route path="desinuiux" element={<UIUX />} />
          </Route>

          {/* Tutorials */}
          <Route path="/tutorials" element={<Tutorials />}>
            <Route index element={<Navigate to="frontend/react" replace />} />

            {/* Frontend */}
            <Route path="frontend" element={<FrontendLayout />}>
              <Route index element={<Navigate to="react" replace />} />
              <Route path="react" element={<Reactin />} />
              <Route path="next" element={<Next />} />
            </Route>

            {/* Backend */}
            <Route path="backend" element={<BackEndLayout />}>
              <Route index element={<Navigate to="express" replace />} />
              <Route path="express" element={<Express />} />
              <Route path="springboot" element={<SpringBoot />} />
            </Route>

            {/* Database */}
            <Route path="database" element={<DataBaseLayout />}>
              <Route index element={<Navigate to="sql" replace />} />
              <Route path="sql" element={<Sql />} />
              <Route path="mongodb" element={<MongoDB />} />
            </Route>

            {/* Mobile */}
            <Route path="mobile" element={<MobileLayout />}>
              <Route index element={<Navigate to="reactnative" replace />} />
              <Route path="reactnative" element={<ReactNative />} />
              <Route path="flutter" element={<Flutter />} />
            </Route>
          </Route>

          {/* About */}
          <Route path="/about" element={<AboutUsLayout />}>
            <Route index element={<Navigate to="education" replace />} />
            <Route path="education" element={<Education />} />
            <Route path="work" element={<Work />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
