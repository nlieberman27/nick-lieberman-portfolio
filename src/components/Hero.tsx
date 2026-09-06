import { portfolio } from "../content/portfolio";

export function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <p className="eyebrow">
        {portfolio.name} <span>·</span> {portfolio.location}
      </p>
      <div className="hero-grid">
        <h1 id="hero-title">{portfolio.hero.headline}</h1>
        <div className="hero-copy">
          <p>{portfolio.hero.supporting}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href={portfolio.loven.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Loven <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-index" aria-label="Portfolio themes">
        <span>Product</span>
        <span>Operations</span>
        <span>Analysis</span>
        <span>Leadership</span>
      </div>
    </section>
  );
}
