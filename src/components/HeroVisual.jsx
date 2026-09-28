import { useState } from 'react';
import { User, Terminal, Sparkles } from 'lucide-react';
import CodeTerminal from './CodeTerminal';
import profileImg from '../assets/profile.jpg';
import { personalInfo } from '../data/portfolioData';

export default function HeroVisual() {
  const [activeView, setActiveView] = useState('photo');

  return (
    <div className="hero-visual-wrapper">
      {/* View Switcher Tabs */}
      <div className="hero-view-tabs" role="tablist" aria-label="Hero visual view selection">
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'photo'}
          className={`hero-tab-btn ${activeView === 'photo' ? 'active' : ''}`}
          onClick={() => setActiveView('photo')}
        >
          <User size={13} />
          <span>Profile Photo</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'terminal'}
          className={`hero-tab-btn ${activeView === 'terminal' ? 'active' : ''}`}
          onClick={() => setActiveView('terminal')}
        >
          <Terminal size={13} />
          <span>Code Terminal</span>
        </button>
      </div>

      {/* Main Visual Display */}
      {activeView === 'photo' ? (
        <div className="hero-photo-card glass-card" aria-label={`Main portrait of ${personalInfo.fullName}`}>
          <div className="hero-photo-frame">
            <img
              src={profileImg}
              alt={personalInfo.fullName}
              className="hero-main-photo"
              loading="eager"
            />

            <div className="hero-photo-overlay">
              <span className="hero-photo-top-badge">
                <Sparkles size={12} color="var(--accent-cyan)" />
                <span>B.Tech Developer</span>
              </span>

              <div className="hero-photo-bottom-info">
                <div
                  className="hero-status-pill"
                  style={{
                    marginBottom: '0.4rem',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    alignSelf: 'flex-start',
                  }}
                >
                  <span className="pulse-indicator" aria-hidden="true">
                    <span className="ping"></span>
                    <span className="dot"></span>
                  </span>
                  <span>{personalInfo.availability}</span>
                </div>

                <div className="hero-photo-name">{personalInfo.fullName}</div>
                <div className="hero-photo-role">{personalInfo.role}</div>

                <div className="hero-photo-tech-row">
                  <span className="hero-photo-tech-chip">Python</span>
                  <span className="hero-photo-tech-chip">JavaScript</span>
                  <span className="hero-photo-tech-chip">HTML/CSS</span>
                  <span className="hero-photo-tech-chip">SQL</span>
                  <span className="hero-photo-tech-chip">DSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CodeTerminal />
      )}
    </div>
  );
}
