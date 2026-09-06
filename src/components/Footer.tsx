import { portfolio } from "../content/portfolio";

export function Footer() {
  const hasContact = Boolean(portfolio.contact.email?.trim());
  return (
    <footer
      className="footer section-shell"
      id={hasContact ? "contact" : undefined}
    >
      {hasContact && (
        <div className="footer-invitation">
          <p>
            If you’re working on a problem that needs both structured thinking
            and hands-on execution, I’d be glad to connect.
          </p>
          <a
            className="button button-primary"
            href={`mailto:${portfolio.contact.email}`}
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
      <div className="footer-meta">
        <p>
          {portfolio.name} <span>·</span> {new Date().getFullYear()}
        </p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
