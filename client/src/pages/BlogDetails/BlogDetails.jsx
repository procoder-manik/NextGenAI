import { Link, useParams } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/ui/Section";
import SEO from "../../seo/SEO";
import AnimatedSection from "../../components/common/AnimatedSection";
import { posts } from "../../data/siteData";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="p-12 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[var(--color-text-link)]">Back to insights</Link>
      </section>
    );
  }

  const related = posts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />

      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt}>
        <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">By {post.author} · {post.date} · {post.readTime}</p>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="text-sm">
            <p className="font-bold text-[var(--color-text-primary)]">On this page</p>
            <ol className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
              <li>1. The opportunity</li>
              <li>2. A practical approach</li>
              <li>3. What to do next</li>
            </ol>

            <p className="mt-8 font-bold text-[var(--color-text-primary)]">Share</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">in</button>
              <button className="rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">X</button>
              <button className="rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">↗</button>
            </div>
          </aside>

          <article className="max-w-3xl">
            <div className="aspect-[16/8] rounded-2xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/10" />

            <div className="mt-10 space-y-7 leading-8 text-[var(--color-text-secondary)]">
              <p className="text-[var(--color-text-secondary)]">Digital growth is not about adding technology for its own sake. It is about finding the moments where a better experience, a clearer message, or a smarter system can create real value.</p>

              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Start with the opportunity</h2>
              <p className="text-[var(--color-text-secondary)]">Look closely at the journey your customer takes today. Where is there friction? Where do questions repeat? Those are often the best places to start.</p>

              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Make the next step practical</h2>
              <p className="text-[var(--color-text-secondary)]">Choose a focused experiment, decide how success will be measured, and bring the people who will use it into the process early.</p>

              <div className="pt-4">
                <p className="text-[var(--color-text-secondary)]">When you ship a concise, measurable pilot you get learning fast — and you avoid committing to large programs without evidence.</p>
              </div>
            </div>

            <Section className="bg-[var(--color-bg-secondary)]">
              <div className="mx-auto max-w-3xl space-y-6 py-8">
                <h3 className="text-2xl font-extrabold text-[var(--color-text-primary)]">Keep reading</h3>
                <div className="grid gap-5 md:grid-cols-2">
                  {related.map((item, idx) => (
                    <AnimatedSection key={item.slug} delay={idx * 0.06}>
                      <Link to={`/blog/${item.slug}`} className="block rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-6 text-[var(--color-text-primary)] shadow-[var(--shadow-card)] hover:border-indigo-500/30">
                        <p className="text-sm font-semibold text-indigo-400">{item.category}</p>
                        <h4 className="mt-3 font-display text-xl font-black text-[var(--color-text-primary)]">{item.title}</h4>
                        <p className="mt-3 text-[var(--color-text-secondary)]">{item.excerpt}</p>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </Section>
          </article>
        </div>
      </Section>
    </>
  );
}
