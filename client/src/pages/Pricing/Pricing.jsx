import { useState } from "react";
import { Check } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import AnimatedSection from "../../components/common/AnimatedSection";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import ContactCTA from "../../components/sections/ContactCTA";
import FAQPreview from "../../components/sections/FAQPreview";
import SEO from "../../seo/SEO";

const tiers = [
  {
    name: "Starter AI & Web",
    badge: "For Growth Startups",
    priceMonthly: "$2,900",
    priceAnnual: "$2,400",
    description: "Ideal for fast-moving startups looking to launch a high-converting web app or pilot an AI workflow.",
    features: ["Custom React / Next.js Web App", "Basic LLM / Chatbot Integration", "Responsive UI & Glassmorphism Design", "Technical SEO & Speed Optimization", "Standard 2-Week Delivery Sprint", "30-Day Post-Launch SLA Support"],
    cta: "Select Starter",
    popular: false,
  },
  {
    name: "Enterprise Scaling",
    badge: "Most Popular Choice",
    priceMonthly: "$6,500",
    priceAnnual: "$5,200",
    description: "For established businesses needing dedicated engineering squads, custom RAG pipelines, and full digital transformation.",
    features: ["Full-Stack Web & Mobile Architecture", "Custom RAG & Vector Database Search", "Automated Backend Microservices & APIs", "Advanced Analytics & Event Tracking", "Dedicated Senior Solutions Architect", "Priority 24/7 SLA & Security Compliance", "Unlimited Sprint Revisions"],
    cta: "Get Enterprise Plan",
    popular: true,
  },
  {
    name: "Custom Innovation",
    badge: "Bespoke Engineering",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    description: "Tailored contracts for large-scale enterprise deployments, multi-region cloud VPCs, and specialized fine-tuned models.",
    features: ["Fine-Tuned Llama / Proprietary Models", "On-Premise or Private VPC Cloud Setup", "SOC2 / HIPAA Compliance Hardening", "Dedicated Engineering Team (3-10 Devs)", "Guaranteed Latency SLA (<50ms)", "Executive Board Quarterly Reviews"],
    cta: "Schedule Executive Briefing",
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("annual");

  return (
    <>
      <SEO title="Pricing" description="Discover flexible engagement options for AI, product, and growth work." path="/pricing" />
      <PageHero badge="Transparent Pricing" title="Predictable Investment For Exceptional Quality" description="Choose an engagement model aligned with your growth stage. No hidden fees or surprise billings." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <span className={`text-xs sm:text-sm font-bold ${billingCycle === "monthly" ? "text-indigo-500" : "text-[var(--color-text-tertiary)]"}`}>Monthly Billing</span>
          <button type="button" onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")} className="relative h-7 w-14 rounded-full border border-slate-700 bg-slate-800 p-1 transition-colors">
            <div className={`h-5 w-5 rounded-full bg-indigo-500 shadow-md transition-transform duration-300 ${billingCycle === "annual" ? "translate-x-7" : "translate-x-0"}`} />
          </button>
          <span className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold ${billingCycle === "annual" ? "text-indigo-500" : "text-[var(--color-text-tertiary)]"}`}>
            <span>Annual Partner</span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-extrabold text-emerald-500">Save 20%</span>
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={index * 0.06}>
              <div className={`relative flex h-full flex-col justify-between rounded-[2rem] p-8 transition-all duration-300 ${tier.popular ? "border-2 border-indigo-500 bg-gradient-to-b from-indigo-950/40 to-slate-900 shadow-2xl shadow-indigo-500/20 lg:-translate-y-3" : "border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[var(--shadow-card)]"}`}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-1 text-[11px] font-extrabold text-white shadow-lg">★ MOST POPULAR</div>}

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-400">{tier.badge}</span>
                  <h3 className="mt-1 mb-3 font-display text-2xl font-black text-[var(--color-text-primary)]">{tier.name}</h3>
                  <p className="mb-6 text-sm leading-7 text-[var(--color-text-secondary)]">{tier.description}</p>

                  <div className="mb-6 border-b border-[var(--color-border)] pb-6">
                    <span className="font-display text-4xl font-black text-[var(--color-text-primary)] sm:text-5xl">{billingCycle === "annual" ? tier.priceAnnual : tier.priceMonthly}</span>
                    {tier.priceMonthly !== "Custom" && <span className="ml-2 text-xs text-[var(--color-text-tertiary)]">/ month</span>}
                  </div>

                  <div className="mb-8 space-y-3">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-sm font-semibold text-[var(--color-text-primary)]">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"><Check className="h-3 w-3" /></div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button to="/contact" variant={tier.popular ? "gradient" : "outline"} size="md" showArrow className="w-full">{tier.cta}</Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <FAQPreview />
      <ContactCTA />
    </>
  );
}
