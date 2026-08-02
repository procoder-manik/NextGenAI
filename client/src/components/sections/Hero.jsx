import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroData from "../../data/heroData";
import ParticleBackground from "../common/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_34%),linear-gradient(135deg,var(--color-bg-primary),var(--color-bg-secondary))] py-24 lg:py-32">
      <ParticleBackground className="opacity-40" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500"
            >
              <Sparkles className="h-4 w-4" />
              <span>{heroData.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-black leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Build the future with
              <span className="gradient-text"> premium AI products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] lg:mx-0"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[var(--color-text-secondary)] lg:justify-start"
            >
              {['Custom AI systems', 'Advanced web experiences', 'Automated growth'].map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button to="/contact" variant="gradient" size="lg" icon={Sparkles} showArrow className="w-full sm:w-auto">
                Schedule Consultation
              </Button>
              <Button to="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-6 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-tertiary)] lg:justify-start"
            >
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-indigo-500" /><span>Enterprise grade security</span></div>
              <div className="flex items-center gap-2"><Award className="h-5 w-5 text-cyan-500" /><span>Top 1% AI specialists</span></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-6 shadow-[var(--shadow-card-hover)] backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)]">Live AI Studio</p>
                  <p className="font-display text-2xl font-black text-[var(--color-text-primary)]">Launch in days</p>
                </div>
                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-500">Ready</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['97%', 'Faster delivery'],
                  ['24/7', 'Automation'],
                  ['4.9/5', 'Client rating'],
                  ['150+', 'Launches built'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
                    <p className="font-display text-2xl font-black text-[var(--color-text-primary)]">{value}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-secondary)]">AI workflow orchestration</p>
                    <p className="font-display text-xl font-bold text-[var(--color-text-primary)]">From idea to launch</p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-card)] px-3 py-2 text-sm font-semibold text-[var(--color-text-primary)]">
                    <span>See how</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
