import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import FaqAccordion from "../../components/common/FaqAccordion";
import AnimatedSection from "../../components/common/AnimatedSection";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import SEO from "../../seo/SEO";
import site from "../../config/site";
import { faqs } from "../../data/siteData";
import api from "../../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [mailtoLink, setMailtoLink] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await api.post("/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      const serverMessage = err.response?.data?.message || "Failed to send message. Please try again.";
      setErrorMsg(serverMessage);
      // create mailto fallback so user can still send request
      const subject = encodeURIComponent(`Contact request from ${formData.name || formData.email}`);
      const bodyParts = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company}`,
        `Phone: ${formData.phone}`,
        "\nMessage:\n",
        formData.message,
      ];
      const mailto = `mailto:${encodeURIComponent(site.email)}?subject=${subject}&body=${encodeURIComponent(bodyParts.join('\n'))}`;
      setMailtoLink(mailto);
    }
  };

  return (
    <>
      <SEO title="Contact Senior Architects" description="Start a conversation with the NextGenAI team." path="/contact" />

      <PageHero
        badge="Direct Consultation"
        title="Let's Build Something Extraordinary"
        description="Tell us about your project requirements or vision. Our senior technical architects will respond within 24 hours."
      />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            ["24h response", "Most inquiries receive a reply the same day."],
            ["NDA protected", "We safeguard strategy, product, and data details."],
            ["Senior-led delivery", "Your project gets architect-level attention from the start."],
          ].map(([title, text]) => (
            <AnimatedSection key={title}>
              <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-5 shadow-[var(--shadow-card)]">
                <p className="font-display text-lg font-black text-[var(--color-text-primary)]">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 shadow-[var(--shadow-card)]">
                <h2 className="font-display text-2xl font-extrabold text-[var(--color-text-primary)] mb-2">Send Us A Message</h2>
                <p className="mb-6 text-sm text-[var(--color-text-secondary)]">Fill out the fields below and we’ll prepare a tailored proposal for your team.</p>

                {status === "success" ? (
                  <div className="rounded-[1.5rem] border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-500 space-y-2">
                    <CheckCircle2 className="mx-auto h-8 w-8" />
                    <h3 className="font-display text-lg font-bold">Message Received!</h3>
                    <p className="text-sm">Thank you. One of our lead solution architects will reach out to you within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs font-semibold text-red-500">
                            {errorMsg}
                            {mailtoLink && (
                              <div className="mt-3">
                                <a href={mailtoLink} className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:opacity-95" target="_blank" rel="noreferrer">Send via Email</a>
                              </div>
                            )}
                          </div>
                        )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-[var(--color-text-primary)]">Your Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-[var(--color-text-primary)]">Work Email *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-[var(--color-text-primary)]">Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-[var(--color-text-primary)]">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-[var(--color-text-primary)]">Project Details & Vision *</label>
                      <textarea required rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project goals, scope, timeline, or tech stack requirements..." className="w-full rounded-xl border border-[var(--color-border-input)] bg-[var(--color-bg-input)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" isLoading={status === "loading"} icon={Send} showArrow className="w-full">Submit Project Inquiry</Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection delay={0.08}>
              <div className="rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-8 text-white shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-extrabold">Direct Contact Information</h3>
                <div className="mt-6 space-y-4 text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <div>
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Email Us</span>
                      <a href={`mailto:${site.email}`} className="font-semibold text-white hover:text-indigo-300">{site.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <div>
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Call Direct</span>
                      <a href={`tel:${site.phone}`} className="font-semibold text-white hover:text-indigo-300">{site.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <div>
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Global HQ</span>
                      <span className="font-semibold text-white">{site.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-300 space-y-2">
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-400" /><span>Support Hours: Sunday - Thursday 9:00 AM - 6:00 PM</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-indigo-400" /><span>Strict NDA & Data Protection Guaranteed</span></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-display text-2xl font-extrabold text-[var(--color-text-primary)]">Common Inquiries Before Partnering</h2>
          <FaqAccordion items={faqs.slice(0, 4)} />
        </div>
      </Section>
    </>
  );
}
