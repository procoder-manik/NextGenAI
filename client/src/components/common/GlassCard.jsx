export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div className={`glass-card ${hover ? 'hover:-translate-y-1 hover:border-[var(--color-accent)]/30' : ''} ${className}`}>
      {children}
    </div>
  );
}
