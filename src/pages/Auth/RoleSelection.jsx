import { User, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

function RoleSelection() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">

        <div className="w-full max-w-5xl">

          {/* Heading */}

          <div className="mb-16 text-center">

            <h1 className="text-5xl font-extrabold text-slate-900">
              Welcome to QFlow
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Choose how you want to continue
            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Customer */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

                <User size={40} className="text-blue-600" />

              </div>

              <h2 className="mt-8 text-3xl font-bold">
                Customer
              </h2>

              <p className="mt-3 text-slate-600">
                Join queues remotely, receive live updates and arrive only when its your turn.
              </p>

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">
                Continue as Customer
              </button>

            </div>

            {/* Organization */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                <Building2 size={40} className="text-green-600" />

              </div>

              <h2 className="mt-8 text-3xl font-bold">
                Organization
              </h2>

              <p className="mt-3 text-slate-600">
                Manage customers, queues, staff and analytics from one dashboard.
              </p>

              <button className="mt-8 w-full rounded-xl bg-slate-900 py-4 font-semibold text-white hover:bg-slate-800">
                Continue as Organization
              </button>

            </div>

          </div>

          {/* Login */}

          <div className="mt-12 text-center">

            <p className="text-slate-600">

              Already have an account?

              <button className="ml-2 font-semibold text-blue-600 hover:underline">

                  <Link to={ROUTES.LOGIN}>
  Sign In
</Link>

              </button>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RoleSelection;
