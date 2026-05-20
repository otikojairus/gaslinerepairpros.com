import Link from "next/link";
import { Metadata } from "next";
import { CITY_PAGES, SERVICE_HUBS, SITE_NAME, absoluteUrl, toPath } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gas Services",
  description: "Browse all gas line, leak detection, installation, and fitting service hubs.",
  alternates: { canonical: "/services" },
  openGraph: { title: `${SITE_NAME} Services`, description: "Main service index", url: absoluteUrl("/services") },
};

export default function ServicesPage() {
  return (
    <main className="pulse-main pulse-section">
      <div className="pulse-wrap">
        <h1>All Services</h1>
        <p className="pulse-lead">
          This section gives you a full view of our core gas services, from urgent leak response to planned
          installation and fitting support. Open any page to compare options, understand what is included, and move
          forward with a clear next step.
        </p>
        <div className="pulse-grid pulse-grid-3">
          {SERVICE_HUBS.map((page) => (
            <Link className="pulse-card" key={page.pageSlug} href={toPath(page.pageSlug)}>
              <h2>{page.pageTitle.replace(/\s*\|.*/, "")}</h2>
              <p>{page.primaryKeyword}</p>
            </Link>
          ))}
        </div>
        <section className="pulse-detail">
          <h2>How To Choose The Right Service Page</h2>
          <ul>
            <li>Use repair pages when you already have a known issue and need fast support.</li>
            <li>Use installation pages when adding or relocating gas-connected equipment.</li>
            <li>Use fitting and detection pages when safety checks and technical verification are your priority.</li>
            <li>Call directly if you are unsure which path matches your situation today.</li>
          </ul>
        </section>

        <section className="pulse-detail">
          <h2>All City Service Pages</h2>
          <p className="pulse-lead">
            This index links every city landing page so you can jump straight to your local route without searching.
          </p>
          <div className="pulse-grid pulse-grid-4">
            {CITY_PAGES.map((page) => (
              <Link className="pulse-chip" key={page.pageSlug} href={toPath(page.pageSlug)}>
                {page.pageTitle}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
