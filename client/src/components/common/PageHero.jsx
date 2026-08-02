import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function PageHero({
  eyebrow = "NextGenAI",
  title,
  description,
  children,
  badge = null,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white border-b border-slate-800">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          {badge ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
              {badge}
            </div>
          ) : (
            <p className="text-xs font-black uppercase tracking-widest text-indigo-400">
              {eyebrow}
            </p>
          )}

          <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl leading-tight text-white">
            {title}
          </h1>

          {description && (
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}

          {children && <div className="pt-4">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
