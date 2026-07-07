import { cn } from "@/utils/cn";

function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  required = false,
  ...props
}) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex h-12 items-center rounded-xl border border-slate-300 bg-white px-4 transition-all duration-200",
          "focus-within:border-blue-600",
          "focus-within:ring-4 focus-within:ring-blue-100",
          error && "border-red-500 focus-within:border-red-500",
          className
        )}
      >
        {leftIcon && (
          <span className="mr-3 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
          {...props}
        />

        {rightIcon && (
          <span className="ml-3 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="text-sm text-red-500">
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-sm text-slate-500">
            {helperText}
          </p>
        )
      )}
    </div>
  );
}

export default Input;