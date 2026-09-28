import { skillGroups } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  SparklesIcon,
  WrenchIcon,
} from '../components/Icons'
import './Skills.css'

const iconMap = {
  code: CodeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  sparkles: SparklesIcon,
  wrench: WrenchIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Skills"
            title="What I Work With"
            description="Skills I've built through coursework and hands-on project work."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon] ?? CodeIcon
            return (
              <Reveal
                as="div"
                key={group.category}
                className="skill-card card card-hover"
                delay={index * 70}
              >
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="skill-category">{group.category}</h3>
                </div>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
