import { useState } from 'react';
import { Link } from 'react-router';
import profileImage from 'figma:asset/37bb4b3067e7e5d8067df18ba5aada995d792405.png';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const impactData = [
    { num: '₹575 Cr', label: 'Company Valuation', desc: 'Product-led growth at Sid\'s Farm' },
    { num: '−63%', label: 'Subscription Conv. Time', desc: '15 days → 5.5, nearly 3× faster' },
    { num: '+85%', label: 'Session Engagement', desc: 'Rebuilt around North Star metric' },
    { num: '₹90L', label: 'Annual Cost Savings', desc: 'SCM optimization through geofencing' },
    { num: '2×', label: 'Agent Productivity', desc: 'Salesforce CRM across 4 teams' },
    { num: '500+', label: 'Staff Digitised', desc: 'HRMS · 4 cities · 0 spreadsheets' },
    { num: '₹18.5L', label: 'Autopay Revenue', desc: 'Generated in first 6 weeks' },
    { num: '30L MAU', label: 'From 9L · −65% Cost', desc: 'Scaled users, cut MarTech spend' },
    { num: '67%', label: 'Chatbot Deflection', desc: 'WhatsApp automation via Salesforce' },
  ];

  const testimonials = [
    {
      initials: 'TG',
      name: 'Tom Garden',
      role: 'Owner, CodeParva LLC',
      quote: "Prathik has grown from a UI/UX designer to a very competent and creative Product Manager. His contribution has been impressive and his reliability and team loyalty are amazing. His intense focus on the tasks at hand, along with his vision for where the product should go, have been a large part of the reason for the successful product launch.",
      linkedIn: 'https://www.linkedin.com/in/thomas-garden-27623115/'
    },
    {
      initials: 'DL',
      name: 'Divyadeep Lolla',
      role: 'Ex Chief Growth Officer, Sid\'s Farm',
      quote: "In the world of Product Management where the business is extremely demanding, you need people like Prathik who can simplify complexity and figure out the right set of priorities. He has a remarkable ability to translate abstract and complex ideas into intuitive and visually appealing interfaces.",
      linkedIn: 'https://www.linkedin.com/in/divyadeeplolla/'
    },
    {
      initials: 'AT',
      name: 'Anitha Thoguluva',
      role: 'Engineering Manager, Microsoft · Ex CTO, CodeParva',
      quote: "In my 5+ years working with Prathik at CodeParva, I\'ve been consistently impressed by his dedication to career growth. He\'s a problem-solver with a keen eye for detail, readily proposing solutions rather than just identifying issues. His initial technical background allows him to assess UI/UX designs for feasibility and performance.",
      linkedIn: 'https://www.linkedin.com/in/anithathoguluva'
    }
  ];

  const skills = [
    { category: 'Product', items: ['Strategy', 'Roadmapping', 'PRD', 'OKRs', 'Backlog Mgmt', 'Agile & Scrum'] },
    { category: 'Growth', items: ['Funnel Analysis', 'A/B Testing', 'Retention', 'CleverTap', 'MoEngage'] },
    { category: 'Leadership', items: ['Stakeholder Mgmt', 'Cross-functional', 'Vendor Eval', 'Hiring', 'Process Optimisation'] },
    { category: 'Tools', items: ['Salesforce CRM', 'Figma', 'MS Clarity', 'ClickUp', 'Mojro', 'Bizom'] }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0F0E0B] text-[#F0EDE6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 bg-[#0F0E0B] border-b border-[#C8953A]/15 px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg md:text-xl">Prathik.</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 text-[13px] text-[#A09880]">
            <Link to="/" className="cursor-pointer text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="cursor-pointer text-[#C8953A] transition-colors">Home</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-12 md:pt-16 pb-0 flex flex-col items-center text-center">
        <div className="text-[11px] tracking-[0.16em] uppercase text-[#C8953A] mb-4">
          Product Manager · Bengaluru
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.08] tracking-tight mb-2">
          Strategy. Design. <span className="text-[#C8953A]">Execution.</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-[34px] text-[#6B6455] mb-8 md:mb-9">
          All in one PM.
        </h2>

        {/* Photo Row - Simplified with quote left, photo center, years right */}
        <div className="w-full max-w-[880px] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center mb-10">
          {/* Left - Quote */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="max-w-[240px] text-[13px] text-[#BFBAB0] italic text-left leading-relaxed border-l-2 border-[#C8953A] pl-3.5">
              "Deep brand alignment and user-first thinking — vision into products that feel as sharp as they perform."
            </div>
          </div>

          {/* Center - Photo */}
          <div className="flex flex-col items-center gap-4 order-1 md:order-2">
            <div className="w-[180px] h-[180px] rounded-full border-2 border-[#C8953A] shadow-[0_0_0_10px_rgba(200,149,58,0.08)] bg-[#1A1915] overflow-hidden flex items-center justify-center">
              <img src={profileImage} alt="Prathik Kumar MP" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right - Years */}
          <div className="flex justify-center md:justify-start order-3">
            <div className="text-center md:text-left">
              <div className="text-[36px] text-[#F0EDE6] leading-none mb-1.5">7 Years</div>
              <div className="text-[12px] text-[#C8953A] uppercase tracking-wider">SaaS · D2C · AgriTech</div>
            </div>
          </div>
        </div>

        <div className="text-[13px] text-[#6B6455] italic mb-4.5">
          Building products that move metrics, not just milestones.
        </div>

        <div className="max-w-[500px] text-[15px] text-[#A09880] leading-[1.75] mb-8">
          The rare PM who started in design — so I don't just ship features, I close the loop between vision and what actually reaches the user.
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <Link to="/projects" className="bg-[#C8953A] text-[#0F0E0B] text-[14px] px-7 py-3 rounded-full hover:bg-[#C8953A]/90 transition-colors inline-block">
            See My Work →
          </Link>
          <Link to="/contact" className="border border-[#C8953A]/40 text-[#C8953A] text-[14px] px-7 py-3 rounded-full hover:border-[#C8953A]/60 transition-colors inline-block">
            Let's Talk
          </Link>
        </div>

        <div className="w-full h-14 bg-gradient-to-b from-transparent to-[#0F0E0B]"></div>
      </section>

      {/* Impact Marquee */}
      <section className="border-t border-b border-[#C8953A]/10 py-12 overflow-hidden">
        <div className="flex animate-marquee hover:pause">
          {[...impactData, ...impactData].map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[220px] px-7 py-6 border-r border-[#C8953A]/10 text-center"
            >
              <div className="text-[32px] text-[#C8953A] leading-tight mb-1.5 font-medium">{item.num}</div>
              <div className="text-[10px] text-[#C8953A]/70 uppercase tracking-wide mb-1.5 font-medium">{item.label}</div>
              <div className="text-[11px] text-[#8A8575] leading-snug">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What Drives Me */}
      <section className="bg-[#141310] border-t border-[#C8953A]/10 px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-[720px] mx-auto">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#C8953A] mb-4">About</div>
          <h2 className="text-3xl md:text-4xl text-[#F0EDE6] mb-7 tracking-tight">What Drives Me</h2>
          <p className="text-[15px] text-[#A09880] leading-[1.8] mb-4">
            My path into product management started in UI/UX design — which means I think in systems and experiences at the same time. I don't just write requirements, I can sit with a designer, sketch it out, and ship it sharp.
          </p>
          <p className="text-[15px] text-[#A09880] leading-[1.8] mb-7">
            Over 7 years across SaaS and D2C, I've taken products from idea to market, from messy spreadsheets to scalable platforms. What I care about most is the gap between strategy and what actually reaches the user — and closing it.
          </p>
          <div className="text-[17px] text-[#F0EDE6] italic border-l-[3px] border-[#C8953A] pl-4 mt-7">
            I'm not here to manage features. I'm here to move metrics.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#0F0E0B] border-t border-b border-[#C8953A]/8 px-6 md:px-12 py-9">
        <div className="max-w-[720px] mx-auto flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
              <span className="text-[10px] text-[#C8953A]/70 uppercase tracking-wide md:min-w-[110px] flex-shrink-0 font-medium">
                {skill.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item, i) => (
                  <span key={i} className="border border-[#C8953A]/15 rounded-full px-2.5 py-1 text-[11px] text-[#8A8575]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#141310] border-t border-[#C8953A]/10 px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-[780px] mx-auto">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#C8953A] mb-4">What Leaders Say</div>
          <h2 className="text-3xl md:text-4xl text-[#F0EDE6] mb-10 tracking-tight">Recommendations</h2>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#1A1915] border border-[#C8953A]/15 rounded-2xl p-6 md:p-9 flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Left: Avatar & Info */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2.5 md:w-24 flex-shrink-0">
                  <div className="w-[52px] h-[52px] rounded-full border border-[#C8953A]/30 bg-[#232118] flex items-center justify-center flex-shrink-0">
                    <span className="text-[16px] text-[#C8953A]">{testimonial.initials}</span>
                  </div>
                  <div className="flex-1 md:flex-none text-left md:text-center">
                    <div className="text-[13px] text-[#F0EDE6] leading-tight">{testimonial.name}</div>
                    <div className="text-[11px] text-[#6B6455] leading-relaxed mt-0.5">{testimonial.role}</div>
                    <div className="text-[11px] text-[#C8953A] cursor-pointer mt-1.5" onClick={() => window.open(testimonial.linkedIn, '_blank')}>→ LinkedIn</div>
                  </div>
                </div>

                {/* Divider - hidden on mobile */}
                <div className="hidden md:block w-px bg-[#C8953A]/15 self-stretch flex-shrink-0"></div>

                {/* Right: Quote */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-[40px] text-[#C8953A]/15 leading-none mb-1">"</div>
                  <p className="text-[14px] text-[#A09880] leading-[1.8] italic">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-7 text-[12px] text-[#C8953A] cursor-pointer hover:text-[#C8953A]/80 transition-colors" onClick={() => window.open('https://www.linkedin.com/in/prathikkumarmp', '_blank')}>
            → More recommendations on LinkedIn
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <h2 className="text-2xl md:text-3xl text-[#F0EDE6] leading-tight mb-6">
          Ready to build something that moves the needle?
        </h2>
        <Link to="/contact" className="inline-block bg-[#C8953A] text-[#0F0E0B] text-[14px] px-7 py-3 rounded-full hover:bg-[#C8953A]/90 transition-colors">
          Get in touch →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0906] border-t border-[#C8953A]/10 px-6 md:px-12 py-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 flex-wrap">
          <div className="text-center md:text-left">
            <div className="text-[14px] text-[#F0EDE6]">Prathik Kumar MP</div>
            <div className="text-[12px] text-[#6B6455] mt-0.5">Product Leader</div>
          </div>
          
          <div className="flex gap-5.5 text-[12px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        </div>
        
        <div className="w-full text-center mt-4 text-[11px] text-[#6B6455]">
          Designed and built by Prathik Kumar MP · 2026
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
