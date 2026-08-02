import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

export default function Logo({ className = "", textClassName = "" }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="NextGenAI Home"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/40">
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[var(--color-bg-primary)] transition-colors group-hover:bg-transparent">
          <Cpu className="h-5 w-5 text-indigo-500 transition-colors group-hover:text-white" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className={`font-display text-xl font-extrabold tracking-tight ${textClassName || 'text-[var(--color-text-primary)]'}`}>
          <span className={textClassName ? '' : 'text-[var(--color-text-primary)]'}>Next</span><span className="gradient-text">GenAI</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)]">
          AI & Digital Agency
        </span>
      </div>
    </Link>
  );
}