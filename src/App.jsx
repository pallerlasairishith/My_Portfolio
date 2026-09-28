import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Background visual atmosphere */}
      <div className="ambient-grid" aria-hidden="true"></div>
      <div className="ambient-glow glow-1" aria-hidden="true"></div>
      <div className="ambient-glow glow-2" aria-hidden="true"></div>
      <div className="ambient-glow glow-3" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
