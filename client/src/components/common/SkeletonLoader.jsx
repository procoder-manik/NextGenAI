export default function SkeletonLoader({ variant = 'card' }) {
  if (variant === 'detail') {
    return (
      <div className="space-y-4">
        <div className="h-8 w-2/3 animate-pulse rounded-2xl bg-[var(--color-bg-tertiary)]" />
        <div className="h-4 w-full animate-pulse rounded-xl bg-[var(--color-bg-tertiary)]" />
        <div className="h-4 w-5/6 animate-pulse rounded-xl bg-[var(--color-bg-tertiary)]" />
        <div className="h-64 animate-pulse rounded-[2rem] bg-[var(--color-bg-tertiary)]" />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="space-y-3 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <div className="h-6 w-3/4 animate-pulse rounded-xl bg-[var(--color-bg-tertiary)]" />
          <div className="h-4 w-full animate-pulse rounded-xl bg-[var(--color-bg-tertiary)]" />
          <div className="h-4 w-5/6 animate-pulse rounded-xl bg-[var(--color-bg-tertiary)]" />
          <div className="h-28 animate-pulse rounded-2xl bg-[var(--color-bg-tertiary)]" />
        </div>
      ))}
    </div>
  );
}
