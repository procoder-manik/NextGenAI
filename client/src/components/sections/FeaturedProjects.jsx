import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import api from "../../services/api";

const sampleProjects = [
  {
    _id: "1",
    name: "Luma AI E-Commerce",
    slug: "luma-commerce",
    type: "AI Platform & Full-Stack",
    description: "Next.js 15 e-commerce engine with real-time AI product recommendations & visual search.",
    category: "AI & Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "Python", "OpenAI"],
  },
  {
    _id: "2",
    name: "Vertex Health Analytics",
    slug: "vertex-health",
    type: "Enterprise Data & Predictive AI",
    description: "Predictive patient outcome dashboard processing 2M+ daily metrics with 99.4% accuracy.",
    category: "Predictive AI",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "PyTorch", "React", "PostgreSQL"],
  },
  {
    _id: "3",
    name: "Orbit Finance Autonomous Bot",
    slug: "orbit-finance",
    type: "Financial Automation & Agent",
    description: "Multi-agent autonomous financial compliance & automated ledger reconciliation engine.",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    technologies: ["LangChain", "FastAPI", "MongoDB", "Tailwind"],
  },
];

export default function FeaturedProjects() {
  const [portfolio, setPortfolio] = useState(sampleProjects);

  useEffect(() => {
    api.get("/portfolio")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setPortfolio(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Section className="bg-[var(--color-bg-primary)]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <SectionIntro
          eyebrow="Selected Portfolio"
          title="Proven Case Studies & AI Innovation"
          description="A showcase of recent enterprise AI implementations, custom web platforms, and automated workflow transformations."
          className="mb-0 max-w-2xl"
        />

        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-2 font-display text-sm font-bold text-indigo-500 hover:text-indigo-400"
        >
          <span>View Complete Case Studies</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {portfolio.slice(0, 3).map((item) => (
          <motion.article
            key={item._id || item.slug}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-lg transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={item.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />

              <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-bold text-indigo-400 backdrop-blur-md border border-indigo-500/30">
                {item.category || item.type}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="font-display text-xl font-extrabold text-[var(--color-text-primary)] group-hover:text-indigo-500 transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {item.description || item.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[var(--color-bg-tertiary)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-tertiary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
