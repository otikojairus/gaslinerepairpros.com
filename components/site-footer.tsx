import Link from "next/link";
import { BLOG_POSTS, PHONE_DISPLAY, SERVICE_HUBS, SITE_NAME, toPath } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="pulse-footer">
      <div className="pulse-wrap pulse-footer-grid">
        <div>
          <p className="pulse-footer-title">{SITE_NAME}</p>
          <p className="pulse-muted">Friendly local help for gas line, fitting, installation, and leak concerns.</p>
          <a className="pulse-call pulse-call-footer" href={`tel:${PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <p className="pulse-footer-title">Service Hubs</p>
          <div className="pulse-col-links">
            {SERVICE_HUBS.slice(0, 6).map((page) => (
              <Link key={page.pageSlug} href={toPath(page.pageSlug)}>
                {page.pageTitle.replace(/\s*\|.*/, "")}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="pulse-footer-title">Guides</p>
          <div className="pulse-col-links">
            {BLOG_POSTS.slice(0, 4).map((page) => (
              <Link key={page.pageSlug} href={toPath(page.pageSlug)}>
                {page.pageTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
