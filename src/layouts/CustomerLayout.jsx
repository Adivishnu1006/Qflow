import { Outlet } from "react-router-dom";

function CustomerLayout() {
  return (
    <>
      <h2 className="p-6 text-2xl font-bold">
        Customer Layout
      </h2>

      <Outlet />
    </>
  );
}

export default CustomerLayout;