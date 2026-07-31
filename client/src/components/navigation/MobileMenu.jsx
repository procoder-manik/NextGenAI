import NavLinks from "./NavLinks";

export default function MobileMenu({
  open,
  closeMenu,
}) {
  if (!open) return null;

  return (
    <div className="border-t bg-white p-6 lg:hidden">
      <div className="flex flex-col gap-5">
        <NavLinks onClick={closeMenu} />
      </div>
    </div>
  );
}