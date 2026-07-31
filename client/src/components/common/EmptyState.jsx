export default function EmptyState({
  title = "Nothing Found",
  message = "There is no data available.",
}) {
  return (
    <div className="rounded-xl border border-dashed p-10 text-center">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}