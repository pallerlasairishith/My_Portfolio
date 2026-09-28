import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Opportunities', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar" role="banner">
      <div className="container nav-container">
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          aria-label={`${personalInfo.displayName} Portfolio Home`}
        >
          <div className="brand-icon-box" aria-hidden="true">
            &lt;/&gt;
          </div>
          <span className="brand-name">
            {personalInfo.displayName}
            <span className="brand-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-center" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Toggles */}
        <div className="nav-right">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-only nav-social-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-only nav-social-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <ThemeToggle />

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav-socials">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
