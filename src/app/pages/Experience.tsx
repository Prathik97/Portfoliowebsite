import { useState } from 'react';
import { Link } from 'react-router';

export default function Experience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillCategories = [
    { 
      category: 'PM', 
      skills: ['Product Strategy', 'Product Roadmapping', 'PLM', 'PRD Development', 'Agile & Scrum', 'Backlog Management'] 
    },
    { 
      category: 'Growth & Analytics', 
      skills: ['Funnel Analysis', 'A/B Testing', 'CRO', 'Customer Journey Mapping', 'Retention & Engagement Strategy'] 
    },
    { 
      category: 'Leadership & Collaboration', 
      skills: ['Stakeholder Management', 'Cross-functional Leadership', 'Vendor Evaluation', 'Hiring & Team Building', 'Process Optimisation'] 
    },
    { 
      category: 'Design & UX', 
      skills: ['Brand-led Design Thinking', 'Design Systems', 'Prototyping', 'Wireframing', 'Information Architecture'] 
    },
    { 
      category: 'Platforms & Tools', 
      skills: ['Salesforce CRM', 'Microsoft Clarity', 'CleverTap', 'MoEngage', 'ClickUp', 'Figma', 'Mojro', 'Bizom'] 
    }
  ];

  const timeline = [
    {
      current: true,
      designation: 'Associate Vice President - Product',
      company: 'Sid\'s Farm Pvt. Ltd.',
      period: 'Aug 2024 – Present',
      location: 'Hyderabad',
      team: 'Team of 10  ·  ~44% YoY Growth',
      overview: 'Owned product strategy, roadmap, and OKR-driven execution across customer, marketing, and operational platforms. Contributing to company valuation growth from ₹275 Cr to ₹575 Cr through product-led growth across every customer touchpoint.',
      achievements: [
        { metric: '+85%', text: 'Session time — rebuilt app around a North Star engagement metric' },
        { metric: '−63%', text: 'Days to subscribe — simplified subscription onboarding end-to-end' },
        { metric: '+70%', text: 'Same-day order conversion — revamped onboarding and retargeting' },
        { metric: '+120%', text: 'Onboarding completion — address capture mandatory, friction removed' },
        { metric: '+10%', text: 'Total order items - +12.5% subscription purchases' },
        { metric: '1,000+', text: 'Autopay customers in 6 weeks' },
        { metric: '2×', text: 'Agent productivity - Salesforce CRM across 4 teams' },
        { metric: '−65% / ₹20L', text: 'Marketing automation cost — MoEngage → CleverTap, MAU 9L → 30L' },
        { metric: '−63%', text: 'Telephony cost — 360CTI → Tata Tele (₹9L → ₹3.36L)' }
      ],
      projects: ['D2C Customer App', 'Salesforce CRM', 'Supply Chain & LMD', 'MarTech Migration', 'Farmer Mgmt System', 'HRMS', 'Website Revamp'],
      tags: ['Product Strategy', 'OKRs', 'D2C Subscriptions', 'Salesforce', 'CleverTap', 'Mobile', 'AgriTech', 'HRMS'],
      keyMetric: { value: '₹575 Cr', label: 'Company Valuation' }
    },
    {
      current: false,
      designation: 'Product Manager',
      company: 'CodeParva Technologies Pvt. Ltd.',
      period: 'Oct 2021 – Jun 2024',
      location: 'Bengaluru',
      team: 'Promoted internally',
      overview: 'Part of the core product team building a B2B SaaS platform that scaled to ₹25 Cr annual revenue before a US acquisition. Delivered 15+ high-impact features and reporting solutions used by businesses serving 10,000+ end customers.',
      achievements: [
        { metric: '+33%', text: 'Product delivery speed — introduced Agile practices and sprint planning' },
        { metric: '−14%', text: 'Customer support issues — data-driven UX redesign from user behaviour analysis' },
        { metric: '5', text: 'Third-party platforms integrated — unified digital ecosystem for stakeholders' },
        { metric: '15+', text: 'High-impact features delivered across the platform lifecycle' },
        { metric: '10,000+', text: 'End customers served through platform capabilities' },
        { metric: '', text: 'Collaborated with engineering, design, and leadership to deliver scalable platform capabilities' }
      ],
      projects: [],
      tags: ['B2B SaaS', 'Agile', 'User Research', 'Vendor Integration', 'Roadmapping', 'PRD', 'Stakeholder Mgmt'],
      keyMetric: { value: '₹25 Cr', label: 'SaaS ARR at US Exit' }
    },
    {
      current: false,
      designation: 'UX/UI Designer',
      company: 'CodeParva Technologies Pvt. Ltd.',
      period: 'Jun 2019 – Sep 2021',
      location: 'Bengaluru',
      team: 'Promoted internally',
      overview: 'Where the product instinct was built. Designing scalable B2B and B2B2C platforms alongside product and engineering gave me a lens most PMs don\'t have - I\'ve been on both sides of the handoff.',
      achievements: [
        { metric: '', text: 'Built a comprehensive design system across the B2B SaaS platform and B2B2C websites' },
        { metric: '', text: 'Led a team of 3 designers - hiring standards, design processes, quality benchmarks' },
        { metric: '', text: 'Designed MVP features and prototypes that directly shaped product direction in early build phases' }
      ],
      projects: [],
      tags: ['Design Systems', 'B2B2C', 'Figma', 'Prototyping', 'Team Lead', 'UX Research'],
      keyMetric: { value: '3×', label: 'Design Team Led' }
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering — Computer Science',
      institution: 'Nitte Meenakshi Institute of Technology · Bengaluru',
      period: 'Aug 2015 – May 2019',
      description: 'A CS foundation that shaped a technically literate approach to product - I read code, understand system constraints, and don\'t need an engineer to translate.'
    },
    {
      degree: '11th & 12th',
      institution: 'Rao IIT Academy · Kota, Rajasthan',
      period: '2013 – 2015',
      description: 'Where discipline and structured problem-solving were built.'
    }
  ];

  const certifications = [
    {
      org: 'Scrum Alliance',
      title: 'CSPO - Certified Scrum Product Owner',
      description: 'Framework fluency that translates directly to how I run sprints, write acceptance criteria, and manage backlogs.'
    },
    {
      org: 'ISB · India-Emeritus',
      title: 'Digital Marketing and Analytics',
      description: 'Built the analytical foundation behind every funnel optimisation and CRO initiative I\'ve led.'
    },
    {
      org: 'Interaction Design Foundation',
      title: 'Mobile UX & Accessibility Design',
      description: 'Formal grounding in mobile-first design - applied directly in the D2C app rebuild.'
    },
    {
      org: 'Master Yourself Academy',
      title: 'NLP Foundation',
      description: 'Communication and influence at the stakeholder level - the soft skill that makes hard decisions land.'
    },
    {
      org: 'St Joseph\'s Institute of Management',
      title: 'DEI Implementation Workshop',
      description: 'Intentional - because how you build teams matters as much as what you build.'
    }
  ];

  const navigationNudges = [
    { label: 'See the work behind the roles', destination: 'Projects', path: '/projects' },
    { label: 'The person behind the PM', destination: 'Outside the Brief', path: '/outside-the-brief' },
    { label: 'Let\'s talk', destination: 'Contact', path: '/contact' }
  ];

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
            <Link to="/experience" className="cursor-pointer text-[#C8953A] transition-colors">Experience</Link>
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

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 md:pt-20 pb-12 md:pb-16 text-center">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl text-[#F0EDE6] leading-tight tracking-tight mb-6">
            Experience
          </h1>
          <p className="text-[17px] text-[#BFBAB0] leading-[1.7]">
            7 years. Three roles. One consistent thread — I close the gap between strategy and what actually ships.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto space-y-5">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
              <span className="text-[11px] text-[#C8953A] uppercase tracking-wide md:min-w-[180px] flex-shrink-0 font-medium">
                {category.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 border border-[#C8953A]/15 rounded-full text-[12px] text-[#A09880] hover:border-[#C8953A]/30 hover:bg-[#141310] hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-[#C8953A]/20"></div>

            <div className="space-y-12">
              {timeline.map((role, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-6 top-2 w-3 h-3 rounded-full border-2 -translate-x-[5px] ${
                    role.current 
                      ? 'bg-[#C8953A] border-[#C8953A]' 
                      : 'bg-[#0F0E0B] border-[#C8953A]/30'
                  }`}></div>

                  {/* Role Card */}
                  <div className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 md:p-8 hover:border-[#C8953A]/30 hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl text-[#F0EDE6] font-medium leading-tight mb-2">
                          {role.designation}
                        </h3>
                        <p className="text-[16px] text-[#C8953A] font-medium mb-1">{role.company}</p>
                        <p className="text-[13px] text-[#A09880]">{role.team}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-[13px] text-[#A09880] font-medium">{role.period}</p>
                        <p className="text-[12px] text-[#6B6455]">{role.location}</p>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#BFBAB0] leading-[1.75] mb-6">
                      {role.overview}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-[11px] text-[#C8953A] uppercase tracking-wide font-medium mb-3">
                        Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-[14px] leading-relaxed">
                            {achievement.metric && (
                              <span className="text-[#C8953A] font-medium flex-shrink-0">
                                {achievement.metric}:
                              </span>
                            )}
                            <span className="text-[#A09880]">{achievement.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    {role.projects.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-[11px] text-[#C8953A] uppercase tracking-wide font-medium mb-3">
                          Projects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.projects.map((project, i) => (
                            <Link
                              key={i}
                              to="/projects"
                              className="text-[12px] text-[#C8953A] hover:text-[#C8953A]/70 transition-colors flex items-center gap-1"
                            >
                              <span>→</span>
                              <span>{project}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-1 bg-[#0F0E0B] border border-[#C8953A]/15 rounded-md text-[11px] text-[#8A8575]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metric */}
                    <div className="flex justify-end">
                      <div className="bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-lg px-4 py-3 text-right">
                        <div className="text-2xl text-[#C8953A] leading-tight font-medium">
                          {role.keyMetric.value}
                        </div>
                        <div className="text-[11px] text-[#A09880] uppercase tracking-wide mt-1">
                          {role.keyMetric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl text-[#F0EDE6] mb-10 tracking-tight">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 transition-all">
                <h3 className="text-[17px] text-[#F0EDE6] font-medium leading-tight mb-2">
                  {edu.degree}
                </h3>
                {edu.institution && (
                  <p className="text-[13px] text-[#A09880] mb-2">{edu.institution}</p>
                )}
                <p className="text-[12px] text-[#6B6455] mb-4">{edu.period}</p>
                <p className="text-[14px] text-[#BFBAB0] leading-[1.7] italic">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-3xl text-[#F0EDE6] tracking-tight">Certifications & Learning</h2>
            <a 
              href="https://www.linkedin.com/in/prathikkumarmp/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#C8953A] hover:text-[#C8953A]/80 transition-colors cursor-pointer flex items-center gap-1"
            >
              View on LinkedIn <span>→</span>
            </a>
          </div>
          <p className="text-[15px] text-[#BFBAB0] mb-10 italic">
            I treat learning the same way I treat product iteration — deliberately, with a specific gap in mind.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/30 hover:shadow-md transition-all">
                <p className="text-[10px] text-[#C8953A] uppercase tracking-wide font-medium mb-3">
                  {cert.org}
                </p>
                <h3 className="text-[15px] text-[#F0EDE6] font-medium leading-tight mb-3">
                  {cert.title}
                </h3>
                <p className="text-[13px] text-[#A09880] leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
  <div className="max-w-[1000px] mx-auto">
    <div className="bg-[#141310] border border-[#C8953A]/20 rounded-2xl p-10 md:p-12 text-center">
      <h2 className="text-3xl text-[#F0EDE6] mb-4 tracking-tight">
        Want the full picture?
      </h2>
      <p className="text-[15px] text-[#BFBAB0] mb-8 max-w-[600px] mx-auto">
        My CV covers every role, every metric, and the thinking behind each decision — in one document.
      </p>
      <a
        href="https://drive.google.com/file/d/1l0rlVVlFJRcXl7izlQdtaE2ze9hY5QmN/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#C8953A] text-[#0F0E0B] text-[14px] px-8 py-3 rounded-full hover:bg-[#C8953A]/90 transition-colors font-medium mb-3 inline-block"
      >
        &#8595; Download CV
      </a>
      <p className="text-[11px] text-[#6B6455]">PDF · Last updated March 2026</p>
    </div>
  </div>
</section>

      {/* Navigation Nudges */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {navigationNudges.map((nudge, index) => (
              <Link
                key={index}
                to={nudge.path}
                className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6 hover:border-[#C8953A]/35 hover:shadow-md transition-all group"
              >
                <p className="text-[13px] text-[#A09880] mb-3 leading-relaxed">
                  {nudge.label}
                </p>
                <div className="flex items-center gap-2 text-[#C8953A] group-hover:gap-3 transition-all">
                  <span className="text-[15px] font-medium">{nudge.destination}</span>
                  <span className="text-[14px]">→</span>
                </div>
              </Link>
            ))}
          </div>
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
            <Link to="/experience" className="cursor-pointer text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        </div>
        
        <div className="w-full text-center mt-4 text-[11px] text-[#6B6455]">
          Designed and built by Prathik Kumar MP · 2026
        </div>
      </footer>
    </div>
  );
}
