import { Outlet } from "react-router-dom";

function OrganizationLayout() {
  return (
    <>
      <h2 className="p-6 text-2xl font-bold">
        Organization Layout
      </h2>

      <Outlet />
    </>
  );
}

export default OrganizationLayout;