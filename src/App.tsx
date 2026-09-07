import { portfolio } from "./content/portfolio";

const Arrow = () => <span aria-hidden="true">↗</span>;
const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer">{children} <Arrow /></a>
);

function Experience({ item, index }: { item: (typeof portfolio.experience)[number]; index: number }) {
  return <article className={`experience experience-${index + 1}`} id={item.id}>
    <div className="experience-index" aria-hidden="true">0{index + 1}</div>
    <div className="experience-heading"><p className="date">{item.dates}</p><h3>{item.name}</h3></div>
    <div className="experience-copy">
      <p className="role">{item.role}{item.location ? ` · ${item.location}` : ""}</p>
      {item.context && <p className="context">{item.context}</p>}
      <p>{item.body}</p>
      {item.links && <div className="link-row">{item.links.map(link => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div>}
    </div>
  </article>;
}

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#top">{portfolio.name}</a>
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </header>
    <main id="main">
      <section className="hero" id="top">
        <p className="edition">Berkeley, California <span>Portfolio / 2026</span></p>
        <h1>{portfolio.hero.heading}</h1>
        <div className="hero-bottom"><p className="hero-copy">{portfolio.hero.body}</p><div><p className="education">{portfolio.hero.education}</p><div className="actions"><a href="#work">View my work ↓</a></div></div></div>
      </section>

      <section className="now" aria-labelledby="now-title">
        <h2 id="now-title">What I’m doing now</h2>
        <div className="now-list">{portfolio.now.map((item, i) => <article key={item.name}><span>0{i + 1}</span><h3>{item.name}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p>Selected work</p><h2 id="work-title">Recent first,<br/><em>on purpose.</em></h2></div>
        <article className="loven">
          <div className="loven-title"><p className="date">{portfolio.loven.dates}</p><h3>{portfolio.loven.name}</h3><p className="loven-line">{portfolio.loven.line}</p></div>
          <div className="loven-copy"><p className="role">{portfolio.loven.role}</p><p>{portfolio.loven.body}</p><ExternalLink href={portfolio.loven.url}>Visit Loven</ExternalLink></div>
          <ol className="loven-sequence">{portfolio.loven.sequence.map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong></li>)}</ol>
        </article>

        <div className="current-grid" aria-label="Current work">
          {portfolio.current.map(item => <article id={item.id} key={item.id}><p className="date">{item.dates}</p><h3>{item.name}</h3><p className="role">{item.role}</p><p>{item.body}</p></article>)}
        </div>

        <div className="experience-list">
          <div className="list-label"><span>Experience</span><span>2025—2023</span></div>
          {portfolio.experience.map((item, i) => <Experience key={item.id} item={item} index={i}/>) }
        </div>

        <article className="archive">
          <p className="date">Earlier proof / {portfolio.archive.dates}</p><h3>{portfolio.archive.name}</h3><p>{portfolio.archive.body}</p>
          <div className="link-row">{portfolio.archive.links.map(link => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div>
        </article>
      </section>

      <section className="about" id="about"><p className="section-number">07</p><h2>A little more<br/><em>about me</em></h2><p>{portfolio.about}</p></section>
    </main>
    <footer id="contact"><p className="footer-kicker">Want to talk?</p><h2><a href={`mailto:${portfolio.contact.email}`}>Let’s start with<br/>an email. <Arrow /></a></h2><div className="footer-bottom"><a href={`mailto:${portfolio.contact.email}`}>Email me</a><ExternalLink href={portfolio.contact.linkedin}>LinkedIn</ExternalLink><a href="#top">Back to top ↑</a><span>© {new Date().getFullYear()} Nick Lieberman</span></div></footer>
  </>;
}

export default App;
