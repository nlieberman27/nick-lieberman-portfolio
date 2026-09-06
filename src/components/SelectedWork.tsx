import { portfolio, type Project } from "../content/portfolio";
import { LovenCaseStudy } from "./LovenCaseStudy";

function ProjectStudy({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`project-study project-study-${index + 1}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-heading">
        <p className="project-label">{project.label}</p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-context">{project.context}</p>
      </div>
      <div className="project-narrative">
        <p className="project-summary">{project.summary}</p>
        <ul className="detail-list">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      {project.result && (
        <div
          className="project-result"
          aria-label={`${project.result} ${project.resultDetail}`}
        >
          <strong>{project.result}</strong>
          <span>{project.resultDetail}</span>
        </div>
      )}
    </article>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="work section-shell"
      aria-labelledby="work-title"
    >
      <div className="section-intro">
        <p className="section-kicker">Selected work · 01–05</p>
        <h2 id="work-title">Work I’ve taken seriously enough to test.</h2>
        <p>{portfolio.workIntro}</p>
      </div>
      <LovenCaseStudy />
      <div className="project-list">
        {portfolio.projects.map((project, index) => (
          <ProjectStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
