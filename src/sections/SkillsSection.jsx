import { Database, Binary, FileCode, Palette, Code2, Terminal } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

// Icon mapper for technical skills
function getSkillIcon(type) {
  switch (type) {
    case 'python':
      return <Terminal size={24} />;
    case 'javascript':
      return <Code2 size={24} />;
    case 'html':
      return <FileCode size={24} />;
    case 'css':
      return <Palette size={24} />;
    case 'sql':
      return <Database size={24} />;
    case 'dsa':
      return <Binary size={24} />;
    default:
      return <Code2 size={24} />;
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-label="Technical Skills Section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Technical Skillset</h2>
          <p className="section-subtitle">
            Solid foundations in programming languages, web standards, database querying, and data structures.
          </p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card glass-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrap" aria-hidden="true">
                  {getSkillIcon(skill.icon)}
                </div>
                <span className="skill-level-badge">{skill.level}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-category">{skill.category}</div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
