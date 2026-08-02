export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        glass
          ? 'glass border-[var(--color-border-card)]'
          : 'bg-[var(--color-bg-card)] border-[var(--color-border)] shadow-sm'
      } ${
        hover
          ? 'hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/30'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}