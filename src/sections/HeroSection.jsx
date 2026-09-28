import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import HeroVisual from '../components/HeroVisual';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section" aria-label="Introduction Hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-indicator" aria-hidden="true">
              <span className="ping"></span>
              <span className="dot"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="hero-name">
            {personalInfo.fullName}
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role">{personalInfo.role}</span>
          </div>

          <p className="hero-bio">
            {personalInfo.shortBio}
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleScrollTo('#projects')}
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleScrollTo('#contact')}
            >
              <span>Contact Me</span>
              <Mail size={18} />
            </button>
          </div>

          <div className="hero-socials">
            <span className="hero-social-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon-only"
                aria-label="Email Me Directly"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
