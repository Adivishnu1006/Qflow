import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

          <Link
            to={ROUTES.HOME}
            className="text-2xl font-bold text-blue-600"
          >
            QFlow
          </Link>

        </div>
      </header>

      {/* Main Content */}

      <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl">

        {/* Left Branding Panel */}

        <div className="hidden w-1/2 flex-col justify-center bg-blue-600 p-16 text-white lg:flex">

          <h1 className="text-5xl font-bold leading-tight">
            Skip the Waiting.
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join queues remotely, monitor your token in real time,
            and arrive exactly when your turn comes.
          </p>

          <div className="mt-12 rounded-2xl bg-blue-500/40 p-6">
            <p className="text-xl font-semibold">
              QFlow
            </p>

            <p className="mt-2 text-blue-100">
              Smart Queue Management Platform
            </p>
          </div>

        </div>

        {/* Right Form */}

        <div className="flex flex-1 items-center justify-center p-8">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default AuthLayout;