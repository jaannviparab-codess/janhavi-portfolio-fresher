import { profile } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GitHubIcon,
  DownloadIcon,
} from '../components/Icons'
import './Contact.css'

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'Phone',
    value: profile.phoneDisplay,
    href: `tel:+91${profile.phone}`,
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: 'GitHub',
    value: profile.githubDisplay,
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Location',
    value: profile.location,
    href: null,
    Icon: MapPinIcon,
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section section-alt contact">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Connect"
            description="I'm actively looking for entry-level opportunities in Python and backend development. Feel free to reach out."
            align="center"
          />
        </Reveal>

        <div className="contact-grid">
          {contactItems.map((item, index) => {
            const { Icon } = item
            const content = (
              <>
                <span className="contact-icon">
                  <Icon width={20} height={20} />
                </span>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </>
            )

            return (
              <Reveal
                as="div"
                key={item.label}
                className="contact-card card card-hover"
                delay={index * 70}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="contact-card-link"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-card-link">{content}</div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal className="contact-cta" delay={120}>
          <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-primary">
            Download Resume
            <DownloadIcon width={17} height={17} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
