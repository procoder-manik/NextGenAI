import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
const projects = [{ name: "Luma Commerce", type: "Digital platform" }, { name: "Vertex Health", type: "Growth strategy" }, { name: "Orbit Finance", type: "Product experience" }];
export default function FeaturedProjects() { return <Section className="bg-slate-50"><SectionIntro eyebrow="Selected work" title="Built to make a difference." /><div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <motion.article key={project.name} whileHover={{ y: -6 }} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-7 text-white"><p className="text-sm text-blue-200">{project.type}</p><h3 className="mt-auto pt-32 text-2xl font-bold">{project.name}</h3><span className="mt-3 inline-block text-sm">View case study →</span></motion.article>)}</div></Section>; }
