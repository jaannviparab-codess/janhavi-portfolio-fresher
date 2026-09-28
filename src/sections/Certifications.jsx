import { certifications } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { AwardIcon } from '../components/Icons'
import './Certifications.css'

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt certifications">
      <div className="section-inner">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Certifications" />
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <Reveal as="div" key={cert.name} className="cert-card card card-hover">
              <span className="cert-icon">
                <AwardIcon width={20} height={20} />
              </span>
              <div>
                <h3>{cert.name}</h3>
                <span className="cert-date">{cert.date}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
