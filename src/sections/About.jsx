import { profile, stats, softSkills, languages } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="Who I Am" />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-summary" as="div">
            <p>{profile.summary}</p>

            <div className="about-tags-group">
              <span className="about-tags-label">Soft Skills</span>
              <div className="about-tags">
                {softSkills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-tags-group">
              <span className="about-tags-label">Languages</span>
              <div className="about-tags">
                {languages.map((lang) => (
                  <span className="chip" key={lang}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="about-stats" as="div" delay={120}>
            {stats.map((stat) => (
              <div className="stat-card card" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
