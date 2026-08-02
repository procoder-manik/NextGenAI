import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-indigo-500/40 bg-[var(--color-bg-card)] shadow-md"
                : "border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/30"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-bold text-sm sm:text-base text-[var(--color-text-primary)]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? 'text-indigo-500' : 'text-[var(--color-text-tertiary)]'}`} />
                <span>{item.question}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[var(--color-text-tertiary)] transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-indigo-500" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-[var(--color-text-secondary)] border-t border-[var(--color-border-light)]">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
