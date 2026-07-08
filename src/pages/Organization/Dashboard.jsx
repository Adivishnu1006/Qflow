import Button from "@/components/UI/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl p-8">

      <h1 className="text-4xl font-bold">
        Organization Dashboard
      </h1>

      <p className="mt-3 text-slate-600">
        Welcome to QFlow Organization Portal.
      </p>

      <div className="mt-10 rounded-xl border p-6">

        <h2 className="text-xl font-semibold">
          Today's Queue
        </h2>

        <p className="mt-2 text-slate-500">
          Coming Soon...
        </p>

      </div>

      <div className="mt-8">
        <Link to={ROUTES.HOME}>
          <Button variant="danger">
            Logout
          </Button>
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;