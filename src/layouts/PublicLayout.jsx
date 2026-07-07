import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navigation/Navbar/Navbar";

function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer will come later */}
    </>
  );
}

export default PublicLayout;