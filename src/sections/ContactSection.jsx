import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="section" aria-label="Contact Section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project to collaborate on, or just want to discuss software development, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="contact-info-card glass-card">
              <div className="contact-card-left">
                <div className="contact-icon-box" aria-hidden="true">
                  <Mail size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  className="btn-icon-only"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                  aria-label="Send direct email"
                >
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            {/* Mobile Card */}
            <div className="contact-info-card glass-card">
              <div className="contact-card-left">
                <div className="contact-icon-box" aria-hidden="true">
                  <Phone size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Mobile</h4>
                  <p>+91 {personalInfo.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  className="btn-icon-only"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="btn btn-secondary btn-sm"
                  aria-label="Call phone number"
                >
                  <span>Call Me</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card glass-card">
              <div className="contact-card-left">
                <div className="contact-icon-box" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              <a
                href={personalInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Open location on Google Maps"
              >
                <span>View Location</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Professional Profiles Buttons */}
            <div className="contact-social-row">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Open LinkedIn profile"
              >
                <LinkedinIcon size={18} color="#0a66c2" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Open GitHub profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Frontend Contact Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-desc">
              Fill out this form to connect. (Frontend demo with immediate confirmation).
            </p>

            {isSubmitted ? (
              <div className="form-success-banner" role="status">
                <CheckCircle size={44} color="#34d399" />
                <h4>Thank you! Message Received</h4>
                <p>
                  Your message has been recorded in the frontend session. You can also reach out directly via email at{' '}
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>
                    {personalInfo.email}
                  </a>.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    <span>Your Name</span>
                    {formErrors.name && <span className="form-error">{formErrors.name}</span>}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-input"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    <span>Your Email</span>
                    {formErrors.email && <span className="form-error">{formErrors.email}</span>}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-input"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    <span>Subject (Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    <span>Message</span>
                    {formErrors.message && <span className="form-error">{formErrors.message}</span>}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="form-textarea"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
