import { Link, useParams } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import SEO from "../../seo/SEO";
import AnimatedSection from "../../components/common/AnimatedSection";
import { processSteps, services } from "../../data/siteData";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-black text-[var(--color-text-primary)]">Service not found</h1>
        <Link to="/services" className="mt-5 inline-block text-indigo-500">Back to services</Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={service.title} description={service.description} path={`/services/${service.slug}`} />
      <PageHero eyebrow="Service" title={service.title} description={service.description}>
        <Button to="/contact" className="mt-8">
          Discuss your project
        </Button>
      </PageHero>

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection>
            <div>
              <h2 className="font-display text-3xl font-black text-[var(--color-text-primary)]">A tailored approach to {service.title.toLowerCase()}.</h2>
              <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">We start with the context behind the request, then combine the right expertise into a plan your team can act on. The result is work that is purposeful, polished, and ready to perform.</p>
              <h3 className="mt-10 font-display text-xl font-black text-[var(--color-text-primary)]">What’s included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-4 font-medium text-[var(--color-text-primary)]">✓ {feature}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <aside className="rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-7 shadow-[var(--shadow-card)]">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Need a custom scope?</p>
              <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">We’ll build an engagement around the outcome you need.</p>
              <Button to="/contact" variant="secondary" className="mt-6">
                Get in touch
              </Button>
            </aside>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-secondary)]">
        <h2 className="mb-8 font-display text-3xl font-black text-[var(--color-text-primary)]">How we deliver</h2>
        <div className="grid gap-5 md:grid-cols-4">
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
      </Section>
    </>
  );
}
