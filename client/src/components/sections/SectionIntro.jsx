import { motion } from "framer-motion";

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl ${
        align === "center"
          ? "mx-auto text-center"
          : align === "right"
          ? "ml-auto text-right"
          : ""
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
