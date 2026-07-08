import Card from "@/components/UI/Card";

function AuthCard({
  title,
  subtitle,
  children,
  footer,
}) {
  return (
    <Card className="w-full max-w-md">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {children}
      </div>

      {footer && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          {footer}
        </div>
      )}

    </Card>
  );
}

export default AuthCard;