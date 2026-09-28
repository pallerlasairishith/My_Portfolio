import { GraduationCap, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section" aria-label="Education Background">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering foundation supporting practical software development and continuous algorithmic learning.
          </p>
        </div>

        <div className="education-container">
          {educationData.map((item, index) => (
            <div key={index} className="education-card glass-card">
              <div className="education-top">
                <div className="edu-degree-group">
                  <h3>{item.degree}</h3>
                  <div className="edu-field">{item.field}</div>
                </div>

                <div className="edu-badge-status">
                  <span>{item.status}</span>
                </div>
              </div>

              <div className="edu-meta-grid">
                <div className="edu-meta-box">
                  <Building2 size={18} />
                  <div>
                    <div className="edu-meta-label">Institution</div>
                    <div className="edu-meta-val">{item.institution}</div>
                  </div>
                </div>

                <div className="edu-meta-box">
                  <Calendar size={18} />
                  <div>
                    <div className="edu-meta-label">Status / Timeline</div>
                    <div className="edu-meta-val">{item.period}</div>
                  </div>
                </div>

                <div className="edu-meta-box">
                  <MapPin size={18} />
                  <div>
                    <div className="edu-meta-label">Region</div>
                    <div className="edu-meta-val">{item.location}</div>
                  </div>
                </div>
              </div>

              <div className="edu-highlights">
                <div className="edu-highlights-title">
                  <GraduationCap size={18} color="var(--accent-cyan)" />
                  <span>Key Academic Focus &amp; Coursework</span>
                </div>

                <ul className="edu-highlights-list">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="edu-highlight-item">
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
