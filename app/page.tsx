import Link from "next/link";
import { BLOG_POSTS, CITY_PAGES, PHONE_DISPLAY, SERVICE_HUBS, SITE_NAME, toPath } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="pulse-main">
      <section className="pulse-hero">
        <div className="pulse-wrap">
          <p className="pulse-kicker">Canada-Wide Local Coverage</p>
          <h1>{SITE_NAME}</h1>
          <p>
            If your gas line needs urgent attention, we make your next step simple: quick connection, clear communication,
            and practical repair guidance based on your location.
          </p>
          <p>
            Whether you are dealing with a sudden leak concern, planning a new appliance hookup, or comparing repair
            options for an aging line, this site is built to help you move from uncertainty to action with confidence.
          </p>
          <div className="pulse-actions">
            <a className="pulse-call" href={`tel:${PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}>
              Call {PHONE_DISPLAY}
            </a>
            <Link className="pulse-btn" href="/services">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="pulse-wrap pulse-intro-band">
          <h2>What You Can Expect Working With Us</h2>
          <div className="pulse-grid pulse-grid-3">
            <article className="pulse-card">
              <h3>Safety-First Triage</h3>
              <p>We start with immediate safety guidance, then confirm the right service path before work begins.</p>
            </article>
            <article className="pulse-card">
              <h3>Natural, Clear Explanations</h3>
              <p>Recommendations are explained in plain language so you can make a smart decision without guesswork.</p>
            </article>
            <article className="pulse-card">
              <h3>Local Relevance</h3>
              <p>City pages are tailored to local areas so support feels specific, not generic or copy-pasted.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="pulse-wrap">
          <h2>Service Hubs</h2>
          <p className="pulse-lead">
            Start with a service hub if you are still deciding what you need. Each hub explains the service goal, when
            to call, and how the job is typically handled.
          </p>
          <div className="pulse-grid pulse-grid-3">
            {SERVICE_HUBS.map((page) => (
              <Link className="pulse-card" key={page.pageSlug} href={toPath(page.pageSlug)}>
                <h3>{page.pageTitle.replace(/\s*\|.*/, "")}</h3>
                <p>{page.searchIntent}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="pulse-wrap">
          <h2>Popular City Pages</h2>
          <p className="pulse-lead">
            Choose your city page for location-specific support details, interlinked alternatives, and a direct way to
            connect if your issue is urgent.
          </p>
          <div className="pulse-grid pulse-grid-4">
            {CITY_PAGES.slice(0, 24).map((page) => (
              <Link className="pulse-chip" key={page.pageSlug} href={toPath(page.pageSlug)}>
                {page.pageTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pulse-section">
        <div className="pulse-wrap">
          <h2>Helpful Articles</h2>
          <p className="pulse-lead">
            Our blog content is written for real property owners and managers, with practical prevention tips and
            service-planning guidance you can actually use.
          </p>
          <div className="pulse-grid pulse-grid-2">
            {BLOG_POSTS.map((page) => (
              <Link className="pulse-card" key={page.pageSlug} href={toPath(page.pageSlug)}>
                <h3>{page.pageTitle}</h3>
                <p>Read practical guidance and homeowner-focused safety tips.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
