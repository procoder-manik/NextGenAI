import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import SEO from "../../seo/SEO";
import AnimatedSection from "../../components/common/AnimatedSection";
import { posts } from "../../data/siteData";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const filtered = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(search.toLowerCase())), [category, search]);

  return (
    <>
      <SEO title="Insights" description="Practical thinking on AI, digital growth, websites, and SEO." path="/blog" />
      <PageHero eyebrow="Insights" title="Useful thinking for digital growth." description="Practical perspectives from the NextGenAI team." />

      <Section className="bg-[var(--color-bg-primary)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <AnimatedSection>
              <article className="rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-8 shadow-[var(--shadow-card)]">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">Featured · {posts[0].category}</p>
                <h2 className="mt-4 font-display text-3xl font-black text-[var(--color-text-primary)]"><Link to={`/blog/${posts[0].slug}`}>{posts[0].title}</Link></h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">{posts[0].excerpt}</p>
                <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400" to={`/blog/${posts[0].slug}`}>
                  <span>Read article</span>
                  <span>→</span>
                </Link>
              </article>
            </AnimatedSection>

            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {filtered.map((post, index) => (
                <AnimatedSection key={post.slug} delay={index * 0.04}>
                  <article className="flex h-full flex-col rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-6 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-500">
                      <Sparkles className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-black text-[var(--color-text-primary)]"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                    <p className="mt-3 flex-1 leading-8 text-[var(--color-text-secondary)]">{post.excerpt}</p>
                    <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">{post.date} · {post.readTime}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            {filtered.length === 0 && <p className="mt-8 text-[var(--color-text-secondary)]">No articles match your search.</p>}
          </div>

          <aside className="space-y-5">
            <AnimatedSection>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-5 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-black text-[var(--color-text-primary)]">Search</h3>
                <div className="mt-3 flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3">
                  <Search className="h-4 w-4 text-[var(--color-text-tertiary)]" />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search articles" className="w-full bg-transparent text-sm outline-none" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-5 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-black text-[var(--color-text-primary)]">Categories</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-3 py-2 text-sm font-semibold transition-all ${category === cat ? 'bg-indigo-500 text-white' : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </Section>
    </>
  );
}
