import Section from "../ui/Section";
import Container from "../ui/Container";

const companies = [
  { name: "LUMA AI", desc: "Computer Vision" },
  { name: "VERTEX INC", desc: "Fintech Platform" },
  { name: "NOVA LABS", desc: "Biotech Intelligence" },
  { name: "ORBIT CLOUD", desc: "Cloud Systems" },
  { name: "NEXUS ROBOTICS", desc: "Autonomous AI" },
  { name: "SYNAPSE STRATEGY", desc: "Enterprise Data" },
];

export default function TrustedCompanies() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 py-10 overflow-hidden">
      <Container>
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Empowering Leading Enterprise Teams & Global AI Innovators
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 items-center justify-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center justify-center p-3 rounded-xl border border-transparent hover:border-[var(--color-border-card)] hover:bg-[var(--color-bg-card)] transition-all group"
            >
              <span className="font-display text-lg font-black tracking-wider text-[var(--color-text-tertiary)] group-hover:text-indigo-500 transition-colors">
                {company.name}
              </span>
              <span className="text-[10px] font-medium text-[var(--color-text-tertiary)]/70">
                {company.desc}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
