import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import Section from "../ui/Section";
import SectionIntro from "./SectionIntro";
import api from "../../services/api";
import { posts as defaultPosts } from "../../data/siteData";

export default function LatestBlogs() {
  const [blogList, setBlogList] = useState(defaultPosts);

  useEffect(() => {
    api.get("/blogs")
      .then((res) => {
        if (res.data?.data && res.data.data.length > 0) {
          setBlogList(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <Section className="bg-[var(--color-bg-secondary)]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <SectionIntro
          eyebrow="From The Engineering Journal"
          title="Articles & AI Industry Insights"
          description="Actionable strategies, technical deep-dives, and guides written by our senior engineers."
          className="mb-0 max-w-2xl"
        />

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 font-display text-sm font-bold text-indigo-500 hover:text-indigo-400"
        >
          <span>Read All Articles</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogList.slice(0, 3).map((post) => (
          <article
            key={post.slug || post._id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/90 p-6 shadow-[var(--shadow-card)] transition-all hover:border-indigo-500/40 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold text-indigo-500">
                  {post.category || "AI Strategy"}
                </span>

                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-tertiary)]">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime || "5 min read"}</span>
                </div>
              </div>

              <h3 className="font-display text-lg font-extrabold text-[var(--color-text-primary)] group-hover:text-indigo-500 transition-colors mb-3 leading-snug">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] mb-6 line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] text-xs">
              <span className="text-[var(--color-text-tertiary)] flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date || "Recent"}
              </span>

              <Link
                to={`/blog/${post.slug}`}
                className="font-bold text-indigo-500 group-hover:text-indigo-400 flex items-center gap-1"
              >
                <span>Read Story</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
