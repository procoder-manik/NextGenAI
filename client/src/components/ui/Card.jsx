export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
}