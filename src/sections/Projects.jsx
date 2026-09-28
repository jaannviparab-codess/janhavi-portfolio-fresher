import { featuredProject, otherProjects } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import { GitHubIcon, ExternalLinkIcon, CheckIcon } from '../components/Icons'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Things I've Built"
            description="Real projects where I turned an idea into working software, end to end."
          />
        </Reveal>

        <Reveal as="div" className="featured-project card">
          <div className="featured-project-content">
            <span className="chip chip-accent featured-project-badge">
              Featured Project
            </span>
            <h3 className="featured-project-name">{featuredProject.name}</h3>
            <p className="featured-project-tagline">{featuredProject.tagline}</p>
            <p className="featured-project-description">{featuredProject.description}</p>

            <ul className="featured-project-features">
              {featuredProject.features.map((feature) => (
                <li key={feature}>
                  <CheckIcon width={16} height={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="featured-project-tech">
              {featuredProject.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="featured-project-actions">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
                <ExternalLinkIcon width={16} height={16} />
              </a>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GitHubIcon width={16} height={16} />
                View Code
              </a>
            </div>
          </div>

          <div className="featured-project-visual" aria-hidden="true">
            <ProjectPreview />
          </div>
        </Reveal>

        <div className="other-projects">
          {otherProjects.map((project, index) => (
            <Reveal
              as="article"
              key={project.name}
              className="other-project card card-hover"
              delay={index * 80}
            >
              <div className="other-project-head">
                <h3>{project.name}</h3>
                <span className="chip">{project.tag}</span>
              </div>
              <span className="other-project-date">{project.date}</span>
              <p>{project.description}</p>
              <div className="other-project-tech">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPreview() {
  return (
    <div className="project-preview">
      <div className="project-preview-chrome">
        <span className="dot dot-red" />
        <span className="dot dot-amber" />
        <span className="dot dot-green" />
        <span className="project-preview-url">ai-nivaran.vercel.app</span>
      </div>
      <div className="project-preview-body">
        <div className="project-preview-banner">Demo Mode — simulated reports</div>

        <div className="project-preview-map">
          <span className="preview-pin preview-pin-1" />
          <span className="preview-pin preview-pin-2" />
          <span className="preview-pin preview-pin-3" />
        </div>

        <div className="project-preview-row">
          <div className="preview-score">
            <svg viewBox="0 0 64 64" width="56" height="56">
              <circle cx="32" cy="32" r="26" className="preview-score-track" />
              <circle
                cx="32"
                cy="32"
                r="26"
                className="preview-score-value"
                transform="rotate(-90 32 32)"
                strokeDasharray="133.96 163.36"
              />
            </svg>
            <div className="preview-score-label">
              <strong>82</strong>
              <span>Priority</span>
            </div>
          </div>

          <div className="preview-chips">
            <span className="chip chip-accent">AI Classified</span>
            <div className="preview-lang-chips">
              <span className="chip">EN</span>
              <span className="chip">HI</span>
              <span className="chip">MR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
