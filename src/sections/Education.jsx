import { education } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { GraduationCapIcon } from '../components/Icons'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic Background" />
        </Reveal>

        <Reveal as="div" className="education-card card card-hover">
          <span className="education-icon">
            <GraduationCapIcon width={24} height={24} />
          </span>
          <div className="education-details">
            <h3>{education.degree}</h3>
            <div className="education-meta">
              <span className="chip chip-accent">CGPA {education.cgpa}</span>
              <span className="chip">{education.status}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
