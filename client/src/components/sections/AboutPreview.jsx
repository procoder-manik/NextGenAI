import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import AnimatedSection from "../common/AnimatedSection";

export default function AboutPreview() {
  return (
    <Section className="bg-[var(--color-bg-secondary)]">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionIntro
          eyebrow="Our approach"
          title="A clear path from ambitious ideas to measurable growth."
          description="We connect brand, technology, and performance into one focused partnership that helps teams ship faster and scale with confidence."
        />

        <AnimatedSection>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 p-8 shadow-[var(--shadow-card)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
              <Sparkles className="h-3.5 w-3.5" />
              Premium partnership
            </div>
            <p className="mt-6 font-display text-5xl font-black tracking-tight text-[var(--color-text-primary)]">10+ years</p>
            <p className="mt-3 text-lg leading-8 text-[var(--color-text-secondary)]">Helping teams build digital experiences that earn attention, accelerate adoption, and drive action.</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400">
              <span>Meet NextGenAI</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
