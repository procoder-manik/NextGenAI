import { Link } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import SEO from "../../seo/SEO";
import AnimatedSection from "../../components/common/AnimatedSection";
import { processSteps, services } from "../../data/siteData";

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Strategy, design, technology, and growth services from NextGenAI." path="/services" />
      <PageHero eyebrow="Services" title="The capability to turn ambition into action." description="Bring us a challenge, a goal, or an opportunity. We’ll help you shape the next move." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.05}>
              <article className="group flex h-full flex-col rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[var(--shadow-card-hover)]">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-indigo-500">{service.icon}</span>
                <h2 className="mt-6 font-display text-xl font-black text-[var(--color-text-primary)]">{service.title}</h2>
                <p className="mt-3 leading-8 text-[var(--color-text-secondary)]">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-500 transition-colors hover:text-indigo-400" to={`/services/${service.slug}`}>
                  <span>Explore service</span>
                  <span>→</span>
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-secondary)]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">What to expect</p>
            <h2 className="mt-4 font-display text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl">A flexible team, a disciplined process.</h2>
            <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">We bring the right mix of strategy, craft, and technology to the work in front of you.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.05}>
                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-5 shadow-[var(--shadow-card)]">
                  <p className="font-display text-lg font-black text-indigo-500">{step.number}</p>
                  <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-text-primary)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="rounded-[2rem] border border-dashed border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-8 text-center shadow-[var(--shadow-card)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Flexible engagements</p>
          <h2 className="mt-3 font-display text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl">Pricing shaped around your goals.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">Whether you need a focused launch or a larger transformation, we’ll tailor the scope to your timeline and ambition.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/pricing" variant="gradient" showArrow>
              View Pricing
            </Button>
            <Button to="/contact" variant="secondary">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
