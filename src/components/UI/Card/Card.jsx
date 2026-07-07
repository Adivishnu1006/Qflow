import { cn } from "@/utils/cn";

function Card({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-8 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;