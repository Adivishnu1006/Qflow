import { Routes, Route } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import AuthLayout from "@/layouts/AuthLayout";
import CustomerLayout from "@/layouts/CustomerLayout";
import OrganizationLayout from "@/layouts/OrganizationLayout";

import Landing from "@/pages/Landing/Landing";

// Auth Pages
import RoleSelection from "@/pages/Auth/RoleSelection";
import Login from "@/pages/Auth/Login";
import CustomerRegister from "@/pages/Auth/CustomerRegister";
import OrganizationRegister from "@/pages/Auth/OrganizationRegister";
import ForgotPassword from "@/pages/Auth/ForgotPassword";

// Customer Pages
import CustomerHome from "@/pages/Customer/Home";

// Organization Pages
import OrganizationDashboard from "@/pages/Organization/Dashboard";

// Error Page
import NotFound from "@/pages/NotFound";

import { ROUTES } from "./routes";

function AppRoutes() {
  return (
    <Routes>

      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}
      <Route element={<PublicLayout />}>
        <Route
          path={ROUTES.HOME}
          element={<Landing />}
        />
      </Route>

      {/* ========================= */}
      {/* Authentication Routes */}
      {/* ========================= */}
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

      {/* ========================= */}
      {/* Customer Routes */}
      {/* ========================= */}
      <Route element={<CustomerLayout />}>
        <Route
          path={ROUTES.CUSTOMER_HOME}
          element={<CustomerHome />}
        />
      </Route>

      {/* ========================= */}
      {/* Organization Routes */}
      {/* ========================= */}
      <Route element={<OrganizationLayout />}>
        <Route
          path={ROUTES.ORGANIZATION_DASHBOARD}
          element={<OrganizationDashboard />}
        />
      </Route>

      {/* ========================= */}
      {/* 404 Page */}
      {/* ========================= */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;