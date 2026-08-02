import { useState, useEffect } from "react";
import { Star, Quote, Building2 } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import Card from "../ui/Card";
import api from "../../services/api";
import { testimonials as defaultTestimonials } from "../../data/siteData";

export default function Testimonials() {
  const [reviews, setReviews] = useState(defaultTestimonials);

  useEffect(() => {
    api.get("/testimonials")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setReviews(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Section className="bg-[var(--color-bg-secondary)]">
      <SectionIntro
        eyebrow="Verified Client Testimonials"
        title="Trusted by Visionary Founders & Engineering Leaders"
        description="Here is what founders, CTOs, and growth leads say about building with NextGenAI."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.slice(0, 3).map((item, idx) => (
          <Card
            key={item.name || idx}
            className="flex flex-col justify-between p-7 relative overflow-hidden rounded-[2rem]"
          >
            <Quote className="absolute right-6 top-6 h-12 w-12 text-indigo-500/10 pointer-events-none" />

            <div>
              {/* Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-[var(--color-text-secondary)] italic mb-6">
                “{item.quote}”
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 font-display text-sm font-extrabold text-white">
                {item.name.split(" ").map(n => n[0]).join("")}
              </div>

              <div>
                <h4 className="font-display text-sm font-extrabold text-[var(--color-text-primary)]">
                  {item.name}
                </h4>
                <p className="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  <span>{item.role}</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
