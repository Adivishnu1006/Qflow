import { Link } from "react-router-dom";

import AuthCard from "@/components/UI/AuthCard";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import { ROUTES } from "@/routes/routes";

function CustomerRegister() {
  return (
    <AuthCard
      title="Create Customer Account"
      subtitle="Join QFlow and skip the waiting."
      footer={
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to={ROUTES.LOGIN}
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      }
    >
      <div className="space-y-6">

        <Input
          label="Full Name"
          placeholder="Enter your full name"
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <Input
          label="Phone Number"
          placeholder="+91 9876543210"
          required
        />

        <div className="space-y-4">
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>

        <Button
          fullWidth
          size="lg"
        >
          Create Account
        </Button>

      </div>
    </AuthCard>
  );
}

export default CustomerRegister;