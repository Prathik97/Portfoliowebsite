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
      description: 'The single largest product transformation at Sid\'s Farm - not a UI revamp, a full re-architecture of the customer experience and operational layer.',
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
          title: 'Phase 1 - Foundation',
          desc: 'Core CRM, lead pipeline, multi-channel case creation, city-based queue routing, WhatsApp + IVR integration, 4 team workspaces live.'
        },
        {
          title: 'Phase 2 - Automation & Intelligence',
          desc: 'WhatsApp chatbot (category/sub-category), 30-day rolling criticality engine (Low → Normal → High → Urgent), auto case merging, escalation queues, dashboards.'
        },
        {
          title: 'Phase 3 - Vendor Migration',
          desc: 'Full IVR rebuild on Tata Tele - multi-city routing (HYD/BLR/PNE/VJA), agent timeout failover, missed-call escalation, auto-lead creation.'
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
        { layer: 'Core', desc: 'FMS - farmer profiles, cattle health, RBAC, admin layer' },
        { layer: 'Execution', desc: 'Mobile App (offline-first) + CRM for ticket lifecycle' }
      ],
      delivered: ['10+ Roles Unified', 'Offline-First Mobile App', 'Cattle Health & Antibiotic Tracking', 'Configurable RBAC', 'Nano Dairy Integration']
    },
    'payment-module': {
      title: 'Payment Module',
      subtitle: 'V11 Connect Platform - Financial Transaction Engine',
      description: 'Design and development of V11 Connect\'s end-to-end Payment system spanning single payments, bulk batch processing, autopay credit card runs, prepayment logic with force rent assessment, configurable surcharge/discount modifiers, and a full payment method configuration layer.',
      role: 'Product Manager',
      scope: '7 Versions Shipped',
      platform: 'V11 Connect (PropTech SaaS) · CodeParva',
      problem: {
        text: 'Property management platform needed a comprehensive payment system supporting multiple payment methods, batch processing, complex billing scenarios, and configurable business rules.',
        issues: ['No Batch Processing', 'Limited Payment Methods', 'No Autopay', 'Manual Surcharge Calculation', 'No Prepayment Logic']
      },
      capabilities: [
        { title: '5 Payment Method Types', desc: 'Cash, Credit Card, ACH, Check, Money Order with independent configuration' },
        { title: 'Batch Payment Processing', desc: 'Bulk cash/check/money order batch + separate autopay credit card batch run' },
        { title: 'Autopay Credit Card Runs', desc: 'Automated recurring payment processing for enrolled tenants' },
        { title: 'Prepayment with Force Rent Assessment', desc: 'Bill-ahead logic with automatic rent generation when threshold exceeded' },
        { title: 'Configurable Surcharge/Discount Modifiers', desc: '3 calculation modes: Flat, Percent, or Higher of Both' },
        { title: 'Payment Method Configuration Layer', desc: 'Active/inactive status, modifier logic, export descriptions, payment number behaviour' },
        { title: 'Tenant Alert Integration', desc: '"Do Not Rent" and "Do Not Accept Checks" enforcement with ignored alert logging' }
      ],
      outcomes: [
        { metric: 'Payment Methods Supported', value: '5 Types' },
        { metric: 'Batch Payment Modes', value: '2 Modes' },
        { metric: 'Modifier Calculation Modes', value: '3 Modes' },
        { metric: 'Versions Shipped', value: '7 Versions' },
        { metric: 'Payment Workflows', value: 'Single + Batch' }
      ]
    },
    'move-out-module': {
      title: 'Move Out Module',
      subtitle: 'V11 Connect Platform - Tenant Exit Workflow',
      description: 'Comprehensive move-out workflow handling notice period tracking, refund calculations, unit inspections, deposit settlements, and move-out statement generation integrated with billing, tenant alerts, and payment systems.',
      role: 'Product Manager',
      scope: 'End-to-end Automation',
      platform: 'V11 Connect (PropTech SaaS) · CodeParva',
      problem: {
        text: 'Manual move-out process creating operational bottlenecks and inconsistent tenant experiences across multiple facilities.',
        issues: ['Manual Notice Tracking', 'Inconsistent Refund Calculations', 'No Unit Inspection Workflow', 'Deposit Settlement Delays', 'Missing Move-out Statements']
      },
      capabilities: [
        { title: 'Notice Period Tracking', desc: 'Automated tracking of notice period start, duration, and move-out date with configurable periods' },
        { title: 'Refund Calculation Engine', desc: 'Automated calculation of deposit refunds, prorated rent, and outstanding balances' },
        { title: 'Unit Inspection Workflow', desc: 'Checklist-driven inspection process with damage tracking and charge assessment' },
        { title: 'Deposit Settlement', desc: 'Automated deposit application against outstanding charges and refund processing' },
        { title: 'Move-out Statement Generation', desc: 'Comprehensive statement showing final charges, deposits applied, and refund/balance due' },
        { title: 'Billing System Integration', desc: 'Prorated billing, final bill generation, and automatic ledger closure' },
        { title: 'Tenant Alert Integration', desc: 'Alert status updates and notifications throughout move-out process' }
      ],
      outcomes: [
        { metric: 'Process Automation', value: '100%' },
        { metric: 'Notice Period Tracking', value: 'Automated' },
        { metric: 'Deposit Settlement', value: 'Automated' },
        { metric: 'Unit Inspection', value: 'Workflow-driven' }
      ]
    },
    'move-in-module': {
      title: 'Move In Module',
      subtitle: 'V11 Connect Platform',
      description: 'Designed move-in module handling reservation conversion, unit assignment, deposit collection, lease generation, prorated billing, and tenant portal activation with configurable workflows adapted to different facility types and rental models.',
      role: 'Product Manager',
      scope: 'Streamlined Onboarding',
      platform: 'V11 Connect (PropTech SaaS) · CodeParva',
      problem: {
        text: 'Complex move-in workflows with multiple stakeholders requiring streamlined onboarding and billing setup across different facility types.',
        issues: ['Manual Reservation Conversion', 'Complex Unit Assignment', 'Inconsistent Deposit Collection', 'Manual Lease Generation', 'Billing Setup Delays']
      },
      capabilities: [
        { title: 'Reservation Conversion', desc: 'Seamless conversion of reservations to move-ins with automatic status updates' },
        { title: 'Unit Assignment Logic', desc: 'Intelligent unit assignment based on availability, tenant preferences, and facility rules' },
        { title: 'Deposit Collection', desc: 'Flexible deposit types (security, rental, reservation) with payment method integration' },
        { title: 'Lease Generation', desc: 'Automated lease document generation with configurable templates and e-signature integration' },
        { title: 'Prorated Billing Setup', desc: 'Automatic prorated rent calculation and first bill generation based on move-in date' },
        { title: 'Tenant Portal Activation', desc: 'Automatic tenant portal account creation and access credential delivery' },
        { title: 'Configurable Workflows', desc: 'Workflow variations for different facility types (climate-controlled, standard, vehicle storage)' }
      ],
      outcomes: [
        { metric: 'Onboarding Automation', value: '100%' },
        { metric: 'Reservation to Move-in', value: 'Automated' },
        { metric: 'Billing Setup', value: 'Auto-configured' },
        { metric: 'Portal Activation', value: 'Instant' }
      ]
    },
    'reports-analytics': {
      title: 'Reports & Analytics',
      subtitle: 'V11 Connect Platform',
      description: 'Built end-to-end reporting and analytics system with 200+ reports across 20 categories including flagship management reports, financial summaries, delinquency tracking, unit activity, and operational metrics with multi-level access control.',
      role: 'Product Manager',
      scope: '200+ Reports · 20 Categories',
      platform: 'V11 Connect (PropTech SaaS) · CodeParva',
      problem: {
        text: 'Property managers needed comprehensive operational reporting covering financial, occupancy, delinquency, and unit status metrics across multiple facilities.',
        issues: ['No Centralized Reporting', 'Limited Financial Visibility', 'Manual Report Generation', 'No Delinquency Tracking', 'Missing Operational Metrics']
      },
      capabilities: [
        { title: 'Super Summary (Flagship Report)', desc: 'Dense multi-column financial and operational snapshot covering Adjustments, Payments, Receipts, Aging, Economic Occupancy across Today/MTD/YTD/5 months/YoY' },
        { title: 'Income Reports', desc: 'Income Summary, Net Change of Account Details with payment method breakdown and charge category mapping' },
        { title: 'Delinquency Reports', desc: 'Late Report showing all unpaid AR due with configurable day ranges, sortable by unit/tenant/days late' },
        { title: 'Unit Activity Reports', desc: 'Move In/Out Activity, Non-Standard Rates, Rate History with transfer tracking and prorate logic' },
        { title: 'Rent Adjustment Reports', desc: 'Unit-by-unit rent adjustment status covering Pending/Waived/Vacated with full parameter footer' },
        { title: 'Retail Sale Reports', desc: 'Retail Sale Usage and Purchase Order reports for inventory reconciliation' },
        { title: 'Unit Access Reports', desc: 'Tenant Access Codes by Code/Tenant with multi-unit mapping and time zone settings' },
        { title: 'Unit Status Reports', desc: 'Overlocks/Unlocks Pending, Vacant/Rented/Reserved snapshots for Walk Around workflow' }
      ],
      outcomes: [
        { metric: 'Total Reports', value: '200+' },
        { metric: 'Report Categories', value: '20' },
        { metric: 'Access Levels', value: 'Multi-tier' },
        { metric: 'Financial Visibility', value: 'Complete' }
      ]
    },
    'hrms': {
      title: 'Enterprise Workforce & Payroll Platform',
      subtitle: 'From Spreadsheets to a Scalable Operations System',
      description: 'Organization-wide digital transformation of workforce operations for 500+ part-time and ground staff across four cities, eliminating spreadsheet dependency and establishing system of record.',
      role: 'Head of Product',
      scope: '500+ Staff · 4 Cities',
      platform: 'ERPNext · Hyderabad · Bengaluru · Pune · Vijayawada',
      problem: {
        text: 'Manual workforce operations across spreadsheets with no system of record, causing payroll leakage, unreliable attendance tracking, and asset recovery gaps.',
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
    'retail-sale': {
      title: 'Retail Sale Module',
      subtitle: 'V11 Connect Platform',
      description: 'Complete end-to-end retail commerce system embedded within V11 Connect self-storage platform — spanning inventory management, barcode-driven point of sale, multi-path returns, vendor lifecycle management, and configurable rules engine.',
      role: 'Product Manager',
      scope: '4 Core Layers · 8 Permissions',
      platform: 'V11 Connect (PropTech SaaS) · CodeParva',
      problem: {
        text: 'Self-storage facilities needed integrated commerce system to manage merchandise sales (padlocks, boxes, packing tape, bubble wrap) with inventory tracking, vendor management, and flexible returns.',
        issues: ['No Inventory Management', 'Manual Price Tracking', 'No Barcode Support', 'Complex Returns Process', 'No Vendor Lifecycle']
      },
      capabilities: [
        { title: 'Inventory Management with Barcode Support', desc: 'Product catalogue with manual entry and barcode scanning, 3 price tiers (Retail, Preferred/discounted, Wholesale), reorder automation with configurable reorder points, inventory audit with quantity correction' },
        { title: 'Point of Sale (POS)', desc: 'Transaction screen for registered tenants and walk-in customers, barcode cart addition, configurable preferred pricing, zero-quantity edge cases, negative inventory selling, on-the-fly product addition' },
        { title: 'Multi-Path Returns & Refunds', desc: '4 refund pathways: refund to ledger, cash refund, card refund, or no refund. 3 return search methods: by tenant, by purchase order number, or by date range. Return transaction tracking with full audit trail' },
        { title: 'Vendor Management', desc: 'Supplier records with contact details, active/inactive lifecycle, vendor assignment per product, vendor performance tracking' },
        { title: 'Three-Tier Pricing System', desc: 'Retail Price (standard), Preferred Price (configurable discount), Wholesale Price (purchase cost for profit calculation). Preferred price can be set as default at POS' },
        { title: 'Configurable Rules Engine', desc: '8 granular permissions controlling who can sell, return, audit inventory, manage vendors, override pricing, access reports' },
        { title: 'Purchase Order Generation', desc: 'Configurable purchase order generated post-sale with line items, quantities, pricing, tax calculation, and printing support' }
      ],
      outcomes: [
        { metric: 'System Layers', value: '4 Core' },
        { metric: 'Price Tiers', value: '3 Tiers' },
        { metric: 'Refund Pathways', value: '4 Pathways' },
        { metric: 'Granular Permissions', value: '8 Permissions' },
        { metric: 'Return Search Methods', value: '3 Methods' }
      ]
    },
    'sd-migration': {
      title: 'S&D Platform Migration',
      subtitle: 'Incitesol → Bizom · ₹12.6L Annual Savings',
      description: 'Led end-to-end evaluation, documentation, and migration of Sid\'s Farm\'s field sales and distribution operations from Incitesol to Bizom — achieving ₹1,05,000/month cost savings while unlocking route optimization, target tracking, and delivery management capabilities.',
      role: 'Product Manager',
      scope: '1,000+ Stores · 50+ Field Users',
      platform: 'Bizom (Mobisy Technologies) · Sid\'s Farm · FMCG',
      problem: {
        text: 'Sid\'s Farm\'s sales force automation platform (Incitesol) running at expensive store-limit pricing model with missing capabilities like route optimization, target-vs-achievement dashboards, digital signatures for POD, and asset management.',
        issues: ['High Platform Costs', 'No Route Optimization', 'Missing Target Tracking', 'No Digital POD', 'No Asset Management']
      },
      process: [
        { title: 'Operational Audit & Documentation', desc: 'Documented full T+1 order-to-delivery cycle covering store onboarding, order placement, invoicing & fulfillment, delivery & returns, payment & reconciliation as formal SOW with 5 modules and 15+ operational steps' },
        { title: 'Platform Evaluation', desc: 'Evaluated Bizom against documented requirements — route optimization, target management, immutable ledger tracking, digital POD, e-invoicing for GST, warehouse stock management' },
        { title: 'Migration Planning', desc: 'Designed migration approach maintaining operational continuity — data migration for 1,000+ stores, 50+ field user training, parallel run period, cutover strategy' },
        { title: 'Go-Live & Monitoring', desc: 'Executed migration with zero operational disruption — monitored daily order flow, delivery completion rates, payment reconciliation, issue resolution' }
      ],
      capabilities: [
        { title: 'Store Onboarding & Management', desc: 'Field exec creates store via app with GPS, route assignment, warehouse linking. S&D assigns margin template and credit limit' },
        { title: 'Order Placement (T−1)', desc: 'Sales team or retailer places order for next-day delivery. Draft orders auto-confirm at cutoff. Amendment workflow with approval routing' },
        { title: 'Invoicing & Fulfillment (T)', desc: 'Stock logged in at warehouse. E-invoices generated for GST-registered stores. Route optimization with store sequences. Stock-out logging per driver' },
        { title: 'Delivery & Returns (T)', desc: 'Driver delivers with POD and GRN logging. PRNs (Product Return Notes) and replacements recorded real-time. Post-delivery returns cross-validated at warehouse' },
        { title: 'Payment & Reconciliation (T+1)', desc: 'Cash and online payments logged, verified, approved. Each payment credited to store ledger against invoice debits. Group payment support for 7/15-day cycles' },
        { title: 'Immutable Ledger Model', desc: 'Double-entry ledger: orders = debits, payments = credits, PRNs = credits, replacements = inventory movements. Every entry time-stamped, user-tagged, immutable' },
        { title: 'Route Optimization', desc: 'Optimized store sequences per route reducing travel time and distance. Dynamic route adjustment based on order density' }
      ],
      outcomes: [
        { metric: 'Annual Savings', value: '₹12.6L' },
        { metric: 'Monthly Savings', value: '₹1.05L' },
        { metric: 'Stores Migrated', value: '1,000+' },
        { metric: 'Field Users', value: '50+' },
        { metric: 'Process Modules', value: '5 Modules' }
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
              <h4 className="text-[15px] text-[#F0EDE6] font-medium mb-4">Design Highlight - Incentive Rule Engine</h4>
              <p className="text-[13px] text-[#BFBAB0] mb-4">The most complex capability - configurable by business users without engineering.</p>
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