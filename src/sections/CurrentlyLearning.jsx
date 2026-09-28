import { currentlyLearning } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { BookIcon } from '../components/Icons'
import './CurrentlyLearning.css'

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="section currently-learning">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="Currently Learning"
            title="Always Building New Skills"
            description="Areas I'm actively studying right now — learning in progress, not claimed expertise."
          />
        </Reveal>

        <div className="learning-grid">
          {currentlyLearning.map((item, index) => (
            <Reveal
              as="div"
              key={item.name}
              className="learning-card card card-hover"
              delay={index * 80}
            >
              <div className="learning-card-head">
                <span className="learning-icon">
                  <BookIcon width={18} height={18} />
                </span>
                <span className="chip chip-accent">In Progress</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
