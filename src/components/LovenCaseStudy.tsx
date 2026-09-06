import { portfolio } from "../content/portfolio";

export function LovenCaseStudy() {
  const { loven } = portfolio;

  return (
    <article className="loven-case" aria-labelledby="loven-title">
      <div className="loven-cover">
        <div className="loven-cover-top">
          <p className="project-label">{loven.label}</p>
          <p className="project-status">
            <span aria-hidden="true" />
            {loven.status}
          </p>
        </div>
        <div className="loven-title-row">
          <h3 id="loven-title">{loven.title}</h3>
          <span className="loven-mark" aria-hidden="true">
            L
          </span>
        </div>
        <div className="loven-cover-bottom">
          <p>{loven.summary}</p>
          <a
            className="text-link"
            href={loven.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Loven, opens in a new tab"
          >
            Visit live product <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="case-body">
        <section className="case-lead">
          <p className="section-kicker">The problem</p>
          <p className="case-statement">{loven.problem}</p>
        </section>

        <div className="case-columns">
          <section>
            <h4>What I built</h4>
            <ul className="feature-list">
              {loven.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>What I owned</h4>
            <p>{loven.process}</p>
            <ul className="inline-list" aria-label="Areas Nick owned">
              {loven.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="tradeoffs">
          <div className="tradeoffs-heading">
            <p className="section-kicker">Important tradeoffs</p>
            <h4>Decisions behind the experience</h4>
          </div>
          <div className="tradeoff-list">
            {loven.tradeoffs.map((tradeoff, index) => (
              <div className="tradeoff" key={tradeoff.title}>
                <span>0{index + 1}</span>
                <div>
                  <h5>{tradeoff.title}</h5>
                  <p>{tradeoff.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="outcome-grid">
          <section className="outcome">
            <p className="section-kicker">Outcome</p>
            <p>{loven.outcome}</p>
          </section>
          <section className="learning">
            <p className="section-kicker">What I learned</p>
            <p>{loven.learning}</p>
          </section>
        </div>

        <div className="technology-row">
          <p>Product stack</p>
          <ul>
            {loven.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
