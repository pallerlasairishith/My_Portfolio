import { Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="section" aria-label="Experience & Opportunities">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>Career Path</span>
          </div>
          <h2 className="section-title">Experience &amp; Internships</h2>
          <p className="section-subtitle">
            Prepared to contribute technical aptitude, disciplined problem solving, and a quick learning curve to real engineering teams.
          </p>
        </div>

        <div className="experience-container">
          <div className="experience-hero-card glass-card">
            <div className="experience-header-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div className="contact-icon-box" aria-hidden="true">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="experience-headline">{experienceData.status}</h3>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>
                    Actively seeking Internship &amp; Junior Software Roles
                  </p>
                </div>
              </div>

              <span className="edu-badge-status">{experienceData.badge}</span>
            </div>

            <p className="experience-desc">{experienceData.description}</p>

            <div className="experience-interests-title">Core Focus Areas</div>
            <div className="experience-interests-grid">
              {experienceData.interests.map((interest, idx) => (
                <div key={idx} className="interest-chip">
                  <Sparkles size={16} />
                  <span>{interest}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.2rem', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleScrollToContact}
              >
                <span>Discuss an Opportunity</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
