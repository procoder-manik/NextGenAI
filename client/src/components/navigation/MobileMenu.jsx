import { NavLink } from "react-router-dom";
import navData from "../../data/navData";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

export default function MobileMenu({ open, closeMenu }) {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!open) return null;

  return (
    <div className="animate-fade-up border-b border-[var(--color-border)] bg-[var(--color-bg-primary)] px-6 py-6 shadow-2xl lg:hidden">
      <nav className="flex flex-col gap-2">
        {navData.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={closeMenu}
            end={item.path === "/"}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-500 font-bold"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}

        <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
          {isAuthenticated ? (
            <div className="flex flex-col gap-2">
              <NavLink
                to="/admin/dashboard"
                onClick={closeMenu}
                className="w-full text-center rounded-xl bg-indigo-500/10 py-3 text-sm font-semibold text-indigo-400"
              >
                Admin Dashboard ({user?.name})
              </NavLink>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="w-full text-center rounded-xl bg-red-500/10 py-3 text-sm font-semibold text-red-400"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Button
              to="/contact"
              variant="gradient"
              size="md"
              icon={Sparkles}
              onClick={closeMenu}
              className="w-full"
            >
              Get Started Now
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}