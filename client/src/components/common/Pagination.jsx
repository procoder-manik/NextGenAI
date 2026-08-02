import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-[var(--color-text-secondary)] transition-all disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 w-10 rounded-xl border text-sm font-semibold transition-all ${page === currentPage ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)]'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-[var(--color-text-secondary)] transition-all disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
