import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";

export default function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon = null,
  showArrow = false,
  isLoading = false,
  disabled = false,
  className = "",
}) {
  const sizes = {
    sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm font-semibold rounded-xl gap-2",
    lg: "px-8 py-4 text-base font-bold rounded-2xl gap-2.5",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-white/20",
    secondary:
      "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] shadow-sm",
    outline:
      "border border-indigo-500/40 text-indigo-500 hover:bg-indigo-500/10 hover:border-indigo-400",
    glass:
      "glass text-[var(--color-text-primary)] hover:bg-white/10 hover:border-white/30 backdrop-blur-md shadow-lg",
    gradient:
      "gradient-bg text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 border border-white/20",
    ghost:
      "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]",
  };

  const baseClasses =
    "group inline-flex items-center justify-center transition-all duration-300 transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none select-none font-display tracking-wide";

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : Icon ? (
        <Icon className="h-4 w-4" />
      ) : null}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}