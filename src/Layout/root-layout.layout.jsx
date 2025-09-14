import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar /> {/* Always shows on top */}
      <Outlet /> {/* Page content */}
    </>
  );
}

export default RootLayout;
