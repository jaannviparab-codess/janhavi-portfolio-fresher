import { jobSimulations } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { FlaskIcon } from '../components/Icons'
import './JobSimulations.css'

export default function JobSimulations() {
  return (
    <section id="job-simulations" className="section section-alt job-simulations">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="Job Simulations"
            title="Practical, Guided Industry Simulations"
            description="Forage simulations where I practiced real analyst workflows in a structured, guided format — not professional employment."
          />
        </Reveal>

        <div className="job-sim-grid">
          {jobSimulations.map((sim, index) => (
            <Reveal
              as="article"
              key={sim.title}
              className="job-sim-card card card-hover"
              delay={index * 90}
            >
              <span className="job-sim-icon">
                <FlaskIcon width={20} height={20} />
              </span>
              <span className="chip job-sim-provider">{sim.provider} Simulation</span>
              <h3 className="job-sim-title">{sim.title}</h3>
              <p>{sim.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
