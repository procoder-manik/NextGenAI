import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import Section from "../ui/Section";
import FaqAccordion from "../common/FaqAccordion";
import SectionIntro from "./SectionIntro";
import api from "../../services/api";
import { faqs as defaultFaqs } from "../../data/siteData";

export default function FAQPreview() {
  const [faqList, setFaqList] = useState(defaultFaqs);

  useEffect(() => {
    api.get("/faqs")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setFaqList(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Section className="bg-[var(--color-bg-primary)]">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <SectionIntro
            eyebrow="Clear Answers"
            title="Frequently Asked Questions"
            description="Have questions about our process, timelines, or technical stack? We are transparent about every aspect of working with us."
            className="mb-0"
          />

          <div className="pt-2">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 text-xs font-bold text-indigo-400 transition-all hover:bg-indigo-500/20"
            >
              <span>View All Common Questions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <FaqAccordion items={faqList.slice(0, 4)} />
        </div>
      </div>
    </Section>
  );
}
