import { motion } from "framer-motion";
import { Search, Compass, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";

const steps = [
  {
    number: "01",
    title: "Deep Discovery & AI Audit",
    text: "We analyze your existing architecture, workflow bottlenecks, and data assets to uncover high-impact AI opportunities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture & Strategy Plan",
    text: "Our senior engineers architect a deterministic roadmap covering model selection, API security, and UX wireframes.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Agile Development & Fine-Tuning",
    text: "We build custom LLM agents, web applications, or marketing funnels in rapid iterative sprints with transparent code reviews.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Deployment & Scaling Growth",
    text: "Continuous monitoring, automated testing, and ongoing data optimization ensure sustained ROI and effortless expansion.",
    icon: TrendingUp,
  },
];

export default function WorkingProcess() {
  return (
    <Section className="bg-[var(--color-bg-secondary)]">
      <SectionIntro
        eyebrow="Proven Methodology"
        title="4 Steps From Vision to High-Performing Reality"
        description="Our standardized deployment framework guarantees rapid execution without sacrificing code quality or data security."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-black text-[var(--color-text-tertiary)]/30 group-hover:text-indigo-500/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-extrabold text-[var(--color-text-primary)] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {step.text}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-[11px] font-bold text-indigo-500 pt-4 border-t border-[var(--color-border)]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Phase Milestone Guaranteed</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
