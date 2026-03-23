import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router';

export default function CaseStudy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id } = useParams();

  // Case study data
  const caseStudies: Record<string, any> = {
    'customer-app': {
      title: 'D2C Customer App',
      subtitle: 'From 0→1 MVP to Scalable Growth Platform',
      description: 'The single largest product transformation at Sid\'s Farm — not a UI revamp, a full re-architecture of the customer experience and operational layer.',
      role: 'AVP – Head of Product',
      scope: 'Company-Level Program',
      platform: 'D2C Mobile App',
      problem: {
        text: 'The legacy app was built for one use case: list products, subscribe for tomorrow. As the business scaled, it became a liability. No IA, frequent subscription bugs, engineering-dependent price changes, no campaigns without a dev ticket, complex onboarding that dropped users before they converted.',
        issues: ['No Navigation or IA', 'Subscription Bugs', 'Manual Price Management', 'Engineering-Dependent Offers', 'Complex Onboarding', 'No Brand Identity']
      },
      owned: [
        'Defined product vision and multi-phase roadmap',
        'Aligned leadership, ops, CX, marketing, design and engineering',
        'Drove full journey redesign across all flows',
        'Owned IA and experience strategy',
        'Governed delivery, rollout and post-launch iteration'
      ],
      process: [
        { title: 'Brand & Design System', desc: 'visual language, theme, scalable component library' },
        { title: 'Organisation-wide Journey Mapping', desc: 'structured workshops with all stakeholders' },
        { title: 'Information Architecture', desc: 'restructured navigation and content hierarchy' },
        { title: 'UX Re-architecture', desc: 'wireframes focused on reducing friction and enabling self-service' },
        { title: 'UI Delivery & Clarity Instrumentation', desc: 'high-fidelity UI + behavioural monitoring post-launch' }
      ],
      journeys: ['Onboarding', 'Discovery', 'Subscription', 'Pause/Resume', 'Autopay', 'Quality Feedback', 'Campaigns', 'Forward-Day Ordering'],
      capabilities: [
        { title: 'Dynamic Banners & Deeplinks', desc: 'marketing owns it, no dev ticket' },
        { title: 'Configurable splash and welcome screens', desc: 'via CMS' },
        { title: 'Self-service product creation', desc: 'by ops team' },
        { title: 'Automated offer management', desc: 'create, schedule, close without engineering' },
        { title: 'Autopay & payment flexibility', desc: '~1,000 signups, ₹18.5L revenue in 1.5 months' },
        { title: 'Clear navigation, quality portal', desc: 'pause/resume flows' }
      ],
      outcomes: [
        { metric: 'Days to Subscribe', before: '15.06 days', after: '5.56 days', change: '−63%' },
        { metric: 'Session Time', before: '1.4 min', after: '3.7 min', change: '+85%' },
        { metric: 'Address Captured', before: '3,935', after: '8,781', change: '+123%' },
        { metric: 'Same-Day Orders', before: '5.20%', after: '8.84%', change: '+70%' },
        { metric: 'Subscription Items', before: '7.55L', after: '8.50L', change: '+12.5%' },
        { metric: 'Autopay Revenue (6 wks)', before: '—', after: '₹18.5L', change: '—' },
        { metric: 'Marketing Spend', before: 'Baseline', after: '−70–80%', change: '—' }
      ],
      roadmap: ['Loyalty & Rewards', 'Farm Booking', 'Pick My Plastic']
    },
    'salesforce-crm': {
      title: 'Salesforce CRM',
      subtitle: 'One Platform. Every Customer Conversation.',
      description: 'End-to-end Salesforce implementation unifying WhatsApp, IVR, chatbot, and agent workflows across four teams.',
      role: 'Head of Product',
      scope: '3-Phase Rollout',
      platform: 'Salesforce · Tata Tele · SMS360 · Chatbot',
      problem: {
        text: 'Four teams (CX, CA&R, SCM, Audit) in silos. No unified customer view. No chatbot. Missed calls generating no cases. Duplicate records across channels. Agents working blind.',
        issues: ['Siloed Teams', 'No Chatbot', 'Duplicate Cases', 'Missed Call Leakage', 'No Prioritisation']
      },
      phases: [
        {
          title: 'Phase 1 — Foundation',
          desc: 'Core CRM, lead pipeline, multi-channel case creation, city-based queue routing, WhatsApp + IVR integration, 4 team workspaces live.'
        },
        {
          title: 'Phase 2 — Automation & Intelligence',
          desc: 'WhatsApp chatbot (category/sub-category), 30-day rolling criticality engine (Low → Normal → High → Urgent), auto case merging, escalation queues, dashboards.'
        },
        {
          title: 'Phase 3 — Vendor Migration',
          desc: 'Full IVR rebuild on Tata Tele — multi-city routing (HYD/BLR/PNE/VJA), agent timeout failover, missed-call escalation, auto-lead creation.'
        }
      ],
      outcomes: [
        { metric: 'Agent Productivity', value: '2×' },
        { metric: 'Average Resolution Time', value: '−60%' },
        { metric: 'First Response Time', value: '−39%' },
        { metric: 'Chatbot Deflection Rate', value: '67%' },
        { metric: 'Onboarding Completion', value: '120%+' },
        { metric: 'Active Cases Managed Daily', value: '284' }
      ]
    },
    'supply-chain': {
      title: 'Supply Chain Execution & Last Mile Delivery',
      subtitle: 'Rethinking Delivery Logistics from the Ground Up',
      description: 'Two initiatives: geofencing dark stores to eliminate route waste, and building an in-house LMD platform to replace third-party software entirely.',
      role: 'Head of Product',
      scope: 'Phase 1: Delivered · Phase 2: In Development',
      platform: 'Salesforce · Mojro · Raasta AI',
      initiative1: {
        title: 'DARK STORE GEOFENCING',
        desc: 'Customers near the same location were assigned to different dark stores — causing route overlap, extra kilometres, and avoidable cost. Geofencing enforced clean zone boundaries.',
        outcomes: [
          { metric: 'Cost Saved', value: '₹90L' },
          { metric: 'Routes Eliminated', value: '116' },
          { metric: 'Daily Deliveries on network', value: '40,000+' }
        ]
      },
      initiative2: {
        title: 'IN-HOUSE LMD PLATFORM',
        desc: 'At ₹0.70/delivery across 40,000 daily orders, Mojro costs ~₹1 Cr/month. Building LMDMS on Raasta AI to own the delivery stack. Target: −40% delivery cost at scale.',
        tags: ['In Development', '159 Documented Requirements', '35+ User Stories', 'Raasta AI']
      },
      benefits: [
        { title: 'Targeted Marketing', desc: 'identify low-density zones for BTL investment' },
        { title: 'Denser Delivery Clusters', desc: 'focused geozone planning increases orders per route per km' },
        { title: 'Scalable City Expansion', desc: 'new cities inherit consistent geofencing logic from day one' }
      ]
    },
    'farmer-management': {
      title: 'Farmer Management System',
      subtitle: 'Digitising India\'s Last-Mile Dairy Supply Chain',
      description: 'Zero-to-one platform covering the full procurement hierarchy — from village surveys and farmer onboarding to cattle health records and Nano Dairy integration.',
      role: 'Head of Product',
      scope: 'Phase 1 Delivered',
      platform: 'Admin Portal · Mobile App · CRM · AgriTech',
      problem: {
        text: '',
        issues: ['No Farmer Registry', 'Paper-Based Field Ops', 'No Cattle Health Records', 'No Antibiotic Tracking', 'Disconnected from Nano Dairy']
      },
      hierarchy: {
        farmer: ['Procurement Head', 'Territory Manager', 'BMC In-Charge', 'Route Area Supervisor'],
        cattle: ['Veterinarian', 'Paravet (3 per BMC)', 'Paravet Associates']
      },
      architecture: [
        { layer: 'External', desc: 'Nano Dairy (Milk Logs, Finance, SNF, Loans)' },
        { layer: 'Core', desc: 'FMS — farmer profiles, cattle health, RBAC, admin layer' },
        { layer: 'Execution', desc: 'Mobile App (offline-first) + CRM for ticket lifecycle' }
      ],
      delivered: ['10+ Roles Unified', 'Offline-First Mobile App', 'Cattle Health & Antibiotic Tracking', 'Configurable RBAC', 'Nano Dairy Integration']
    },
    'hrms': {
      title: 'Enterprise Workforce & Payroll Platform',
      subtitle: 'From Spreadsheets to a Scalable Operations System',
      description: 'Organisation-wide digital transformation of workforce operations for 500+ part-time and ground staff across four cities.',
      role: 'Head of Product',
      scope: '',
      platform: 'ERPNext · Hyderabad · Bengaluru · Pune · Vijayawada',
      problem: {
        text: '',
        issues: ['No System of Record', 'Payroll Leakage', 'Asset Not Recovered', 'Attendance Unreliable', 'Zero Visibility']
      },
      capabilities: [
        { title: 'Workforce Master Data & Role Architecture', desc: 'configurable org model, departments, cost centres' },
        { title: 'Onboarding & Compliance Workflow', desc: 'digital consent, document storage, biometric provisioning' },
        { title: 'Attendance & Regularisation Engine', desc: 'hybrid biometric + mobile, 24hr regularisation window' },
        { title: 'Payroll & Incentive Rule Engine', desc: 'multi-variable rules, configurable by business, no redeployment needed' },
        { title: 'Asset Lifecycle & Recovery', desc: 'catalogue, assignment, deduction enforcement at exit' },
        { title: 'Workforce Visibility Dashboards', desc: 'by city, location and role for leadership' },
        { title: 'Worker Self-Service App', desc: 'payslips, attendance, leave requests, asset liability, advance pay' }
      ],
      incentiveRules: [
        'Attendance: Leave days ≤ 2/month → eligible for full incentive',
        'Punch-in: Before 4:15 AM → ₹200 component unlocked',
        'Issue-based: 0 tickets = ₹300, 5+ tickets = ₹0',
        'Seasonal override: Diwali attendance-only mode, time-window activation'
      ],
      outcomes: ['500+ Staff Covered', '4 Cities', '0 Spreadsheets', 'Payroll Accuracy Restored', 'Asset Recovery Enforced']
    },
    'website-revamp': {
      title: 'Website Revamp & Platform Migration',
      subtitle: 'Business Enablement, Not a Redesign',
      description: 'Migrated from WordPress to Shopify and rebuilt the entire experience — two parallel phases to remove operational risk and establish a scalable digital foundation.',
      role: 'Head of Product',
      scope: 'Two Parallel Phases',
      platform: 'Shopify',
      problem: {
        text: 'Every text change, banner update, or job posting needed a developer. Plugins caused outages. Three business teams blocked daily.',
        issues: ['Engineering Dependency', 'Frequent Instability', 'Slow Campaign Turnaround', 'No Scalable Foundation']
      },
      phases: [
        {
          title: 'Phase 1 — Platform Migration',
          desc: 'Stability first. Migrate content, eliminate engineering dependency for day-to-day changes. Zero outages post-migration.'
        },
        {
          title: 'Phase 2 — Experience Redesign',
          desc: 'New IA, design system, high-fidelity screens — landed directly on the stable platform. 3 teams immediately unblocked.'
        }
      ],
      outcomes: [
        { metric: 'Production crash rate', value: '0%' },
        { metric: 'Engineering dependency for content', value: '~0' },
        { metric: 'Teams unblocked (Marketing, HR, Content)', value: '3×' }
      ]
    }
  };

  const study = caseStudies[id as string];

  if (!study) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full min-h-screen bg-[#0F0E0B] text-[#F0EDE6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-[#0F0E0B] border-b border-[#C8953A]/15 px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg md:text-xl text-[#F0EDE6]">Prathik.</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 text-[13px] text-[#A09880]">
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">← Back to Projects</Link>
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
            <Link to="/projects" className="cursor-pointer hover:text-[#C8953A] transition-colors">← Back to Projects</Link>
            <Link to="/contact" className="cursor-pointer hover:text-[#C8953A] transition-colors">Let's Talk</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-3xl md:text-5xl text-[#F0EDE6] leading-tight tracking-tight mb-4">
            {study.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#C8953A] leading-tight mb-6">
            {study.subtitle}
          </h2>
          <p className="text-[16px] text-[#BFBAB0] leading-[1.75] mb-8">
            {study.description}
          </p>

          {/* Role / Scope / Platform Strip */}
          <div className="flex flex-wrap gap-3 text-[12px]">
            <div className="px-4 py-2 bg-[#141310] border border-[#C8953A]/15 rounded-full">
              <span className="text-[#A09880]">Role: </span>
              <span className="text-[#F0EDE6] font-medium">{study.role}</span>
            </div>
            {study.scope && (
              <div className="px-4 py-2 bg-[#141310] border border-[#C8953A]/15 rounded-full">
                <span className="text-[#A09880]">Scope: </span>
                <span className="text-[#F0EDE6] font-medium">{study.scope}</span>
              </div>
            )}
            <div className="px-4 py-2 bg-[#C8953A]/10 border border-[#C8953A]/25 rounded-full">
              <span className="text-[#A09880]">Platform: </span>
              <span className="text-[#C8953A] font-medium">{study.platform}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-[760px] mx-auto px-6 md:px-12 space-y-16 pb-20">
        
        {/* The Problem */}
        {study.problem && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">01</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-5 font-medium">The Problem</h3>
            {study.problem.text && (
              <p className="text-[15px] text-[#BFBAB0] leading-[1.8] mb-6">
                {study.problem.text}
              </p>
            )}
            {study.problem.issues && study.problem.issues.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {study.problem.issues.map((issue: string, i: number) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-[#C8953A]/10 border border-[#C8953A]/20 rounded-md text-[12px] text-[#A09880]"
                  >
                    {issue}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* What I Owned (for customer-app) */}
        {study.owned && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">02</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-5 font-medium">What I Owned</h3>
            <ul className="space-y-3">
              {study.owned.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#BFBAB0] leading-[1.7]">
                  <span className="text-[#C8953A] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Process (for customer-app) */}
        {study.process && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">03</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">Process</h3>
            <div className="space-y-6">
              {study.process.map((step: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C8953A] flex items-center justify-center text-[#0F0E0B] text-[14px] font-medium">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-[15px] text-[#F0EDE6] font-medium mb-1">{step.title}</h4>
                    <p className="text-[13px] text-[#A09880] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {study.journeys && (
              <div className="mt-8">
                <p className="text-[13px] text-[#A09880] mb-3 uppercase tracking-wide">Journeys Redesigned:</p>
                <div className="flex flex-wrap gap-2">
                  {study.journeys.map((journey: string, i: number) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-[#141310] border border-[#C8953A]/15 rounded-md text-[12px] text-[#F0EDE6]"
                    >
                      {journey}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Three Phases (for salesforce-crm, website-revamp) */}
        {study.phases && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">02</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">{id === 'website-revamp' ? 'Two Parallel Phases' : 'Three Phases'}</h3>
            <div className="space-y-5">
              {study.phases.map((phase: any, i: number) => (
                <div key={i} className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#C8953A] flex items-center justify-center text-[#0F0E0B] text-[13px] font-medium">
                      {i + 1}
                    </span>
                    <h4 className="text-[16px] text-[#F0EDE6] font-medium">{phase.title}</h4>
                  </div>
                  <p className="text-[14px] text-[#BFBAB0] leading-[1.7]">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Capabilities (for customer-app, hrms) */}
        {study.capabilities && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">{study.process ? '04' : '02'}</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">
              {id === 'hrms' ? '7 Capabilities Delivered' : 'What Was Delivered'}
            </h3>
            <div className="grid gap-4">
              {study.capabilities.map((cap: any, i: number) => (
                <div key={i} className="bg-[#141310] border border-[#C8953A]/15 rounded-lg p-5">
                  <h4 className="text-[14px] text-[#F0EDE6] font-medium mb-1.5">{cap.title}</h4>
                  <p className="text-[13px] text-[#A09880] leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Incentive Rules (for hrms) */}
        {study.incentiveRules && (
          <section>
            <div className="bg-[#C8953A]/10 border-l-4 border-[#C8953A] rounded-r-lg p-6">
              <h4 className="text-[15px] text-[#F0EDE6] font-medium mb-4">Design Highlight — Incentive Rule Engine</h4>
              <p className="text-[13px] text-[#BFBAB0] mb-4">The most complex capability — configurable by business users without engineering.</p>
              <ul className="space-y-2">
                {study.incentiveRules.map((rule: string, i: number) => (
                  <li key={i} className="text-[13px] text-[#A09880] leading-relaxed pl-4">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Hierarchy (for farmer-management) */}
        {study.hierarchy && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">02</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">Procurement Hierarchy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6">
                <h4 className="text-[14px] text-[#C8953A] font-medium mb-4 uppercase tracking-wide">Farmer Chain</h4>
                <ul className="space-y-2.5">
                  {study.hierarchy.farmer.map((level: string, i: number) => (
                    <li key={i} className="text-[13px] text-[#BFBAB0] flex gap-2">
                      <span className="text-[#C8953A] font-medium">L{i + 1}</span>
                      <span>— {level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#141310] border border-[#C8953A]/15 rounded-xl p-6">
                <h4 className="text-[14px] text-[#C8953A] font-medium mb-4 uppercase tracking-wide">Cattle Chain</h4>
                <ul className="space-y-2.5">
                  {study.hierarchy.cattle.map((level: string, i: number) => (
                    <li key={i} className="text-[13px] text-[#BFBAB0] flex gap-2">
                      <span className="text-[#C8953A] font-medium">L{i + 1}</span>
                      <span>— {level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Architecture (for farmer-management) */}
        {study.architecture && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">03</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">System Architecture</h3>
            <div className="space-y-4">
              {study.architecture.map((layer: any, i: number) => (
                <div key={i} className="bg-[#141310] border border-[#C8953A]/15 rounded-lg p-5">
                  <h4 className="text-[13px] text-[#C8953A] font-medium mb-2 uppercase tracking-wide">{layer.layer}</h4>
                  <p className="text-[14px] text-[#BFBAB0]">{layer.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Initiatives (for supply-chain) */}
        {study.initiative1 && (
          <>
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[32px] text-[#C8953A] font-medium">02</span>
                <div className="flex-1 h-px bg-[#C8953A]/20"></div>
              </div>
              <h3 className="text-xl text-[#C8953A] mb-4 uppercase tracking-wide font-medium">{study.initiative1.title}</h3>
              <p className="text-[15px] text-[#BFBAB0] leading-[1.75] mb-6">{study.initiative1.desc}</p>
              <div className="grid grid-cols-3 gap-4">
                {study.initiative1.outcomes.map((outcome: any, i: number) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl text-[#C8953A] leading-tight mb-2 font-medium">{outcome.value}</div>
                    <div className="text-[11px] text-[#A09880] uppercase tracking-wide">{outcome.metric}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[32px] text-[#C8953A] font-medium">03</span>
                <div className="flex-1 h-px bg-[#C8953A]/20"></div>
              </div>
              <h3 className="text-xl text-[#C8953A] mb-4 uppercase tracking-wide font-medium">{study.initiative2.title}</h3>
              <p className="text-[15px] text-[#BFBAB0] leading-[1.75] mb-4">{study.initiative2.desc}</p>
              <div className="flex flex-wrap gap-2">
                {study.initiative2.tags.map((tag: string, i: number) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-[#C8953A]/10 border border-[#C8953A]/20 rounded-md text-[12px] text-[#A09880]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Benefits (for supply-chain) */}
        {study.benefits && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">04</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">What Geofencing Enables Beyond Cost</h3>
            <div className="space-y-4">
              {study.benefits.map((benefit: any, i: number) => (
                <div key={i} className="bg-[#141310] border border-[#C8953A]/15 rounded-lg p-5">
                  <h4 className="text-[14px] text-[#F0EDE6] font-medium mb-1.5">{benefit.title}</h4>
                  <p className="text-[13px] text-[#A09880] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Delivered (for farmer-management, hrms) */}
        {study.delivered && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">{study.architecture ? '04' : '03'}</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-5 font-medium">What Was Delivered</h3>
            <div className="flex flex-wrap gap-2">
              {study.delivered.map((item: string, i: number) => (
                <span 
                  key={i}
                  className="px-3 py-2 bg-[#C8953A]/10 border border-[#C8953A]/20 rounded-md text-[13px] text-[#F0EDE6] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes Table (for customer-app) */}
        {study.outcomes && study.outcomes[0]?.metric && study.outcomes[0]?.before && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">05</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">Outcomes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#C8953A]/20">
                    <th className="py-3 px-4 text-[13px] text-[#A09880] font-medium uppercase tracking-wide">Metric</th>
                    <th className="py-3 px-4 text-[13px] text-[#A09880] font-medium uppercase tracking-wide">Before</th>
                    <th className="py-3 px-4 text-[13px] text-[#A09880] font-medium uppercase tracking-wide">After</th>
                    <th className="py-3 px-4 text-[13px] text-[#A09880] font-medium uppercase tracking-wide">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {study.outcomes.map((outcome: any, i: number) => (
                    <tr key={i} className="border-b border-[#C8953A]/10">
                      <td className="py-4 px-4 text-[14px] text-[#F0EDE6] font-medium">{outcome.metric}</td>
                      <td className="py-4 px-4 text-[14px] text-[#BFBAB0]">{outcome.before}</td>
                      <td className="py-4 px-4 text-[14px] text-[#BFBAB0]">{outcome.after}</td>
                      <td className="py-4 px-4 text-[15px] text-[#C8953A] font-medium">{outcome.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Outcomes Grid (for salesforce-crm, website-revamp, supply-chain initiatives) */}
        {study.outcomes && study.outcomes[0]?.value && !study.outcomes[0]?.before && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">{id === 'salesforce-crm' ? '03' : id === 'website-revamp' ? '03' : '05'}</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-6 font-medium">Outcomes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {study.outcomes.map((outcome: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl text-[#C8953A] leading-tight mb-2 font-medium">
                    {outcome.value}
                  </div>
                  <div className="text-[12px] text-[#A09880] leading-relaxed">
                    {outcome.metric}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Roadmap (for customer-app) */}
        {study.roadmap && (
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[32px] text-[#C8953A] font-medium">06</span>
              <div className="flex-1 h-px bg-[#C8953A]/20"></div>
            </div>
            <h3 className="text-2xl text-[#F0EDE6] mb-5 font-medium">Phase 2 Roadmap</h3>
            <div className="flex flex-wrap gap-2">
              {study.roadmap.map((item: string, i: number) => (
                <span 
                  key={i}
                  className="px-3 py-2 bg-[#141310] border border-[#C8953A]/15 rounded-md text-[13px] text-[#F0EDE6]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-[#0F0E0B] border-t border-[#F5F3ED]/10 px-6 md:px-12 py-12">
        <div className="max-w-[760px] mx-auto text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-[#C8953A] text-[14px] hover:gap-3 transition-all mb-6"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
          <div className="text-[11px] text-[#F5F3ED]/50 mt-6">
            Designed and built by Prathik Kumar MP · 2026
          </div>
        </div>
      </footer>
    </div>
  );
}