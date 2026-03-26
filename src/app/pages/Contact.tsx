import { useState } from 'react';
import { Link } from 'react-router';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const opportunities = [
    {
      title: 'Senior / Lead PM Roles',
      description: 'Looking for the right product challenge at the right company'
    },
    {
      title: 'Head of Product Opportunities',
      description: 'Open to leading product functions in high-growth SaaS or D2C'
    },
    {
      title: 'Advisory & Consulting',
      description: 'Short-term engagements where product strategy and execution need a clear hand'
    },
    {
      title: 'Mentoring',
      description: 'Product, UX, and career conversations — happy to share what I\'ve learned'
    }
  ];

  const directLinks = [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/prathikkumarmp',
      action: 'Open LinkedIn',
      url: 'https://linkedin.com/in/prathikkumarmp',
      icon: '💼'
    },
    {
      label: 'Email',
      value: 'prathikkumarmp@gmail.com',
      action: 'Send Email',
      url: 'mailto:prathikkumarmp@gmail.com',
      icon: '✉️'
    },
    {
      label: 'Phone',
      value: '+91 96601 85834',
      action: 'Call / WhatsApp',
      url: 'tel:+919660185834',
      icon: '📱'
    },
    {
      label: 'Location',
      value: 'Bengaluru, India',
      action: 'Open to remote',
      url: '#',
      icon: '📍'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#0F0E0B] text-[#F0EDE6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-[#0F0E0B] border-b border-[#C8953A]/15 px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg md:text-xl text-[#F0EDE6]">Prathik.</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 text-[13px] text-[#A09880]">
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#C8953A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 text-[13px] text-[#A09880]">
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl text-[#F0EDE6] leading-tight tracking-tight mb-6">
            Let's Talk
          </h1>
          <p className="text-[17px] text-[#BFBAB0] leading-[1.7]">
            Whether it's the right role, a product problem worth solving, or just a good conversation — I'm easy to reach.
          </p>
        </div>
      </section>

      {/* What I'm Open To */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[13px] text-[#C8953A] uppercase tracking-wide font-medium mb-8">What I'm open to</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {opportunities.map((opp, index) => (
              <div 
                key={index}
                className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-t-[#C8953A] hover:border-t-2 transition-all"
              >
                <h3 className="text-[16px] text-[#F0EDE6] font-medium mb-2">{opp.title}</h3>
                <p className="text-[13px] text-[#A09880] leading-relaxed">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[700px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[13px] text-[#F0EDE6] font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#141310] border border-[#C8953A]/15 rounded-lg px-4 py-3 text-[14px] text-[#F0EDE6] focus:border-[#C8953A] focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[13px] text-[#F0EDE6] font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#141310] border border-[#C8953A]/15 rounded-lg px-4 py-3 text-[14px] text-[#F0EDE6] focus:border-[#C8953A] focus:outline-none transition-colors"
              />
            </div>

            {/* Reason */}
            <div>
              <label htmlFor="reason" className="block text-[13px] text-[#F0EDE6] font-medium mb-2">
                What's this about? *
              </label>
              <select
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-[#141310] border border-[#C8953A]/15 rounded-lg px-4 py-3 text-[14px] text-[#F0EDE6] focus:border-[#C8953A] focus:outline-none transition-colors"
              >
                <option value="">Select one...</option>
                <option value="role">A role opportunity</option>
                <option value="consulting">Consulting or advisory</option>
                <option value="speaking">Speaking or mentoring</option>
                <option value="connect">Just want to connect</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[13px] text-[#F0EDE6] font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Give me a quick context..."
                className="w-full bg-[#141310] border border-[#C8953A]/15 rounded-lg px-4 py-3 text-[14px] text-[#F0EDE6] placeholder:text-[#6B6455] focus:border-[#C8953A] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#C8953A] text-[#0F0E0B] text-[14px] px-8 py-3 rounded-lg hover:bg-[#C8953A]/90 transition-colors font-medium"
              >
                Send it →
              </button>
              <p className="text-[12px] text-[#8A8575] mt-3 text-center">
                I read every message and respond within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Direct Links */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {directLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.label === 'LinkedIn' ? '_blank' : undefined}
                rel={link.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 hover:-translate-y-1 transition-all group flex items-start gap-4"
              >
                <div className="text-3xl">{link.icon}</div>
                <div className="flex-1">
                  <div className="text-[13px] text-[#A09880] mb-1">{link.label}</div>
                  <div className="text-[15px] text-[#F0EDE6] font-medium mb-2">{link.value}</div>
                  <div className="text-[12px] text-[#C8953A] group-hover:text-[#C8953A]/80 transition-colors">
                    → {link.action}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Banner */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#141310] border border-[#C8953A]/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[15px] text-[#F0EDE6] mb-1">Want the full picture before reaching out?</p>
              <p className="text-[11px] text-[#6B6455]">PDF · Updated March 2026</p>
            </div>
            <button className="bg-[#C8953A] text-[#0F0E0B] text-[13px] px-6 py-2.5 rounded-full hover:bg-[#C8953A]/90 transition-colors font-medium whitespace-nowrap">
              ↓ Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-6 md:px-12 pb-20 md:pb-24">
        <div className="max-w-[900px] mx-auto bg-[#141310] border border-[#C8953A]/20 rounded-2xl p-12 md:p-16 text-center">
          <p className="text-2xl md:text-3xl text-[#F0EDE6] leading-relaxed italic mb-6">
            "Every metric across this portfolio is tied to a specific product decision — not incidental improvement, but designed outcomes built from an operator's understanding of the business."
          </p>
          <p className="text-[13px] text-[#A09880]">
            — Prathik · Head of Product · Sid's Farm
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0E0B] border-t border-[#F5F3ED]/10 px-6 md:px-12 py-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 flex-wrap">
          <div className="text-center md:text-left">
            <div className="text-[14px] text-[#F0EDE6]">Prathik Kumar MP</div>
            <div className="text-[12px] text-[#6B6455] mt-0.5">Product Leader</div>
          </div>
          
          <div className="flex gap-5.5 text-[12px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        </div>
        
        <div className="w-full text-center mt-4 text-[11px] text-[#6B6455]">
          Designed and built by Prathik Kumar MP · 2026
        </div>
      </footer>
    </div>
  );
}