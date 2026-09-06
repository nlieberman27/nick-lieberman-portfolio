import { portfolio } from "../content/portfolio";

const isConfigured = (value?: string) => Boolean(value?.trim());

export function Header() {
  const { contact } = portfolio;

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#top"
        aria-label="Nick Lieberman, back to top"
      >
        NL<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        {isConfigured(contact.email) && (
          <a href={`mailto:${contact.email}`}>Contact</a>
        )}
        {isConfigured(contact.linkedInUrl) && (
          <a
            href={contact.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span className="external-mark" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
        {isConfigured(contact.resumeUrl) && (
          <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
            <span className="external-mark" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </nav>
    </header>
  );
}
