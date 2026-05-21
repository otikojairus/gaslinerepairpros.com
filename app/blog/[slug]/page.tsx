import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, PHONE_DISPLAY, SITE_NAME, absoluteUrl, toPath } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.pageSlug === `/blog/${slug}`) ?? null;
}

function keywordList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.pageSlug.replace(/^\/blog\//, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Page Not Found" };

  return {
    title: post.pageTitle,
    description: `Read our guide on ${post.primaryKeyword}, warning signs, and safe next steps.`,
    alternates: { canonical: toPath(post.pageSlug) },
    keywords: [post.primaryKeyword],
    openGraph: {
      title: `${post.pageTitle} | ${SITE_NAME}`,
      description: `Guide for ${post.primaryKeyword}.`,
      url: absoluteUrl(toPath(post.pageSlug)),
      type: "article",
      siteName: SITE_NAME,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedKeywords = keywordList(post.secondaryKeywords);

  return (
    <main className="pulse-main pulse-section">
      <article className="pulse-wrap">
        <p className="pulse-kicker">Blog Post</p>
        <h1>{post.pageTitle}</h1>
        <p className="pulse-lead">
          This guide explains {post.primaryKeyword} in plain language so you can quickly understand what is normal,
          what is risky, and what to do next.
        </p>

        <section className="pulse-detail">
          <h2>Why This Topic Matters</h2>
          <p>
            Gas-related concerns can escalate fast when warning signs are ignored. The safest approach is to recognize
            common symptoms early, stop risky actions, and get qualified support when needed.
          </p>
          <p>
            If you are unsure whether your situation is urgent, treat it as urgent first. Keep people away from the
            suspected area and call for guidance.
          </p>
        </section>

        <section className="pulse-detail">
          <h2>What To Check First</h2>
          <ul>
            <li>Notice unusual smells, sounds, or appliance behavior changes.</li>
            <li>Avoid creating sparks or open flames near the suspected issue.</li>
            <li>Move to a safer area and contact trained professionals right away.</li>
            <li>Document what happened so the technician can diagnose faster.</li>
          </ul>
        </section>

        {relatedKeywords.length > 0 && (
          <section className="pulse-detail">
            <h2>Related Search Topics</h2>
            <div className="pulse-grid pulse-grid-3">
              {relatedKeywords.map((keyword) => (
                <article key={keyword} className="pulse-card">
                  <h3>{keyword}</h3>
                  <p>Helpful when comparing symptoms, causes, and service options.</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="pulse-actions">
          <a className="pulse-call" href={`tel:${PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}>
            Call {PHONE_DISPLAY}
          </a>
          <Link className="pulse-btn" href="/blog">
            Back To Blog
          </Link>
        </section>
      </article>
    </main>
  );
}
