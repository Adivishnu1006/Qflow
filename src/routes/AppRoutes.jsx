import { Routes, Route } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import AuthLayout from "@/layouts/AuthLayout";
import CustomerLayout from "@/layouts/CustomerLayout";
import OrganizationLayout from "@/layouts/OrganizationLayout";

import Landing from "@/pages/Landing/Landing";

import RoleSelection from "@/pages/Auth/RoleSelection";
import Login from "@/pages/Auth/Login";
import CustomerRegister from "@/pages/Auth/CustomerRegister";
import OrganizationRegister from "@/pages/Auth/OrganizationRegister";
import ForgotPassword from "@/pages/Auth/ForgotPassword";

import CustomerDashboard from "@/pages/Customer/Dashboard";
import OrganizationDashboard from "@/pages/Organization/Dashboard";

import { ROUTES } from "./routes";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}

      <Route element={<PublicLayout />}>

        <Route
          path={ROUTES.HOME}
          element={<Landing />}
        />

      </Route>

      {/* Auth */}

      <Route element={<AuthLayout />}>

        <Route
          path={ROUTES.ROLE_SELECTION}
          element={<RoleSelection />}
        />

        <Route
          path={ROUTES.LOGIN}
          element={<Login />}
        />

        <Route
          path={ROUTES.CUSTOMER_REGISTER}
          element={<CustomerRegister />}
        />

        <Route
          path={ROUTES.ORGANIZATION_REGISTER}
          element={<OrganizationRegister />}
        />

        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />

      </Route>

      {/* Customer */}

      <Route element={<CustomerLayout />}>

        <Route
          path={ROUTES.CUSTOMER_DASHBOARD}
          element={<CustomerDashboard />}
        />

      </Route>

      {/* Organization */}

      <Route element={<OrganizationLayout />}>

        <Route
          path={ROUTES.ORGANIZATION_DASHBOARD}
          element={<OrganizationDashboard />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;