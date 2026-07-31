import PageHero from "./PageHero";
import Section from "../ui/Section";
import SEO from "../../seo/SEO";
export default function LegalPage({ title, description, sections, path }) { return <><SEO title={title} description={description} path={path} /><PageHero title={title} description={description} eyebrow="Legal" /><Section><article className="mx-auto max-w-3xl space-y-9">{sections.map((section) => <section key={section.title}><h2 className="text-2xl font-bold">{section.title}</h2><p className="mt-3 leading-8 text-slate-600">{section.text}</p></section>)}</article></Section></>; }
