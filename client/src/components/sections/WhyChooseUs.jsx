import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Cpu, LineChart, Sparkles } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import Button from "../ui/Button";

const features = [
  {
    title: "Senior AI Specialists Only",
    desc: "Direct access to top 1% engineers with deep domain expertise in LLM fine-tuning, RAG architecture, and full-stack React/Node ecosystems.",
    icon: Cpu,
  },
  {
    title: "Enterprise Grade Security & Privacy",
    desc: "Strict data privacy protocols, zero-retention API policies, SOC2 compliance, and dedicated private VPC deployments.",
    icon: ShieldCheck,
  },
  {
    title: "Rapid Time-to-Market",
    desc: "Automated CI/CD pipelines, reusable component systems, and agile sprints get your product live weeks ahead of traditional agency schedules.",
    icon: Zap,
  },
  {
    title: "Measurable Business Outcomes",
    desc: "Every line of code and marketing strategy is built around direct ROI—whether scaling conversion rates or cutting manual operational hours.",
    icon: LineChart,
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-[var(--color-bg-primary)]">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <SectionIntro
            eyebrow="The NextGenAI Advantage"
            title="Why Leading Brands Partner With Us"
            description="We bridge the gap between speculative AI hype and battle-tested engineering that drives real commercial growth."
            className="mb-0"
          />

          <div className="space-y-3 pt-2">
            {[
              "100% Code Ownership & IP Transfer",
              "Transparent Weekly Progress Demos",
              "Dedicated Slack Channel & Senior Lead",
              "Post-Launch SLA Support & Training",
            ].map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 px-4 py-3 text-sm font-semibold text-[var(--color-text-primary)]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button to="/about" variant="primary" showArrow icon={Sparkles}>
              Learn More About Our Team
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 p-6 shadow-[var(--shadow-card)] transition-all hover:border-indigo-500/30 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-extrabold text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
