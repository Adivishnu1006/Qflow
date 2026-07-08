import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link
            to={ROUTES.HOME}
            className="text-2xl font-bold text-blue-600"
          >
            QFlow
          </Link>

          <Link
            to={ROUTES.HOME}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </Link>

        </div>
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default CustomerLayout;