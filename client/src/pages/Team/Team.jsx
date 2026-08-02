import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/common/PageHero";
import AnimatedSection from "../../components/common/AnimatedSection";
import Section from "../../components/ui/Section";
import ContactCTA from "../../components/sections/ContactCTA";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "../../components/common/SocialIcons";
import SEO from "../../seo/SEO";
import api from "../../services/api";

const initialTeam = [
  {
    _id: "1",
    name: "Dr. Nadia Rahman",
    position: "Chief AI Architect & Co-Founder",
    bio: "Ex-Google Research lead with PhD in Neural Networks. Oversees model architecture and enterprise AI integration strategy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com", github: "https://github.com" },
  },
  {
    _id: "2",
    name: "Arif Khan",
    position: "VP of Engineering & Systems",
    bio: "14+ years scaling high-throughput distributed systems and cloud infrastructure. Formerly Principal Engineer at AWS.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com", github: "https://github.com" },
  },
  {
    _id: "3",
    name: "Sadia Ahmed",
    position: "Head of Product Design & UX",
    bio: "Specializes in intuitive human-AI interface design and design systems that convert user attention into engagement.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    socialLinks: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    _id: "4",
    name: "Tariqul Islam",
    position: "Lead Full-Stack Architect",
    bio: "Expert in React 19, Node.js microservices, and WebSockets. Passionate about sub-100ms API response latency.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    socialLinks: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
];

export default function Team() {
  const [members, setMembers] = useState(initialTeam);

  useEffect(() => {
    api.get("/team")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setMembers(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <SEO title="Team" description="Meet the specialists behind NextGenAI’s product and engineering work." path="/team" />
      <PageHero badge="World-Class Specialists" title="Meet the Minds Behind NextGenAI" description="We are a collective of researchers, systems architects, and product designers obsessed with building extraordinary digital solutions." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mb-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-8 shadow-[var(--shadow-card)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Leadership & delivery</p>
              <h2 className="mt-3 font-display text-3xl font-black text-[var(--color-text-primary)]">A small experienced team that moves with clarity.</h2>
            </div>
            <p className="text-sm leading-8 text-[var(--color-text-secondary)]">Each project is led by senior specialists who blend strategic thinking, elegant UI craft, and robust engineering so you get momentum from day one.</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, idx) => (
            <AnimatedSection key={member._id || member.name} delay={idx * 0.05}>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[var(--shadow-card)] transition-all hover:border-indigo-500/40 hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-[var(--color-text-primary)] transition-colors group-hover:text-indigo-500">{member.name}</h3>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-indigo-400">{member.position}</p>
                    <p className="mb-4 text-sm leading-7 text-[var(--color-text-secondary)]">{member.bio}</p>
                  </div>

                  <div className="flex items-center gap-2 border-t border-[var(--color-border)] pt-4">
                    {member.socialLinks?.linkedin && <a href={member.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] transition-colors hover:bg-indigo-600 hover:text-white" aria-label="LinkedIn"><LinkedinIcon className="h-4 w-4" /></a>}
                    {member.socialLinks?.twitter && <a href={member.socialLinks.twitter} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] transition-colors hover:bg-indigo-600 hover:text-white" aria-label="Twitter"><TwitterIcon className="h-4 w-4" /></a>}
                    {member.socialLinks?.github && <a href={member.socialLinks.github} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] transition-colors hover:bg-indigo-600 hover:text-white" aria-label="GitHub"><GithubIcon className="h-4 w-4" /></a>}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
