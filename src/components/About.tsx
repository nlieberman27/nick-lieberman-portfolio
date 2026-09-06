import { portfolio } from "../content/portfolio";

export function Leadership() {
  const { leadership } = portfolio;
  return (
    <section
      className="leadership section-shell"
      aria-labelledby="leadership-title"
    >
      <div className="leadership-main">
        <p className="section-kicker">{leadership.label}</p>
        <h2 id="leadership-title">{leadership.title}</h2>
        <p>{leadership.summary}</p>
      </div>
      <div className="leadership-details">
        <ul>
          {leadership.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <p className="leadership-result">{leadership.result}</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="about section-shell"
      aria-labelledby="about-title"
    >
      <div className="about-heading">
        <p className="section-kicker">About</p>
        <h2 id="about-title">Range built through doing.</h2>
      </div>
      <div className="about-copy">
        {portfolio.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="credentials">
        <section aria-labelledby="education-title">
          <p className="section-kicker">Education</p>
          <h3 id="education-title">{portfolio.education.school}</h3>
          <p>{portfolio.education.degree}</p>
          <p>{portfolio.education.minor}</p>
        </section>
        <section aria-labelledby="capabilities-title">
          <p className="section-kicker">Working capabilities</p>
          <h3 id="capabilities-title" className="visually-hidden">
            Working capabilities
          </h3>
          <ul>
            {portfolio.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
