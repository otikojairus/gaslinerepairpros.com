import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS, SITE_NAME, absoluteUrl, toPath } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gas Safety Blog",
  description: "Read gas line and leak safety articles for homes and businesses.",
  alternates: { canonical: "/blog" },
  openGraph: { title: `${SITE_NAME} Blog`, description: "Guides and tips", url: absoluteUrl("/blog") },
};

export default function BlogIndexPage() {
  return (
    <main className="pulse-main pulse-section">
      <div className="pulse-wrap">
        <h1>Gas Service Guides</h1>
        <p className="pulse-lead">
          These articles are designed to answer common pre-service questions, explain warning signs in plain language,
          and help you prepare before booking work.
        </p>
        <div className="pulse-grid pulse-grid-2">
          {BLOG_POSTS.map((post) => (
            <Link key={post.pageSlug} href={toPath(post.pageSlug)} className="pulse-card">
              <h2>{post.pageTitle}</h2>
              <p>{post.primaryKeyword}</p>
            </Link>
          ))}
        </div>
        <section className="pulse-detail">
          <h2>What You Will Learn Here</h2>
          <ul>
            <li>How to respond safely when you suspect a line or fitting issue.</li>
            <li>What information to gather before you request a quote.</li>
            <li>How to compare service options without rushing decisions.</li>
            <li>When immediate call support is better than waiting.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
