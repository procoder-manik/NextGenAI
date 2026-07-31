import Section from "../ui/Section";
const companies = ["LUMA", "VERTEX", "NOVA", "ORBIT", "NEXUS"];
export default function TrustedCompanies() { return <Section className="border-y border-slate-100 py-10"><p className="mb-6 text-center text-xs font-bold uppercase tracking-[.18em] text-slate-500">Trusted by teams building what is next</p><div className="grid grid-cols-2 gap-6 text-center text-xl font-bold tracking-[.16em] text-slate-400 sm:grid-cols-5">{companies.map((company) => <span key={company}>{company}</span>)}</div></Section>; }
