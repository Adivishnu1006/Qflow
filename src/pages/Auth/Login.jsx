import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "@/components/UI/AuthCard";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import { ROUTES } from "@/routes/routes";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");

  const handleLogin = () => {
    if (role === "customer") {
      navigate(ROUTES.CUSTOMER_HOME);
    } else {
      navigate(ROUTES.ORGANIZATION_DASHBOARD);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue using QFlow"
      footer={
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to={ROUTES.ROLE_SELECTION}
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      }
    >
      <div className="space-y-6">

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />

        {/* Role Selection */}

        {/* <div>
          <label className="mb-3 block text-sm font-medium text-slate-700">
            Login As
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="customer"
                checked={role === "customer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Customer
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="organization"
                checked={role === "organization"}
                onChange={(e) => setRole(e.target.value)}
              />
              Organization
            </label>

          </div>
        </div> */}

        <div className="text-right">
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          fullWidth
          size="lg"
          onClick={handleLogin}
        >
          Sign In
        </Button>

      </div>
    </AuthCard>
  );
}

export default Login;