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

  const filters = ['All', 'D2C', 'AI', 'SCM & Inventory', 'MarTech', 'CRM', 'AgriTech', 'HRMS', 'Retail', 'Real Estate', 'Finance'];

  const projects = [
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'D2C',
      title: 'D2C Customer App Rebuild — +85% Session Engagement',
      problem: 'Low daily usage and weak product-market fit. The app was a utility, not a daily habit.',
      action: 'Rebuilt the app around a North Star engagement metric — gamified cart mechanics tied to same-day subscriptions. Introduced dual CTA flows, 15-day onboarding drip campaigns, and push notification triggers mapped to user behaviour segments.',
      tags: ['Mobile App', 'Product Strategy', 'Engagement', 'Subscription Model', 'UX Redesign'],
      outcome: '+85% Session Engagement',
      outcomeDetail: 'Daily active users increased · Habit-driven architecture',
      caseStudyLink: '/case-study/customer-app'
    },
    {
      status: 'Delivered',
      statusType: 'Integration',
      domain: 'CRM',
      title: 'Salesforce CRM — 2× Agent Productivity Across 4 Teams',
      problem: 'Customer service, sales, delivery, and collections teams operating on fragmented tools with no shared context.',
      action: 'Led Salesforce CRM implementation across 4 teams. Unified customer data, automated case routing, built custom dashboards, and integrated telephony. Result: agents spend less time toggling tools, more time solving problems.',
      tags: ['Salesforce', 'CRM', 'Process Automation', 'Team Productivity', 'Integration'],
      outcome: '2× Agent Productivity',
      outcomeDetail: 'Unified CRM across 4 operational teams',
      caseStudyLink: '/case-study/salesforce-crm'
    },
    {
      status: 'Delivered',
      statusType: 'Cost Optimisation',
      domain: 'SCM & Inventory',
      title: 'Dark Store Geofencing — ₹90L Annual Cost Reduction',
      problem: 'Manual hub and spoke delivery model leading to unnecessary operational costs and inefficiency.',
      action: 'Led geofencing initiative for 9 dark stores across the city, optimizing the cost structure of delivery logistics.',
      tags: ['Geofencing', 'Cost Optimisation', 'Supply Chain', 'Operations'],
      outcome: '₹90L Savings',
      outcomeDetail: 'Annual cost reduction through optimized delivery routes',
      caseStudyLink: '/case-study/supply-chain'
    },
    {
      status: 'Delivered',
      statusType: 'Cost Optimisation',
      domain: 'MarTech',
      title: 'MarTech & Telephony Migration — Cost & Scale Transformation',
      problem: 'MoEngage costing ₹20L/year for a MAU ceiling the business had already outgrown.',
      action: 'Migrated to CleverTap (−65% cost, 9L → 30L MAU). Simultaneously cut telephony costs 63% with Tata Tele.',
      tags: ['CleverTap', 'MoEngage', 'Tata Tele', 'Cost Optimisation'],
      outcome: '−65% MarTech Cost',
      outcomeDetail: '9L → 30L MAU · −63% Telephony Cost'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'AgriTech',
      title: 'Farmer Management System — 500+ Dairy Farmers Digitised',
      problem: 'Milk procurement happening entirely offline — inconsistent quality tracking, manual payment cycles.',
      action: 'Built a Farmer Management System to digitise milk procurement. Tracks milk quality (fat, SNF), automates payment cycles, generates farmer statements. Deployed across 500+ farmers across 4 cities.',
      tags: ['AgriTech', 'Digitisation', 'Farmer Mgmt', 'Supply Chain', 'Quality Control'],
      outcome: '500+ Farmers Onboarded',
      outcomeDetail: 'Quality tracking · Automated payment cycles',
      caseStudyLink: '/case-study/farmer-management'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'Finance',
      title: 'Payment Module — V11 Connect Platform',
      problem: 'Property management platform needed a comprehensive payment system supporting multiple payment methods, batch processing, and complex billing scenarios.',
      action: 'Designed and developed V11 Connect\'s end-to-end payment system spanning 5 payment methods (Cash, Credit Card, ACH, Check, Money Order), bulk batch processing, autopay credit card runs, prepayment logic with force rent assessment, and configurable surcharge/discount modifiers.',
      tags: ['B2B SaaS', 'Payment Systems', 'Financial Operations', 'PropTech', 'CodeParva'],
      outcome: '5 Payment Methods',
      outcomeDetail: '7 versions shipped · Batch processing enabled',
      caseStudyLink: '/case-study/payment-module'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'Real Estate',
      title: 'Move Out Module — V11 Connect Platform',
      problem: 'Manual move-out process creating operational bottlenecks and inconsistent tenant experiences.',
      action: 'Built comprehensive move-out workflow handling notice period tracking, refund calculations, unit inspections, deposit settlements, and move-out statement generation. Integrated with billing, tenant alerts, and payment systems.',
      tags: ['B2B SaaS', 'Workflow Automation', 'PropTech', 'Tenant Operations', 'CodeParva'],
      outcome: 'End-to-end Automation',
      outcomeDetail: 'Notice tracking · Deposit settlement · Unit inspection',
      caseStudyLink: '/case-study/move-out-module'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'Real Estate',
      title: 'Move In Module — V11 Connect Platform',
      problem: 'Complex move-in workflows with multiple stakeholders requiring streamlined onboarding and billing setup.',
      action: 'Designed move-in module handling reservation conversion, unit assignment, deposit collection, lease generation, prorated billing, and tenant portal activation. Configurable workflows adapted to different facility types and rental models.',
      tags: ['B2B SaaS', 'Onboarding', 'PropTech', 'Billing Systems', 'CodeParva'],
      outcome: 'Streamlined Onboarding',
      outcomeDetail: 'Reservation to move-in · Automated billing setup',
      caseStudyLink: '/case-study/move-in-module'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'Real Estate',
      title: 'Reports & Analytics — V11 Connect Platform',
      problem: 'Property managers needed comprehensive operational reporting covering financial, occupancy, delinquency, and unit status metrics across multiple facilities.',
      action: 'Built end-to-end reporting and analytics system with 200+ reports across 20 categories including Super Summary (flagship management report), Income Summary, Delinquency Reports, Unit Activity, Non-Standard Rates, Rent Adjustments, Retail Sales, and Access Control. Each report specified with full requirements covering filters, columns, aggregations, and access levels.',
      tags: ['B2B SaaS', 'Reporting', 'Analytics', 'Business Intelligence', 'CodeParva'],
      outcome: '200+ Reports',
      outcomeDetail: '20 categories · Multi-level access control',
      caseStudyLink: '/case-study/reports-analytics'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'HRMS',
      title: 'Enterprise Workforce & Payroll Platform — 500+ Staff Digitised',
      problem: 'Manual workforce operations across spreadsheets — no system of record, payroll leakage, unreliable attendance, and asset recovery gaps.',
      action: 'Built organization-wide HRMS on ERPNext covering 500+ part-time and ground staff across 4 cities. Delivered workforce master data, onboarding workflows, attendance & regularization engine, payroll rule engine with configurable incentive logic, asset lifecycle management, and worker self-service mobile app.',
      tags: ['HRMS', 'ERPNext', 'Payroll', 'Workforce Management', 'Digitisation'],
      outcome: '500+ Staff Covered',
      outcomeDetail: '4 cities · 0 spreadsheets · Asset recovery enforced',
      caseStudyLink: '/case-study/hrms'
    },
    {
      status: 'Delivered',
      statusType: 'Feature Launch',
      domain: 'Retail',
      title: 'Retail Sale Module — V11 Connect Platform',
      problem: 'Self-storage facilities needed integrated commerce system to manage merchandise sales — padlocks, boxes, packing tape — with inventory tracking, vendor management, and returns.',
      action: 'Built end-to-end retail commerce system embedded within V11 Connect platform spanning inventory management with barcode support and 3-tier pricing, point-of-sale for tenants and walk-ins, multi-path returns with 4 refund pathways, vendor lifecycle management, and configurable rules engine with 8 granular permissions.',
      tags: ['B2B SaaS', 'Retail', 'POS', 'Inventory Management', 'CodeParva'],
      outcome: 'Complete Commerce System',
      outcomeDetail: '4 core layers · 3 price tiers · 8 permissions',
      caseStudyLink: '/case-study/retail-sale'
    },
    {
      status: 'Delivered',
      statusType: 'Cost Optimisation',
      domain: 'Retail',
      title: 'S&D Platform Migration — ₹12.6L Annual Savings',
      problem: 'Sid\'s Farm\'s sales force automation platform (Incitesol) running at expensive store-limit pricing model with missing capabilities like route optimization, target tracking, and digital POD.',
      action: 'Led end-to-end evaluation, documentation, and migration from Incitesol to Bizom for 1,000+ stores and 50+ field users. Documented T+1 order-to-delivery cycle as formal SOW covering 5 modules and 15+ operational steps. Maintained operational continuity throughout migration while unlocking route optimization and target-vs-achievement dashboards.',
      tags: ['Sales Force Automation', 'FMCG', 'Bizom', 'Field Operations', 'Sid\'s Farm'],
      outcome: '₹12.6L Savings',
      outcomeDetail: '₹1.05L monthly savings · 1,000+ stores migrated',
      caseStudyLink: '/case-study/sd-migration'
    }
    ,
{
  status: 'Built & Shipped',
  statusType: 'AI Product',
  domain: 'AI',
  title: 'PM Assistant — AI PRD Co-pilot',
  problem: 'Writing a solid PRD from a vague problem statement takes hours. Most PMs either over-engineer it or skip the hard thinking entirely.',
  action: 'Built an AI PRD co-pilot that takes a rough problem statement and generates a complete 10-section PRD — with vagueness detection, AI vs rules-based routing, a verification brief before generation, and per-project memory. Built with Claude API. No frameworks, no backend.',
  tags: ['Claude API', 'Agentic Flow', 'AI PRD', 'State Machine', 'Vanilla JS'],
  outcome: 'Shipped',
  outcomeDetail: 'Solves a real daily problem I had as a PM',
  caseStudyLink: '/case-study/pm-assistant'
},
{
  status: 'AI PRD',
  statusType: 'Case Study',
  domain: 'AI',
  title: 'Swiggy Support Copilot — RAG-Based Agent',
  problem: 'Support agents at scale spend more time looking up context than actually resolving issues — leading to slow resolution times and inconsistent customer experience.',
  action: 'Wrote a full AI PRD for a RAG-based agent copilot that retrieves customer context, validates complaints, checks RFM tier, and suggests resolutions — with human review before sending. Includes 10 failure modes with guardrails, complete metrics framework, go/no-go criteria, and a 2-week evaluation plan with red teaming and shadow deployment.',
  tags: ['RAG', 'Agentic AI', 'AI PRD', 'Eval Framework', 'RFM', 'Human-in-the-loop'],
  outcome: 'Full AI PRD',
  outcomeDetail: 'Production-ready spec written from scratch',
  caseStudyLink: '/case-study/swiggy-copilot'
},
{
  status: 'AI PRD',
  statusType: 'Case Study',
  domain: 'AI',
  title: 'Zomato Restaurant Intelligence — LLM Insights Engine',
  problem: 'Restaurant partners on Zomato have no clear signal on why their ratings drop or what to fix — just a number that goes up or down.',
  action: 'Wrote an AI PRD for a feature that analyses customer reviews, order patterns, and complaint categories using LLMs — and delivers a daily insight report with prioritised action suggestions. Designed for non-technical restaurant owners. Includes RFM-based tier targeting and anomaly detection for fake reviews.',
  tags: ['Sentiment Analysis', 'LLM', 'Classification', 'RAG', 'B2B Product', 'AI PRD'],
  outcome: 'Full AI PRD',
  outcomeDetail: 'Solo PRD — no template, built from first principles',
  caseStudyLink: '/case-study/zomato-intelligence'
}
  ];

  const heroStats = [
    { number: '9', label: 'Domains Shipped', detail: 'D2C to AgriTech' },
    { number: '₹575 Cr', label: 'Valuation Impact', detail: 'Product-led growth' },
    { number: '7 Years', label: 'Experience', detail: 'Design to PM' },
    { number: '₹90L', label: 'Cost Savings', detail: 'SCM optimization' }
  ];

  const metricsBar = [
    { num: '9', label: 'Domains shipped across' },
    { num: '₹575 Cr', label: 'Valuation contributed to' },
    { num: '−63%', label: 'Fastest funnel improvement' },
    { num: '₹90L', label: 'Annual cost savings through SCM' },
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
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
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
            <Link to="/" className="cursor-pointer hover:text-[#C8953A] transition-colors">Home</Link>
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
              onClick={() => project.caseStudyLink && navigate(project.caseStudyLink)}
              className={`bg-[#141310] border border-[#C8953A]/15 rounded-2xl p-6 md:p-8 hover:border-[#C8953A]/35 hover:bg-[#16150F] transition-all group ${project.caseStudyLink ? 'cursor-pointer' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
                {/* Left: Main Content */}
                <div className="space-y-4">
                  {/* Status & Domain */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-[#C8953A]">{project.status}</span>
                      <span className="text-[#C8953A]/40">·</span>
                      <span className="text-[#C8953A]">{project.statusType}</span>
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
                  {project.caseStudyLink && (
                    <div className="text-[13px] text-[#C8953A] flex items-center gap-2 group-hover:gap-3 transition-all pt-2">
                      <span>Read case study</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  )}
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