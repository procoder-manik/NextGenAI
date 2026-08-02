import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function ContactCTA() {
  return (
    <Section className="py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 px-8 py-16 text-center text-white shadow-2xl shadow-indigo-500/20 sm:px-16">
        {/* Glow Orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-100 backdrop-blur-md border border-white/20">
            <Sparkles className="h-4 w-4" />
            <span>Ready To Elevate Your Business?</span>
          </div>

          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl leading-tight">
            Have a Visionary AI or Web Project in Mind?
          </h2>

          <p className="mx-auto max-w-xl text-sm sm:text-base text-indigo-100 leading-relaxed">
            Tell us about your goals. Our senior technical architects will analyze your requirements and deliver a detailed scope & strategy within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              to="/contact"
              variant="glass"
              size="lg"
              icon={MessageSquare}
              showArrow
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl"
            >
              Start Free Architecture Session
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
