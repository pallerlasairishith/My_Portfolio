import { MapPin, User, Code, Compass, BookOpen, Layers, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const pillars = [
    { title: 'Continuous Learning', icon: BookOpen },
    { title: 'Problem Solving & DSA', icon: Compass },
    { title: 'Building Web Projects', icon: Code },
    { title: 'Responsive Interfaces', icon: Layers },
  ];

  return (
    <section id="about" className="section" aria-label="About Me Section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">Driven by Curiosity &amp; Code</h2>
          <p className="section-subtitle">
            A software and frontend developer dedicated to foundational computer science, modern web engineering, and continuous improvement.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Professional Story */}
          <div className="about-text-col">
            <h3 className="about-lead">
              Transforming concepts into responsive, functional web applications.
            </h3>
            
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-pillars-grid">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="pillar-item glass-card">
                    <IconComponent size={20} className="pillar-icon" />
                    <span className="pillar-text">{pillar.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Glassmorphic Profile Card */}
          <div className="about-card-col">
            <div className="profile-card glass-card">
              <div>
                <div className="profile-card-header">
                  <div className="profile-avatar-box">
                    <img
                      src={profileImg}
                      alt={personalInfo.fullName}
                      className="profile-avatar-img"
                    />
                  </div>
                  <div className="profile-header-info">
                    <h3>{personalInfo.fullName}</h3>
                    <span className="profile-role-tag">{personalInfo.role}</span>
                  </div>
                </div>

                <div className="profile-meta-list">
                  <div className="profile-meta-item">
                    <User size={18} className="profile-meta-icon" />
                    <div>
                      <div className="profile-meta-label">Identity</div>
                      <div className="profile-meta-value">B.Tech Student &amp; Developer</div>
                    </div>
                  </div>

                  <div className="profile-meta-item">
                    <MapPin size={18} className="profile-meta-icon" />
                    <div>
                      <div className="profile-meta-label">Location (Click to view map)</div>
                      <a
                        href={personalInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable-location"
                        title="Open Google Maps location in new tab"
                      >
                        <span>{personalInfo.location}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="profile-meta-item">
                    <Code size={18} className="profile-meta-icon" />
                    <div>
                      <div className="profile-meta-label">Primary Stack</div>
                      <div className="profile-meta-value">Python, JavaScript, HTML, CSS, SQL, DSA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-status-badge">
                <span className="pulse-indicator">
                  <span className="ping"></span>
                  <span className="dot"></span>
                </span>
                <span>Active &amp; Open to Software Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
