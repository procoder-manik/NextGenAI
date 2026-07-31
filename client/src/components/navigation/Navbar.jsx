import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main Navigation"
          >
            <NavLinks />
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button to="/contact">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="rounded-lg p-2 text-3xl lg:hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        open={isOpen}
        closeMenu={closeMenu}
      />
    </header>
  );
}