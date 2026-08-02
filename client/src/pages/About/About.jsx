import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import SEO from "../../seo/SEO";
import AnimatedSection from "../../components/common/AnimatedSection";
import { stats, team, values } from "../../data/siteData";

export default function About() {
  return (
    <>
      <SEO title="About" description="Meet the people and principles behind NextGenAI." path="/about" />
      <PageHero eyebrow="About us" title="We help good businesses become impossible to ignore." description="NextGenAI is a digital growth partner for teams ready to make their next move count." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Our story</p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">A partner built for progress.</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="space-y-5 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-8 text-base leading-8 text-[var(--color-text-secondary)] shadow-[var(--shadow-card)]">
              <p>We started with a simple belief: the best digital work is clear, useful, and connected to a real goal. That belief still guides every engagement.</p>
              <p>Today, our strategists, designers, and engineers help ambitious organisations turn complex opportunities into focused momentum.</p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-secondary)]">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 p-8 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-2xl font-black text-[var(--color-text-primary)]">Our mission</h2>
              <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">Give ambitious teams the strategy and digital capability to grow with confidence.</p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <article className="rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-8 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-2xl font-black text-[var(--color-text-primary)]">Our vision</h2>
              <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">A future where useful technology makes every customer experience more human.</p>
            </article>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Our values</p>
          <h2 className="mt-4 font-display text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl">Principles that keep the work grounded.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.05}>
              <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-7 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-black text-[var(--color-text-primary)]">{value.title}</h3>
                <p className="mt-3 leading-8 text-[var(--color-text-secondary)]">{value.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-secondary)]">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">The team</p>
          <h2 className="mt-4 font-display text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl">Experienced leaders, strong collaborators.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((person, index) => (
            <AnimatedSection key={person.name} delay={index * 0.05}>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-7 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 font-display text-lg font-black text-white">
                  {person.initials}
                </div>
                <h3 className="mt-5 font-display text-xl font-black text-[var(--color-text-primary)]">{person.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">{person.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedSection key={stat.label}>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-6 text-center shadow-[var(--shadow-card)]">
                <p className="font-display text-3xl font-black text-[var(--color-text-primary)]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-text-secondary)]">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/contact" variant="gradient" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
