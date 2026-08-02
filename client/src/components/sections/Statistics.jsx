import { motion } from "framer-motion";
import { Award, CheckCircle2, Clock, Users, Zap, Code2 } from "lucide-react";
import Section from "../ui/Section";
import Container from "../ui/Container";

const stats = [
  { value: "250+", label: "AI & Full-Stack Projects Delivered", icon: CheckCircle2, detail: "Across US, EU & Asia" },
  { value: "98.8%", label: "Client Satisfaction Rate", icon: Users, detail: "Verified NPS Score" },
  { value: "12+", label: "Years Engineering Excellence", icon: Award, detail: "Senior Specialized Team" },
  { value: "< 24h", label: "Dedicated Rapid Support Response", icon: Clock, detail: "Round-the-clock SLAs" },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white border-y border-slate-800">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    Metric 0{idx + 1}
                  </span>
                </div>

                <div className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 font-display bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                <p className="text-sm font-bold text-slate-300 mb-1">
                  {stat.label}
                </p>

                <p className="text-xs text-slate-500">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
