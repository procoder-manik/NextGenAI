import { NavLink } from "react-router-dom";
import navData from "../../data/navData";

export default function NavLinks({ onClick, className = "" }) {
  return (
    <div className={`flex items-center gap-1 xl:gap-2 ${className}`}>
      {navData.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          onClick={onClick}
          end={item.path === "/"}
          className={({ isActive }) =>
            `relative px-3 py-2 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-lg ${
              isActive
                ? "text-indigo-500 bg-indigo-500/10 font-bold"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]"
            }`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}