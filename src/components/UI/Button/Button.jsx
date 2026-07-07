import { cn } from "@/utils/cn";
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from "@/constants/theme";

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        fullWidth && "w-full",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;