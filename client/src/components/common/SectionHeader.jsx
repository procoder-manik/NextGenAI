import { Sparkles } from 'lucide-react';

export default function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      {title && <h2 className="font-display text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">{title}</h2>}
      {description && <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">{description}</p>}
    </div>
  );
}
