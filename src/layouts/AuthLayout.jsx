import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="min-h-screen bg-slate-50">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left */}

        <div className="hidden lg:flex items-center justify-center bg-blue-600 text-white">

          <div className="max-w-md">

            <h1 className="text-5xl font-bold">
              Welcome to QFlow
            </h1>

            <p className="mt-6 text-lg opacity-90">
              Skip the queue. Save your time.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-8">

          <Outlet />

        </div>

      </div>

    </section>
  );
}

export default AuthLayout;