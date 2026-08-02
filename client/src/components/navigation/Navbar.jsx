import { useState, useEffect } from "react";
import { Menu, X, Sparkles, UserCheck, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import ThemeToggle from "../common/ThemeToggle";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border-card)] bg-[var(--color-bg-glass-strong)] backdrop-blur-xl shadow-lg"
          : "border-b border-transparent bg-[var(--color-bg-primary)]/80 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center lg:flex"
            aria-label="Main Navigation"
          >
            <NavLinks />
          </nav>

          {/* Right Action Bar */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/admin/dashboard"
                  className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-400 hover:bg-indigo-500/20"
                >
                  <UserCheck className="h-4 w-4" />
                  <span>Admin ({user?.name?.split(' ')[0]})</span>
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-red-400 hover:text-red-500"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Button
                to="/contact"
                variant="gradient"
                size="sm"
                icon={Sparkles}
                showArrow
              >
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2.5 text-[var(--color-text-primary)] hover:border-[var(--color-accent)]"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileMenu open={isOpen} closeMenu={closeMenu} />
    </header>
  );
}