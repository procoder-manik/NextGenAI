export default function LoadingSpinner({ label = 'Loading' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20" />
        <div className="absolute inset-0 rounded-full border-t-4 border-indigo-500 animate-spin" />
      </div>
      <p className="text-sm font-semibold text-[var(--color-text-secondary)]">{label}</p>
    </div>
  );
}
