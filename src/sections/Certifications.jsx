import { certifications } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { AwardIcon, CheckIcon, ExternalLinkIcon } from '../components/Icons'
import './Certifications.css'

// Preview image dimensions (page 1 of each certificate PDF, A4 landscape)
const PREVIEW_WIDTH = 1263
const PREVIEW_HEIGHT = 893

export default function Certifications() {
  const listedCertifications = certifications.filter((cert) => !cert.pdf)
  const pdfCertifications = certifications.filter((cert) => cert.pdf)

  return (
    <section id="certifications" className="section section-alt certifications">
      <div className="section-inner">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Certifications" />
        </Reveal>

        <div className="cert-grid">
          {listedCertifications.map((cert) => (
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

        {pdfCertifications.length > 0 && (
          <div className="cert-doc-grid">
            {pdfCertifications.map((cert, index) => (
              <Reveal
                as="article"
                key={cert.pdf}
                className="cert-doc-card card card-hover"
                delay={index * 90}
              >
                {/* Mouse shortcut to the same PDF; the button below is the accessible link. */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-doc-preview"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={cert.preview}
                    alt={`${cert.issuer} ${cert.name} certificate`}
                    width={PREVIEW_WIDTH}
                    height={PREVIEW_HEIGHT}
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <div className="cert-doc-body">
                  <span className="chip cert-doc-issuer">{cert.issuer}</span>
                  <h3 className="cert-doc-title">{cert.name}</h3>

                  <p className="cert-doc-meta">
                    <span>Certificate of Completion · {cert.date}</span>
                    <span>Period: {cert.period}</span>
                    <span>Issued by {cert.issuedBy}</span>
                  </p>

                  <ul className="cert-doc-tasks">
                    {cert.tasks.map((task) => (
                      <li key={task}>
                        <CheckIcon width={14} height={14} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary cert-doc-button"
                    aria-label={`View certificate: ${cert.issuer} ${cert.name} (PDF, opens in a new tab)`}
                  >
                    View Certificate
                    <ExternalLinkIcon width={16} height={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
