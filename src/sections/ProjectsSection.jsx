import { useState } from 'react';
import { ExternalLink, Code2, Terminal, Info } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filterCategories = ['All', 'Featured', 'Web / Frontend', 'DSA & Algorithms'];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return proj.featured;
    if (filter === 'Web / Frontend') {
      return proj.tags.some((t) => ['JavaScript', 'HTML5', 'CSS3', 'React', 'Responsive UI'].includes(t));
    }
    if (filter === 'DSA & Algorithms') {
      return proj.tags.some((t) => ['DSA', 'Python', 'Algorithms', 'SQL'].includes(t));
    }
    return true;
  });

  return (
    <section id="projects" className="section" aria-label="Projects Showcase">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects &amp; Implementations</h2>
          <p className="section-subtitle">
            A showcase of hands-on software applications, frontend interfaces, and algorithmic problem-solving projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-header-actions">
          <div className="projects-filter-pills" role="tablist" aria-label="Filter projects by category">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              {/* Preview header with code snippet */}
              <div className="project-preview">
                <div className="preview-bar">
                  <div className="preview-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>preview.jsx</span>
                </div>
                
                {project.featured && (
                  <span className="project-featured-badge">Featured</span>
                )}

                <pre className="preview-code">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <div className="project-subtitle">{project.subtitle}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={15} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Customization Notice Banner */}
        <div className="project-note-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Info size={18} color="var(--accent-cyan)" />
            <span>
              <strong>Easy Customization:</strong> Project cards are populated dynamically. Add, edit or remove projects anytime in <code>src/data/portfolioData.js</code>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
