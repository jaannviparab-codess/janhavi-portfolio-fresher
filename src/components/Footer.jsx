import { profile } from '../data/portfolio'
import { GitHubIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{profile.name}</span>
          <span className="footer-role">{profile.role}</span>
        </div>

        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="Open GitHub profile in a new tab"
          >
            <GitHubIcon width={19} height={19} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
