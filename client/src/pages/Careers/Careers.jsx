import { useState, useEffect } from "react";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import AnimatedSection from "../../components/common/AnimatedSection";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ContactCTA from "../../components/sections/ContactCTA";
import SEO from "../../seo/SEO";
import api from "../../services/api";

const initialCareers = [
  {
    _id: "1",
    title: "Senior AI & LLM Systems Engineer",
    department: "Engineering",
    type: "full-time",
    location: "Remote (Global) / Dhaka HQ",
    salary: "$90,000 - $140,000 / yr",
    description: "Build custom fine-tuned model pipelines, agentic RAG architectures, and high-throughput vector search services.",
    requirements: ["5+ years Python / C++ production experience", "Deep expertise with PyTorch, LangChain, or LlamaIndex", "Experience deploying models to AWS SageMaker or Modal"],
  },
  {
    _id: "2",
    title: "Lead Full-Stack React & Node Architect",
    department: "Engineering",
    type: "full-time",
    location: "Remote (Global)",
    salary: "$80,000 - $120,000 / yr",
    description: "Lead frontend and API architecture for enterprise web applications using React 19, Express, MongoDB, and TailwindCSS.",
    requirements: ["6+ years React / Node.js ecosystem experience", "Expert knowledge of performance optimization & state management", "Strong aesthetic eye for modern micro-interactions & glassmorphism"],
  },
  {
    _id: "3",
    title: "AI Product Designer & UX Researcher",
    department: "Design",
    type: "full-time",
    location: "Hybrid / Remote",
    salary: "$70,000 - $100,000 / yr",
    description: "Craft next-generation human-AI interaction patterns, generative UI components, and scalable design systems.",
    requirements: ["4+ years designing complex SaaS or AI products", "Mastery of Figma, Framer, and component design tokens", "Portfolio demonstrating AI UX or generative UI concepts"],
  },
];

export default function Careers() {
  const [openings, setOpenings] = useState(initialCareers);

  useEffect(() => {
    api.get("/careers")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setOpenings(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <SEO title="Careers" description="Explore open roles at NextGenAI and help shape our next generation of products." path="/careers" />
      <PageHero badge="Join Our Team" title="Shape the Future of AI & Software" description="We are looking for extraordinary engineers, designers, and thinkers who thrive on solving hard technical problems." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mx-auto mb-10 max-w-4xl rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-8 shadow-[var(--shadow-card)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Why join us</p>
          <h2 className="mt-3 font-display text-3xl font-black text-[var(--color-text-primary)]">Work on ambitious problems with a team that values craft.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--color-text-secondary)]">We build with purpose, move quickly, and give our people ownership over the work that matters most.</p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {openings.map((job, index) => (
            <AnimatedSection key={job._id || job.title} delay={index * 0.05}>
              <Card className="p-8 transition-all hover:border-indigo-500/40">
                <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-6 md:flex-row md:items-center">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold text-indigo-400">{job.department}</span>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)]"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)]"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold text-[var(--color-text-primary)]">{job.title}</h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="block font-display text-lg font-black text-indigo-400">{job.salary}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="text-sm leading-8 text-[var(--color-text-secondary)]">{job.description}</p>
                  {job.requirements && (
                    <div className="space-y-1.5 pt-2">
                      {job.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)]">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4">
                    <Button to="/contact" variant="primary" size="sm" showArrow>Apply For Position</Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
