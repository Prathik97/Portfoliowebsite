import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const principles = [
    { 
      label: 'Problem-first, always', 
      description: 'I map the operational reality before writing a single requirement.',
      icon: '🎯'
    },
    { 
      label: 'Systems, not screens', 
      description: 'The operating model comes before the UI.',
      icon: '⚙️'
    },
    { 
      label: 'Phased & measurable', 
      description: 'Every release ships with UAC and post-launch control metrics.',
      icon: '📊'
    },
    { 
      label: 'Strategy to execution', 
      description: 'My design background means I close the handoff gap myself.',
      icon: '🎨'
    },
    { 
      label: 'Governance built in', 
      description: 'Ownership models and escalation logic ship with the product.',
      icon: '🛡️'
    },
    { 
      label: 'End-to-end accountability', 
      description: 'Vendor selection to post-launch monitoring — I own the full arc.',
      icon: '🔄'
    }
  ];

  const filters = ['All', 'D2C', 'SCM & Inventory', 'MarTech', 'CRM', 'AgriTech', 'HRMS', 'Retail', 'Real Estate', 'Finance'];

  const projects = [
    {
      id: 'customer-app',
      status: 'Delivered',
      scope: 'Company-Level Program',
      domain: 'D2C',
      title: 'D2C Customer App — 0→1 to Growth Platform',
      problem: 'The app couldn\'t support subscriptions, campaigns, or growth without an engineering ticket for every change.',
      action: 'Rebuilt end-to-end — new IA, design system, subscription lifecycle, autopay, CMS layer, retargeting journeys.',
      tags: ['D2C Mobile', 'Subscriptions', 'Autopay', 'CleverTap', 'Clarity'],
      outcome: '−63% Days to Subscribe',
      outcomeDetail: '₹18.5L Autopay Revenue in 6 Weeks'
    },
    {
      id: 'salesforce-crm',
      status: 'Delivered',
      scope: '3 Phases',
      domain: 'CRM',
      title: 'Salesforce CRM — One Platform. Every Customer Conversation.',
      problem: '4 teams in silos. No unified customer view. No chatbot. Duplicate cases across every channel.',
      action: '3-phase Salesforce rollout: core CRM, chatbot automation, full IVR migration to Tata Tele.',
      tags: ['Salesforce', 'WhatsApp', 'Tata Tele IVR', 'Chatbot', 'Case Routing'],
      outcome: '2× Agent Productivity',
      outcomeDetail: '−60% ART · −39% FRT · 67% Chatbot Deflection'
    },
    {
      id: 'supply-chain',
      status: 'Phase 1 Delivered',
      scope: 'In Development',
      domain: 'SCM & Inventory',
      title: 'Supply Chain Execution & Last Mile Delivery',
      problem: 'Route overlap and excess km from customers assigned to wrong dark stores — ₹90L in avoidable cost.',
      action: 'Geofencing enforced clean dark-store boundaries. Building in-house LMD platform to replace Mojro entirely.',
      tags: ['Geofencing', 'Raasta AI', 'Last Mile', 'Route Optimisation'],
      outcome: '₹90L Cost Saved',
      outcomeDetail: '116 Routes Cut · 40% LMD Cost Reduction Targeted'
    },
    {
      id: 'farmer-management',
      status: 'Phase 1 Delivered',
      scope: '',
      domain: 'AgriTech',
      title: 'Farmer Management System — Zero-to-One Platform',
      problem: 'No farmer registry. Paper-based field ops. Cattle health records didn\'t exist. Zero integration with milk settlement.',
      action: 'Built the full procurement hierarchy digitally — farmer onboarding, cattle health, paravet workflows, Nano Dairy integration.',
      tags: ['AgriTech', 'RBAC Design', 'Offline-First', 'Cattle Health', 'Procurement Ops'],
      outcome: '10+ Roles Unified',
      outcomeDetail: '3 System Layers · Offline-First Field Operations'
    },
    {
      id: 'hrms',
      status: 'Delivered',
      scope: 'Multi-City',
      domain: 'HRMS',
      title: 'Enterprise Workforce & Payroll Platform',
      problem: '500+ part-time staff across 4 cities managed entirely through spreadsheets. Payroll leaking. Assets not tracked.',
      action: 'ERPNext platform: onboarding, biometric attendance, configurable incentive engine, asset lifecycle, worker self-service app.',
      tags: ['ERPNext', 'Payroll Engine', 'Biometric', '4 Cities', 'Incentive Rule Engine'],
      outcome: '500+ Staff Digitised',
      outcomeDetail: '4 Cities · 0 Spreadsheets'
    },
    {
      id: 'website-revamp',
      status: 'Delivered',
      scope: 'Platform Migration',
      domain: 'D2C',
      title: 'Website Revamp — WordPress to Shopify',
      problem: 'Every content update needed a developer. Plugin conflicts caused outages. 3 business teams blocked daily.',
      action: 'Two parallel phases: platform migration to remove risk, then full UX redesign and design system on stable foundation.',
      tags: ['Shopify', 'Design System', 'IA · UX', 'Platform Migration'],
      outcome: '0% Crash Rate',
      outcomeDetail: '3 Teams Unblocked · ~0 Engineering Dependency'
    },
    {
      id: 'martech-migration',
      status: 'Delivered',
      scope: 'Cost Optimisation',
      domain: 'MarTech',
      title: 'MarTech & Telephony Migration — Cost & Scale Transformation',
      problem: 'MoEngage costing ₹20L/year for a MAU ceiling the business had already outgrown.',
      action: 'Migrated to CleverTap (−65% cost, 9L → 30L MAU). Simultaneously cut telephony costs 63% with Tata Tele.',
      tags: ['CleverTap', 'MoEngage', 'Tata Tele', 'Cost Optimisation'],
      outcome: '−65% MarTech Cost',
      outcomeDetail: '9L → 30L MAU · −63% Telephony Cost'
    }
  ];

  const heroStats = [
    { number: '9', label: 'Domains Shipped', detail: 'D2C to AgriTech' },
    { number: '₹575 Cr', label: 'Valuation Impact', detail: 'Product-led growth' },
    { number: '7 Years', label: 'Experience', detail: 'Design to PM' },
    { number: '30L MAU', label: 'Scale Built', detail: 'From 9L users' }
  ];

  const metricsBar = [
    { num: '9', label: 'Domains shipped across' },
    { num: '₹575 Cr', label: 'Valuation contributed to' },
    { num: '−63%', label: 'Fastest funnel improvement' },
    { num: '30L MAU', label: 'Capacity built from 9L' },
    { num: '500+', label: 'Staff digitised' },
    { num: '₹25 Cr', label: 'SaaS ARR at exit' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.domain === activeFilter);

  return (
    <div className="w-full min-h-screen bg-[#0F0E0B] text-[#F0EDE6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-[#0F0E0B] border-b border-[#C8953A]/15 px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg md:text-xl">Prathik.</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 text-[13px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer text-[#C8953A] transition-colors">Projects</Link>
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
            <Link to="/projects" className="cursor-pointer text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
            <Link to="/outside-the-brief" className="cursor-pointer hover:text-[#C8953A] transition-colors">Outside the Brief</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16 bg-[#0F0E0B] text-center">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#C8953A] mb-5">
            Product Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.1] tracking-tight mb-6">
            Products that moved the needle,<br />
            <span className="text-[#C8953A]">not just the roadmap.</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#BFBAB0] leading-[1.7] mb-12 max-w-[680px] mx-auto">
            From 0→1 launches to company-wide transformations — each project designed to solve real operational problems and deliver measurable business impact.
          </p>

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">
                  {stat.number}
                </div>
                <div className="text-[12px] text-[#F0EDE6] mb-1 font-medium">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#6B6455] uppercase tracking-wide">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[#141310] border-t border-b border-[#C8953A]/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#C8953A] mb-3">
              Methodology
            </div>
            <h2 className="text-3xl md:text-4xl text-[#F0EDE6] mb-4 tracking-tight">How I work</h2>
            <p className="text-[14px] text-[#8A8575] max-w-[600px] mx-auto">
              Six principles that guide every product decision — from discovery to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-[#0F0E0B] border border-[#C8953A]/20 rounded-xl p-7 hover:border-[#C8953A]/40 hover:bg-[#16150F] transition-all group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {principle.icon}
                </div>
                <h3 className="text-[15px] font-medium text-[#F0EDE6] mb-3 leading-tight">
                  {principle.label}
                </h3>
                <p className="text-[13px] text-[#A09880] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Filter Pills */}
      <div className="sticky top-[73px] z-20 bg-[#0F0E0B]/95 backdrop-blur-sm border-b border-[#C8953A]/10 px-6 md:px-12 py-4">
        <div className="max-w-[1100px] mx-auto overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[12px] transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#C8953A]/15 text-[#F0EDE6] border border-[#C8953A]/40'
                    : 'bg-transparent text-[#A09880] border border-[#C8953A]/15 hover:border-[#C8953A]/30 hover:text-[#F0EDE6]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <section className="px-6 md:px-12 py-12 md:py-16 bg-[#0F0E0B]">
        <div className="max-w-[1100px] mx-auto space-y-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/case-study/${project.id}`)}
              className="bg-[#141310] border border-[#C8953A]/15 rounded-2xl p-6 md:p-8 hover:border-[#C8953A]/35 hover:bg-[#16150F] transition-all group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                {/* Left: Main Content */}
                <div className="space-y-4">
                  {/* Status & Domain */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-[#C8953A]">{project.status}</span>
                      {project.scope && (
                        <>
                          <span className="text-[#C8953A]/40">·</span>
                          <span className="text-[#C8953A]">{project.scope}</span>
                        </>
                      )}
                    </div>
                    <span className="px-3 py-1 bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-full text-[10px] text-[#F0EDE6] uppercase tracking-wide font-medium">
                      {project.domain}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl text-[#F0EDE6] leading-tight">{project.title}</h3>

                  {/* Problem */}
                  <p className="text-[14px] text-[#A09880] leading-relaxed">{project.problem}</p>

                  {/* Action */}
                  <p className="text-[14px] text-[#EEEBE3] leading-relaxed">{project.action}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 border border-[#C8953A]/15 rounded-full text-[10px] text-[#8A8575]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Case Study Link */}
                  <div className="text-[13px] text-[#C8953A] flex items-center gap-2 group-hover:gap-3 transition-all pt-2">
                    <span>Read case study</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>

                {/* Right: Outcomes */}
                <div className="flex lg:flex-col justify-between lg:justify-center items-start lg:items-end text-right gap-4 lg:min-w-[240px]">
                  <div>
                    <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">
                      {project.outcome}
                    </div>
                    <div className="text-[11px] text-[#A09880] leading-relaxed max-w-[200px] ml-auto">
                      {project.outcomeDetail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Overview Bar */}
      <section className="bg-[#141310] border-t border-b border-[#C8953A]/10 py-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
            {metricsBar.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">
                  {metric.num}
                </div>
                <div className="text-[10px] text-[#8A8575] uppercase tracking-wide leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0906] border-t border-[#C8953A]/10 px-6 md:px-12 py-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 flex-wrap">
          <div className="text-center md:text-left">
            <div className="text-[14px] text-[#F0EDE6]">Prathik Kumar MP</div>
            <div className="text-[12px] text-[#6B6455] mt-0.5">Product Leader</div>
          </div>
          
          <div className="flex gap-5.5 text-[12px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer text-[#C8953A] transition-colors">Projects</Link>
            <Link to="/experience" className="cursor-pointer hover:text-[#C8953A] transition-colors">Experience</Link>
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