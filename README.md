# Pallerla Sairishith - Developer Portfolio

A modern, high-performance, responsive personal portfolio website crafted for **PALLERLA SAIRISHITH** (Software / Frontend Developer).

## 🚀 Features

- **Dark Premium Aesthetic**: Default dark theme with subtle glassmorphism (`backdrop-filter`), elegant gradient ambient lighting, and high-end typography (`Inter` + `JetBrains Mono`).
- **Developer-Themed Hero**: Animated code snippet terminal (`developer.py`) with line-by-line syntax highlighting, interactive copy action, and output console.
- **Centralized Data Configuration**: All personal information, skills, projects, and education are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js) for quick and effortless editing.
- **Responsive Layout**: Seamlessly adapts across Mobile (with custom drawer menu), Tablet, and Desktop screens.
- **Direct & Actionable Contact**: Direct buttons for email (`mailto`), phone call (`tel`), LinkedIn, GitHub, and a clickable Google Maps location redirecting to Jagtial, Telangana.
- **Interactive Contact Form**: Client-side validated form with immediate feedback and success confirmation states.
- **Accessibility & Performance**: Built with semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard focus-visible outlines, and respect for `prefers-reduced-motion`.

---

## 🛠️ Project Structure

```text
Sai_Rishith_Portfolio/
├── public/
│   ├── favicon.svg             # Custom SR monogram developer favicon
│   └── preview-banner.svg      # Open Graph / Social preview card
├── src/
│   ├── assets/                 # Static visual assets
│   ├── components/
│   │   ├── CodeTerminal.jsx    # Hero developer code terminal visual
│   │   ├── Footer.jsx          # Site footer with social links & copyright
│   │   ├── Icons.jsx           # SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx          # Sticky header with responsive navigation
│   │   └── ThemeToggle.jsx     # Dark / Light mode toggle
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio data & projects
│   ├── sections/
│   │   ├── AboutSection.jsx    # Professional summary & profile card
│   │   ├── ContactSection.jsx  # Direct contact cards & message form
│   │   ├── EducationSection.jsx# Degree & coursework timeline
│   │   ├── ExperienceSection.jsx# Internship readiness & focus areas
│   │   ├── HeroSection.jsx     # Hero headline, bio, CTAs & socials
│   │   └── SkillsSection.jsx   # Technical skill cards
│   ├── App.css                 # Glassmorphic UI styling & responsive rules
│   ├── App.jsx                 # Application layout root
│   ├── index.css               # Design tokens, variables & resets
│   └── main.jsx                # React application entry point
├── index.html                  # SEO metadata, Open Graph & fonts
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customization Guide

To modify your personal info, projects, or education, edit [`src/data/portfolioData.js`](src/data/portfolioData.js):

- **Update Projects**: Add your own GitHub repositories, demo links, and descriptions in `projectsData`.
- **Update Education**: Fill in your college/university name and details in `educationData`.
- **Update Skills or Contact Info**: Modify `technicalSkills` or `personalInfo`.

---

## 📜 Copyright
© 2026 PALLERLA SAIRISHITH. All rights reserved.
