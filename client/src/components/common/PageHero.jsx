import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function PageHero({ eyebrow = "NextGenAI", title, description, children }) {
  return <section className="overflow-hidden bg-slate-950 py-20 text-white sm:py-28"><Container><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p><h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>{children}</motion.div></Container></section>;
}
