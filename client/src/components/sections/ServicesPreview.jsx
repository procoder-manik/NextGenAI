import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cpu, Globe, Search, BarChart3, Palette, Cloud, ArrowRight } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import Card from "../ui/Card";
import AnimatedSection from "../common/AnimatedSection";
import api from "../../services/api";
import { services as defaultServices } from "../../data/siteData";

const iconMap = {
  "web-development": Globe,
  "seo": Search,
  "digital-marketing": BarChart3,
  "ai-automation": Cpu,
  "ui-ux-design": Palette,
  "cloud-solutions": Cloud,
};

export default function ServicesPreview() {
  const [servicesList, setServicesList] = useState(defaultServices);

  useEffect(() => {
    api.get("/services")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setServicesList(res.data.data);
        }
      })
      .catch(() => {
        // Fallback to static services
      });
  }, []);

  return (
    <Section className="bg-[var(--color-bg-secondary)]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <SectionIntro
          eyebrow="Core Capabilities"
          title="Architected for Unrivaled Performance"
          description="We engineer end-to-end digital solutions powered by state-of-the-art AI, robust full-stack software, and data-driven growth channels."
          className="mb-0 max-w-2xl"
        />

        <Link
          to="/services"
          className="group inline-flex items-center gap-2 font-display text-sm font-bold text-indigo-500 hover:text-indigo-400"
        >
          <span>Explore All 7 Services</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicesList.slice(0, 6).map((service, idx) => {
          const IconComponent = iconMap[service.slug] || Cpu;

          return (
            <AnimatedSection key={service.slug || service._id} delay={idx * 0.05}>
            <Card
              className="group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-xl transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="font-display text-xs font-black tracking-widest text-[var(--color-text-tertiary)]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-[var(--color-text-primary)] group-hover:text-indigo-500 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-6">
                  {service.description}
                </p>

                {service.features && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="rounded-lg bg-[var(--color-bg-tertiary)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-text-secondary)]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-indigo-500 hover:text-indigo-400 pt-4 border-t border-[var(--color-border)]"
              >
                <span>Learn Details & Pricing</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
