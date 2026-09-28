import { profile } from '../data/portfolio'
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  ChevronDownIcon,
} from '../components/Icons'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="section-inner hero-inner">
        <div className="hero-copy fade-in">
          <span className="eyebrow">Portfolio · Open to Opportunities</span>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            Python Developer <span className="hero-dot">·</span> AI &amp; Automation
            Enthusiast
          </p>
          <p className="hero-subrole">{profile.subrole} &middot; {profile.location}</p>
          <p className="hero-support">{profile.heroSupport}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowUpRightIcon width={17} height={17} />
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="btn btn-secondary"
            >
              Download Resume
              <DownloadIcon width={17} height={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GitHubIcon width={17} height={17} />
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in" aria-hidden="true">
          <div className="code-card float">
            <div className="code-card-head">
              <span className="dot dot-red" />
              <span className="dot dot-amber" />
              <span className="dot dot-green" />
              <span className="code-card-title">developer.py</span>
            </div>
            <pre className="code-card-body">
              <code>
                <span className="tok-kw">class</span>{' '}
                <span className="tok-class">Developer</span>:{'\n'}
                {'    '}
                <span className="tok-kw">def</span>{' '}
                <span className="tok-fn">__init__</span>(<span className="tok-self">self</span>):{'\n'}
                {'        '}
                <span className="tok-self">self</span>.name ={' '}
                <span className="tok-str">&quot;Janhavi Parab&quot;</span>
                {'\n'}
                {'        '}
                <span className="tok-self">self</span>.role ={' '}
                <span className="tok-str">&quot;Python Developer&quot;</span>
                {'\n'}
                {'        '}
                <span className="tok-self">self</span>.stack = [
                <span className="tok-str">&quot;Django&quot;</span>,{' '}
                <span className="tok-str">&quot;Flask&quot;</span>,{' '}
                <span className="tok-str">&quot;APIs&quot;</span>]{'\n'}
                {'        '}
                <span className="tok-self">self</span>.learning = [
                <span className="tok-str">&quot;AI&quot;</span>,{' '}
                <span className="tok-str">&quot;ML&quot;</span>,{' '}
                <span className="tok-str">&quot;Data Science&quot;</span>]{'\n'}
                {'\n'}
                {'    '}
                <span className="tok-kw">def</span>{' '}
                <span className="tok-fn">ship</span>(<span className="tok-self">self</span>):{'\n'}
                {'        '}
                <span className="tok-kw">return</span>{' '}
                <span className="tok-str">&quot;practical, working software&quot;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue bounce" aria-label="Scroll to About section">
        <ChevronDownIcon width={22} height={22} />
      </a>
    </section>
  )
}
