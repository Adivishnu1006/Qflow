function FloatingCard({ icon, title, subtitle, className = "" }) {
  return (
    <div
      className={`absolute rounded-2xl border border-slate-200 bg-white p-4 shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>

        <div>
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default FloatingCard;