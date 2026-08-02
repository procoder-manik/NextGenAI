import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/common/PageHero";
import AnimatedSection from "../../components/common/AnimatedSection";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import ContactCTA from "../../components/sections/ContactCTA";
import SEO from "../../seo/SEO";
import api from "../../services/api";

const initialPortfolio = [
  {
    _id: "1",
    name: "Luma AI E-Commerce",
    slug: "luma-commerce",
    description: "Enterprise e-commerce platform built with Next.js 15, integrating real-time computer vision product search, vector recommendations, and Stripe multi-currency processing.",
    category: "AI & Full-Stack",
    technologies: ["React", "Node.js", "Python", "OpenAI", "TailwindCSS"],
    client: "Luma Global Retail",
    results: "+240% Conversion Rate, 450ms Page Speed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "2",
    name: "Vertex Health Analytics Engine",
    slug: "vertex-health",
    description: "HIPAA-compliant predictive data dashboard analyzing over 2M patient vitals daily with 99.4% diagnostic anomaly alert accuracy.",
    category: "Predictive AI",
    technologies: ["PyTorch", "FastAPI", "React", "PostgreSQL", "Docker"],
    client: "Vertex Medical Systems",
    results: "99.4% Accuracy, 12M Records Processed",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "3",
    name: "Orbit Financial Compliance Agent",
    slug: "orbit-finance",
    description: "Multi-agent autonomous compliance engine that parses complex SEC filings, reconciles ledgers, and detects financial fraud risks in real-time.",
    category: "Automation",
    technologies: ["LangChain", "Python", "React", "MongoDB", "Redis"],
    client: "Orbit Capital Markets",
    results: "80% Time Savings on Audit Compliance",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "4",
    name: "Nexus Autonomous Robotics OS",
    slug: "nexus-robotics",
    description: "Real-time WebGL control hub and computer vision navigation backend for warehouse automation robots.",
    category: "AI & Full-Stack",
    technologies: ["Three.js", "React", "C++", "WebSockets"],
    client: "Nexus Logistics",
    results: "3x Warehouse Throughput Speed",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Portfolio() {
  const [items, setItems] = useState(initialPortfolio);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    api.get("/portfolio")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setItems(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const filteredItems = activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO title="Portfolio" description="See recent work spanning AI products, digital systems, and automation experiences." path="/portfolio" />
      <PageHero badge="Case Studies & Work" title="Engineering Impact Across Industries" description="Explore how we partner with world-class companies to architect custom AI systems, web platforms, and automated business workflows." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${activeCategory === cat ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredItems.map((item, idx) => (
            <AnimatedSection key={item._id || item.slug} delay={idx * 0.05}>
              <motion.article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[var(--shadow-card)] transition-all hover:border-indigo-500/40 hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img src={item.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-indigo-500/30 bg-slate-950/80 px-3 py-1 text-xs font-bold text-indigo-400 backdrop-blur-md">{item.category}</span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-bold text-indigo-500">
                      <span>Client: {item.client || "Enterprise Client"}</span>
                      {item.results && <span className="text-emerald-500">{item.results}</span>}
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-black text-[var(--color-text-primary)] transition-colors group-hover:text-indigo-500">{item.name}</h3>
                    <p className="mb-6 text-sm leading-8 text-[var(--color-text-secondary)]">{item.description}</p>
                  </div>

                  <div>
                    {item.technologies && (
                      <div className="mb-4 flex flex-wrap gap-1.5 border-t border-[var(--color-border)] pt-4">
                        {item.technologies.map((tech) => <span key={tech} className="rounded-md bg-[var(--color-bg-tertiary)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-text-secondary)]">{tech}</span>)}
                      </div>
                    )}
                    <Button to="/contact" variant="outline" size="sm" showArrow className="w-full">Request Case Study Details</Button>
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
