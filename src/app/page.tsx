'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, education, certifications, personalInfo } from '@/data/resume';
import { newProjects, oldProjects, projects } from '@/data/projects';
import BrutalistSectionBand from '@/components/BrutalistSectionBand';
import BrutalistNavigation from '@/components/BrutalistNavigation';
import SplitTabs, { SplitTab } from '@/components/SplitTabs';
import RecommendationsRotator from '@/components/RecommendationsRotator';
import CubeGame from '@/components/CubeGame';

// Experience tabs data for home page with original card format
const experienceTabs: SplitTab[] = [
  {
    id: "dimagi",
    label: "DIMAGI",
    panel: (
      <div className="border-4 border-deep-navy overflow-hidden relative h-full" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
        {/* Company Header */}
        <div className="p-6 border-b-4 border-deep-navy relative" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
         
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            DIMAGI
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            Technical Project Manager
          </p>
          <div className="px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy" style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}>
            2020 - Present
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Led end-to-end digital health projects on CommCare across Sub-Saharan Africa, owning scoping, build, QA, deployment, and partner communication.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 inline-block font-mono text-sm font-bold uppercase" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
              KEY ACHIEVEMENTS
            </div>
            <a 
              href="/recommendation letter/Reference Letter - Dimagi.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 font-mono text-xs font-bold uppercase hover:scale-110 border-2 border-deep-navy transition-colors"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
            >
              View Reference Letter
            </a>
          </div>
          <ul className="space-y-3">
          <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Oversaw digital health projects end-to-end, coordinating cross-functional teams, schedules, and deliverables as project manager.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Translated business requirements into clear technical specs and app designs that fit larger system ecosystems.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Scoped work, estimated effort, and aligned teams to scope and timelines using Asana and Jira.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Provided technical leadership and produced high-quality technical documentation for delivery teams.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Built data reporting solutions and delivered Superset, Power BI/SQL dashboards for decision support.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Executed QA test plans across the SDLC to ensure reliable, high-quality releases.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Supported implementations and delivered client training across Ethiopia, Kenya, Mozambique, USA, and Uganda.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Planned budgets, timelines, risks, and resources; delivered on time and within scope on projects totaling $300k+.</span>
  </li>
          </ul>
        </div>

        
        </div>
    ),
  },
  {
    id: "pr-chivas",
    label: "PERNOD RICARD / CHIVAS",
    panel: (
      <div className="border-4 border-deep-navy overflow-hidden relative h-full" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
        {/* Company Header */}
        <div className="p-6 border-b-4 border-deep-navy relative" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
           <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            PERNOD RICARD / CHIVAS
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            BRAND Manager
          </p>
          <div className="px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy" style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}>
            2019
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.
          </p>

          <div className="px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
            KEY ACHIEVEMENTS
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Managed event calendars, budgets, and supplier contracts across multiple cities to ensure seamless brand activations.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Collaborated with regional marketing teams to align activation strategy with national brand objectives and reporting metrics.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Led on-site event teams, ensuring logistics, branding, and customer experience met Chivas corporate standards.</span>
  </li>
          </ul>
        </div>

        </div>
    ),
  },
  {
    id: "vodacom",
    label: "VODACOM MOZAMBIQUE",
    panel: (
      <div className="border-4 border-deep-navy overflow-hidden relative h-full" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
        {/* Company Header */}
        <div className="p-6 border-b-4 border-deep-navy relative" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            VODACOM MOZAMBIQUE
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            BILLING APPLICATIONS SPECIALIST
          </p>
          <div className="px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy" style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}>
            2014 - 2019
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Operated USSD self-care, registration, recharge, and SMS systems serving 11M+ subscribers; ensured availability and reliability.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 inline-block font-mono text-sm font-bold uppercase" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
              KEY ACHIEVEMENTS
            </div>
            <a 
              href="/recommendation letter/Reference Letter - Vodacom Mozambique.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 font-mono text-xs font-bold uppercase hover:scale-110 border-2 border-deep-navy transition-colors"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
            >
              View Reference Letter
            </a>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Owned and optimized USSD applications (self-care, subscriber registration, recharge activation) serving more than 6 million subscribers.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Managed the implementation of projects requested by the Marketing team, gathered functional scope directly from Marketing and coordinated full delivery with external development vendors until deployment.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Managed inbound/outbound SMS platforms (SMPP) and processing pipelines supporting large-scale subscriber engagement.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Administered the CRM platform used by staff to manage millions of subscriber accounts across regions.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Ran the billing file-transfer system across VAS/Billing using SFTP, ensuring accurate and timely data exchange.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Served as technical lead on complex projects, driving requirements, analysis, and web-service design for mission-critical telecom services.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Handled daily operations and incident resolution; improved integrations, databases, and code quality to enhance service reliability.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Worked across Java USSD, GlassFish/Payara web services, Oracle PL/SQL, and Linux environments for enterprise-scale deployments.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#0f2e5a' }}></div>
    <span className="text-base leading-relaxed">Acted as primary contact for IT Security, Audit, and IT Governance deliverables.</span>
  </li>
          </ul>
        </div>

         </div>
    ),
  },
  {
    id: "bcx-mozal",
    label: "BUSINESS CONNEXION @ MOZAL",
    panel: (
      <div className="border-4 border-deep-navy overflow-hidden relative h-full" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
        {/* Company Header */}
        <div className="p-6 border-b-4 border-deep-navy relative" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
           <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            BUSINESS CONNEXION @ MOZAL
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            DESKTOP DEPLOYMENT ENGINEER
          </p>
          <div className="px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy" style={{ backgroundColor: '#fff6ee', color: '#0f2e5a' }}>
            2013
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Deployed Desktop images via PXE/media and migrated users from Windows XP to Windows 7 with on-site support and training.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 inline-block font-mono text-sm font-bold uppercase" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
              KEY ACHIEVEMENTS
            </div>
            <a 
              href="/recommendation letter/Reference Letter - Mozal.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 font-mono text-xs font-bold uppercase hover:scale-110 border-2 border-deep-navy transition-colors"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
            >
              View Reference Letter
            </a>
          </div>
          <ul className="space-y-3">
              <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Delivered the 1Desktop Project at Mozal Smelter under the BHP Billiton initiative, providing an agile, secure, and scalable enterprise desktop service across all business sectors.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Deployed 1Desktop images via PXE boot and media builds, ensuring smooth migration from Windows XP to Windows 7 for hundreds of end users.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Directly engaged with the Mozal user base, acting as the project’s main technical contact and ensuring seamless user experience during transition.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Reduced total cost of ownership (TCO) and standardized desktop technologies and operations to improve productivity and simplify future transitions.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Ensured timely delivery of workstation rollouts and maintained strong communication with stakeholders to minimize disruption.</span>
  </li>
  <li className="flex items-start">
    <div className="w-2 h-2 mr-3 mt-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#0f2e5a" }}></div>
    <span className="text-base leading-relaxed">Identified and implemented improvements in desktop deployment processes through innovative problem-solving and process refinement.</span>
  </li>
          </ul>
        </div>

        </div>
    ),
  },
];

// Portfolio tabs data for portfolio section
const portfolioTabs: SplitTab[] = [
{
  id: "global-env-calc",
  label: "GLOBAL ENV CALCULATOR",
  panel: (
    <div className="w-full h-full flex flex-col border-4 border-deep-navy overflow-hidden" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
      {/* Header */}
      <header className="border-b-4 border-deep-navy px-4 py-5 sm:px-6" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider">
          GLOBAL ENVIRONMENTAL IMPACT CALCULATOR
        </h3>
      </header>

      {/* Body: fills remaining height and scrolls */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 max-h-[880px]">
        {/* Description (replace if you want) */}
        <section>
          <p className="text-sm sm:text-base font-bold leading-relaxed">
            Interactive calculator that transforms raw activity inputs into clear environmental indicators. Users enter data, compare scenarios, and read results in responsive charts that surface trends, hot spots, and trade-offs for faster, data-driven decisions.
          </p>
        </section>

        {/* Live Demo */}
        
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Live Demo</h4>
            {newProjects[0]?.demo && (
              <a
                href={newProjects[0].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
                style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
                onClick={(e) => e.stopPropagation()}
              >
                OPEN FULL SCREEN
              </a>
            )}
          </div>

          {newProjects[0]?.demo ? (
            <>
              <div className="border-2 border-deep-navy/40 overflow-hidden h-[700px]">
                <iframe
                  title="Global Env Calculator Demo"
                  src={newProjects[0].demo}
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  scrolling="yes"
                />
              </div>
            </>
          ) : (
            <div className="border-2 border-deep-navy/40 p-6 text-center font-mono text-xs font-bold bg-white">
              Live demo URL not set yet. Add <code>newProjects[0].demo</code> to enable the embed and full-screen link.
            </div>
          )}
    

        {/* Detailed README-style info */}
        <section className="border-2 border-deep-navy/15 p-4 sm:p-5" style={{ backgroundColor: '#DDEAF0' }}>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Project Details</h4>
            <a
              href={newProjects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
            >
              VIEW CODE
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Core Features</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Real-time calculations for emissions and resource-use metrics.</li>
                <li>Interactive Chart.js visuals (bar, line, pie).</li>
                <li>Side-by-side scenario comparison with instant updates.</li>
                <li>Lightweight client storage for quick iteration.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">Tech Stack</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>React for UI composition.</li>
                <li>Chart.js for visualization.</li>
                <li>Tailwind for neo-brutalist layout and tokens.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Architecture</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li><code>components/</code> — charts, inputs, layout.</li>
                <li><code>hooks/</code> — form and calculation state.</li>
                <li><code>utils/</code> — formulas, units, transforms.</li>
                <li>Single-page layout with modular sections.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">Data & Calculations</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Input normalization for consistent unit math.</li>
                <li>Derived KPIs fed into chart adapters.</li>
                <li>Config-driven chart options for reuse.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Performance</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Memoized calculations and lean chart updates.</li>
                <li>Code splitting for faster initial load.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Roadmap</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>CSV/PNG export of data and charts.</li>
                <li>Preset scenario library.</li>
                <li>Metric/imperial unit switching.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  ),
},
{
  id: "pmp-drill-coach",
  label: "PMP DRILL COACH",
  panel: (
    <div className="w-full h-full flex flex-col border-4 border-deep-navy overflow-hidden" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
      {/* Header */}
      <header className="border-b-4 border-deep-navy px-4 py-5 sm:px-6" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider">
          PMP DRILL COACH
        </h3>
      </header>

      {/* Body: fills remaining height and scrolls */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 max-h-[880px]">
        {/* Description */}
        <section>
          <p className="text-sm sm:text-base font-bold leading-relaxed">
            Project Management Professional exam preparation tool featuring interactive quizzes, progress tracking, and comprehensive study materials. Built to help PMP candidates master exam concepts through hands-on practice and detailed performance analytics.
          </p>
        </section>

        {/* Live Demo */}
        
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Live Demo</h4>
            {newProjects[1]?.demo && (
              <a
                href={newProjects[1].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
                style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
                onClick={(e) => e.stopPropagation()}
              >
                OPEN FULL SCREEN
              </a>
            )}
          </div>

          {newProjects[1]?.demo ? (
            <>
              <div className="border-2 border-deep-navy/40 overflow-hidden h-[700px]">
                <iframe
                  title="PMP Drill Coach Demo"
                  src={newProjects[1].demo}
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  scrolling="yes"
                />
              </div>
            </>
          ) : (
            <div className="border-2 border-deep-navy/40 p-6 text-center font-mono text-xs font-bold bg-white">
              Live demo URL not set yet. Add <code>newProjects[1].demo</code> to enable the embed and full-screen link.
            </div>
          )}
    

        {/* Detailed README-style info */}
        <section className="border-2 border-deep-navy/15 p-4 sm:p-5" style={{ backgroundColor: '#DDEAF0' }}>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Project Details</h4>
            <a
              href={newProjects[1].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
            >
              VIEW CODE
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Core Features</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Interactive quiz system with randomized questions.</li>
                <li>Progress tracking and performance analytics dashboard.</li>
                <li>Comprehensive study materials by knowledge area.</li>
                <li>Timed practice exams simulating real PMP conditions.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">Tech Stack</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>React for dynamic UI and state management.</li>
                <li>Node.js + Express for backend API.</li>
                <li>MongoDB for user data and quiz storage.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Architecture</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li><code>client/</code> — React components and pages.</li>
                <li><code>server/</code> — Express routes and controllers.</li>
                <li><code>models/</code> — MongoDB schemas.</li>
                <li>RESTful API with JWT authentication.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">User Experience</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Instant feedback on quiz answers.</li>
                <li>Detailed explanations for each question.</li>
                <li>Bookmark difficult questions for review.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Performance</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Optimized database queries for fast load times.</li>
                <li>Client-side caching for offline quiz access.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Roadmap</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Mobile app version for iOS and Android.</li>
                <li>Spaced repetition algorithm for study optimization.</li>
                <li>Community forum for peer discussion.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  ),
},
  
{
  id: "wingfantasy",
  label: "WING FANTASY",
  panel: (
    <div className="w-full h-full flex flex-col border-4 border-deep-navy overflow-hidden" style={{ backgroundColor: '#fff6ee', color: '#3B648C' }}>
      {/* Header */}
      <header className="border-b-4 border-deep-navy px-4 py-5 sm:px-6" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider">
          WING FANTASY
        </h3>
      </header>

      {/* Body: fills remaining height and scrolls */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 max-h-[880px]">
        {/* Description */}
        <section>
          <p className="text-sm sm:text-base font-bold leading-relaxed">
            Interactive Mobile fantasy sports platform for Redbull featuring team management, scoring system, and competitive leagues. Players draft their favorite wing flavors, track performance metrics, and compete in seasonal tournaments with real-time leaderboards.
          </p>
        </section>

        {/* Live Demo */}
        
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Live Demo</h4>
            {newProjects[2]?.demo && (
              <a
                href={newProjects[2].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
                style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
                onClick={(e) => e.stopPropagation()}
              >
                OPEN FULL SCREEN
              </a>
            )}
          </div>

          {newProjects[2]?.demo ? (
            <>
              <div className="border-2 border-deep-navy/40 overflow-hidden h-[700px]">
                <iframe
                  title="Wing Fantasy Demo"
                  src={newProjects[2].demo}
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  scrolling="yes"
                />
              </div>
            </>
          ) : (
            <div className="border-2 border-deep-navy/40 p-6 text-center font-mono text-xs font-bold bg-white">
              Live demo URL not set yet. Add <code>newProjects[2].demo</code> to enable the embed and full-screen link.
            </div>
          )}
    

        {/* Detailed README-style info */}
        <section className="border-2 border-deep-navy/15 p-4 sm:p-5" style={{ backgroundColor: '#DDEAF0' }}>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider">Project Details</h4>
            <a
              href={newProjects[2].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 inline-block font-mono text-sm font-bold hover:scale-110 border-2 border-deep-navy transition-all duration-200"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
            >
              VIEW CODE
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Core Features</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Team drafting system with flavor selection.</li>
                <li>Real-time scoring and leaderboard updates.</li>
                <li>Seasonal leagues with playoff brackets.</li>
                <li>Player statistics and performance tracking.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">Tech Stack</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Next.js for server-side rendering.</li>
                <li>TypeScript for type safety.</li>
                <li>React for component architecture.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-mono text-xs font-bold uppercase">Architecture</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li><code>pages/</code> — routing and page components.</li>
                <li><code>components/</code> — reusable UI elements.</li>
                <li><code>lib/</code> — scoring logic and utilities.</li>
                <li>API routes for backend functionality.</li>
              </ul>

              <h5 className="font-mono text-xs font-bold uppercase mt-4">Game Mechanics</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Point system based on flavor popularity.</li>
                <li>Weekly matchups and head-to-head scoring.</li>
                <li>Trade system for team optimization.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Performance</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Optimized database queries for fast loads.</li>
                <li>Caching strategy for leaderboard data.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase">Roadmap</h5>
              <ul className="list-disc list-inside text-sm font-bold space-y-1">
                <li>Mobile app for iOS and Android.</li>
                <li>Social features and team chat.</li>
                <li>Integration with restaurant APIs.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  ),
}

 

];

export default function BrutalistCV() {
  const [currentTime, setCurrentTime] = useState('');
  const [expandedCerts, setExpandedCerts] = useState<Set<number>>(new Set());
  const [activePortfolioTab, setActivePortfolioTab] = useState('global-env-calc');
  const [activeExperienceTab, setActiveExperienceTab] = useState('dimagi');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <BrutalistNavigation />

      {/* HOME Section - Deep Navy background, accents in lime-accent and Label Purple */}
      <section id="hero" className="p-8 pt-24 relative overflow-hidden scroll-mt-20 global-border" style={{ backgroundColor: '#0f2e5a', color: '#fff6ee' }}>
        <div className="absolute top-4 right-4">
          
        </div>

        {/* 3D Cube Game - Centered */}
        <CubeGame />

        <div className="w-full px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none mb-4 relative" style={{ color: '#fff6ee' }}>
              <span className="relative z-10">ERIC</span>
              <span className="absolute top-2 left-2 opacity-70 -z-10" style={{ color: '#8EABC8' }}>ERIC</span>
            </h1>
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none mb-8 relative" style={{ color: '#fff6ee' }}>
              <span className="relative z-10">AMBRIZA</span>
              <span className="absolute top-2 left-2 opacity-70 -z-10" style={{ color: '#B088E0' }}>AMBRIZA</span>
            </h1>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <h2 className="font-mono text-2xl font-bold mb-4 uppercase tracking-widest" style={{ color: '#FF7F27' }}>
                Project Manager & Data Analyst
              </h2>
              <p className="text-xl leading-relaxed mb-6" style={{ color: '#fff6ee' }}>
                Graduated with Honors in Computer Science and certified PMP with expertise in project management, data analytics, and digital transformation. Currently managing cross-functional tech projects across Africa and Europe, delivering scalable SaaS, BI, and automation solutions for global organizations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 global-border shadow-brutal" style={{ backgroundColor: '#7EA3BD', color: '#0f2e5a', boxShadow: 'inset 0 0 0 2px #fff6ee, 4px 4px 0px 0px #0f2e5a' }}>
                <p className="font-mono font-bold">LOCATION: CAPE TOWN, SA [{currentTime}]</p>
              </div>
              <div className="p-4 global-border shadow-brutal" style={{ backgroundColor: '#7EA3BD', color: '#0f2e5a', boxShadow: 'inset 0 0 0 2px #fff6ee, 4px 4px 0px 0px #0f2e5a' }}>
                <p className="font-mono font-bold">EMAIL: eric.mauro@hotmail.com</p>
              </div>
              <div className="p-4 global-border shadow-brutal" style={{ backgroundColor: '#7EA3BD', color: '#0f2e5a' , boxShadow: 'inset 0 0 0 2px #fff6ee, 4px 4px 0px 0px #0f2e5a'}}>
                <p className="font-mono font-bold">PHONE: 071-892-8364</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section Band */}
      <BrutalistSectionBand
        id="experience"
        title="EXPERIENCE"
        backgroundColor="bg-deep-navy"
        textColor="soft-text"
        borderColor="#3B648C"
        rotation={-1}
      />

      {/* EXPERIENCE Section - Split Tabs with Skills palette styling */}
<section style={{ backgroundColor: '#0F2E5A', color: '#0F2E5A', borderBottom: '8px solid #0F2E5A' }}>
  <div className="w-full">
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className="[&_.brutal-border]:border-deep-navy [&_.brutal-border]:border-4 bg-transparent" style={{
        '--button-bg': '#7EA3BD',
        '--button-text': '#0F2E5A',
        '--button-border': '#0F2E5A',
        '--secondary-bg': '#B8E6B8',
        '--secondary-text': '#0F2E5A',
        '--panel-bg': '#7EA3BD'
      } as React.CSSProperties}>
        <SplitTabs tabs={experienceTabs} initialId={activeExperienceTab} onChange={setActiveExperienceTab} bottomLeftContent={<div className="h-full"><RecommendationsRotator active /></div>} />
      </div>
    </motion.div>
  </div>
</section>







      {/* Education Section Band */}
      <BrutalistSectionBand
        id="education"
        title="EDUCATION"
        backgroundColor="bg-deep-navy"
        textColor="soft-text"
        borderColor="#3B648C"
        rotation={1}
      />

      {/* EDUCATION Section */}
      <section style={{ backgroundColor: '#DDEAF0', color: '#0f2e5a', borderBottom: '8px solid #0f2e5a' }}>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Split Layout: Degrees (35%) | Certifications (65%) */}
            <div className="grid md:grid-cols-5">

              {/* Left Side: DEGREES (35% - 2 columns out of 5) */}
              <div className="md:col-span-2 flex flex-col h-full">
                <div className="p-4 border-4 border-deep-navy shadow-brutal" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                  <h3 className="font-display text-2xl font-black uppercase tracking-wider text-center">
                    DEGREES
                  </h3>
                </div>

                {/* Degrees Layout */}
                <div className="flex-1 flex flex-col">
                  {/* Primary Degree */}
                  <div className="text-deep-navy p-2 border-4 border-t-0 border-deep-navy shadow-brutal flex-1 flex flex-col" style={{ backgroundColor: '#F5FAFD' }}>
                    <div className="mb-1">
                      <h4 className="font-display text-sm font-black mb-1 uppercase tracking-wider leading-tight">
                        B.SC. (HONS) COMPUTER SCIENCE
                      </h4>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0f2e5a' }}>
                        GRADUATED WITH HONORS
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <div className="px-1.5 py-0.5 inline-block font-mono text-xs font-bold border border-deep-navy" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                        ISCTEM - MOZAMBIQUE
                      </div>
                      <div className="px-1.5 py-0.5 inline-block font-mono text-xs font-bold border border-deep-navy" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                        2010 - 2014
                      </div>
                      <a 
              href="\certification\Eric Certificate - Computer Science.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1 font-mono text-xs font-bold uppercase hover:scale-110 border-2 border-deep-navy transition-colors"
              style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A18';
                e.currentTarget.style.color = '#0f2e5a';
              }}
            >
              View Degree Certification
            </a>

                    </div>
                    <p className="text-xs font-bold leading-relaxed mb-2">
                      Programming, computer networks, databases, information security and systems design.
                    </p>
                    {/* Key Focus Areas */}
                    <div className="flex-1 border-2 border-deep-navy/30 p-2 flex flex-col justify-center" style={{ backgroundColor: '#E3F0F8' }}>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-s">The Bachelor’s in Computer Engineering at ISCTEM is a four-year program that develops strong technical and analytical skills in computing, electronics, and communication systems. It combines theory and hands-on learning in programming, databases, networks, and cybersecurity. The curriculum emphasizes innovation, problem-solving, and the integration of software and hardware systems. Students benefit from experienced faculty and international collaboration with visiting professors. The course prepares graduates to design and implement modern technological solutions for diverse industries.
                          </span>
                           </div>
                        
                      </div>
                    </div>
                  </div>

                  {/* Additional Education */}
                  <div className="text-deep-navy p-2 border-4 border-t-0 border-deep-navy shadow-brutal flex-1 flex flex-col" style={{ backgroundColor: '#F5FAFD' }}>
                    <div className="mb-1">
                      <h5 className="font-display text-sm font-black mb-1 uppercase tracking-wider leading-tight">
                        MBA IN OIL AND GAS
                      </h5>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0f2e5a' }}>
                        INCOMPLETE 
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <div className="px-1.5 py-0.5 inline-block font-mono text-xs font-bold border border-deep-navy" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                        ISCTEM - MOZAMBIQUE
                      </div>
                      <div className="px-1.5 py-0.5 inline-block font-mono text-xs font-bold border border-deep-navy" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                        2016 
                      </div>
                    </div>
                    {/* Career Pivot Insight */}
                    <div className="flex-1 border-2 border-deep-navy/30 p-2 flex flex-col justify-center" style={{ backgroundColor: '#E3F0F8' }}>
                      <div className="space-y-1.5">
                        
                        <p className="text-s leading-relaxed">
                          The MBA in Business Management of Petroleum & Gas was created to meet the growing demands of Mozambique’s expanding hydrocarbons sector. It is designed for executives and professionals in both public and private sectors, offering tools in strategic management, economics, regulation, logistics, and sustainability. Core modules cover upstream and downstream operations, oil economics, contracts, safety and environmental management, geopolitics, and the renewable energy transition. Graduates develop strong leadership, analytical, and technical skills to manage projects, regulatory frameworks, and service operations in the petroleum and gas industries.
                         </p>
                        <div className="flex gap-1 flex-wrap">
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: CERTIFICATIONS (65% - 3 columns out of 5) */}
              <div className="md:col-span-3">
                <div className="p-4 border-4 border-deep-navy shadow-brutal" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                  <h3 className="font-display text-2xl font-black uppercase tracking-wider text-center">
                    CERTIFICATIONS
                  </h3>
                </div>

                {/* Certifications Table Layout */}
                <div>
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-4 border-t-0 border-deep-navy shadow-brutal transition-all duration-200 text-deep-navy" style={{ backgroundColor: '#fff6ee' }}>
                      {/* Main Certification Row - Clickable */}
                      <button
                        onClick={() => {
                          // Only allow one certification to be expanded at a time
                          if (expandedCerts.has(index)) {
                            // If clicking the already expanded one, collapse it
                            setExpandedCerts(new Set());
                          } else {
                            // Otherwise, expand only this one
                            setExpandedCerts(new Set([index]));
                          }
                        }}
                        className="w-full p-2 text-left hover:scale-102 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-deep-navy focus:ring-inset"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-mono text-xs font-bold uppercase leading-tight">
                                {cert.name}
                              </h4>    
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <div className="px-1.5 py-0.5 font-mono text-xs font-bold border border-deep-navy" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
                                {cert.issuer}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {cert.credentialLink && (
                              <a
                                href={cert.credentialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2 py-1 font-mono text-xs font-bold border-2 border-deep-navy hover:scale-110 transition-all duration-200"
                                style={{ backgroundColor: '#FF7A18', color: '#0f2e5a' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#FF7A18';
                                  e.currentTarget.style.color = '#0f2e5a';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#FF7A18';
                                  e.currentTarget.style.color = '#0f2e5a';
                                }}
                              >
                                VIEW CERTIFICATION
                              </a>
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {expandedCerts.has(index) && (cert.description || cert.skills) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden border-t-4 border-deep-navy"
                          >
                            <div className="p-2 bg-deep-navy text-text-cream">
                              {cert.description && (
                                <div className="mb-2">
                                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-1 text-warm-orange">
                                    DESCRIPTION
                                  </h5>
                                  <p className="text-xs font-bold leading-relaxed">
                                    <span className="text-warm-orange">[{cert.date}]</span> {cert.description}
                                  </p>
                                </div>
                              )}
                              {cert.skills && cert.skills.length > 0 && (
                                <div>
                                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-1 text-lime-accent">
                                    SKILLS COVERED
                                  </h5>
                                  <div className="flex flex-wrap gap-1">
                                    {cert.skills.map((skill, skillIndex) => (
                                      <div
                                        key={skillIndex}
                                        className="bg-text-cream text-deep-navy px-1.5 py-0.5 font-mono text-xs font-bold border border-text-cream"
                                      >
                                        {skill}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section Band */}
      <BrutalistSectionBand
        id="skills"
        title="SKILLS"
        backgroundColor="bg-deep-navy"
        textColor="soft-text"
        borderColor="#3B648C"
        rotation={-1}
      />

      {/* SKILLS Section - Updated blue color scheme */}
      <section style={{ backgroundColor: '#DDEAF0', borderTop: '6px solid #3B648C' }}>
        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="p-6"
                style={{
                  backgroundColor: index % 3 === 0 ? '#7EA3BD' : index % 3 === 1 ? '#3B648C' : '#fff6ee',
                  border: '6px solid #0f2e5a',
                  color: index % 3 === 2 ? '#0f2e5a' : '#fff6ee'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-mono text-xl font-bold mb-4 px-3 py-2 inline-block relative" style={{ backgroundColor: '#0f2e5a', color: '#fff6ee' }}>
                  {skillGroup.category.toUpperCase()}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2" style={{ backgroundColor: '#7EA3BD' }}></div>
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 mr-3 rounded-full" style={{ backgroundColor: index % 3 === 2 ? '#3B648C' : '#DDEAF0' }}></div>
                      <span className="font-bold" style={{ color: index % 3 === 2 ? '#0f2e5a' : '#fff6ee' }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section Band */}
      <BrutalistSectionBand
        id="portfolio"
        title="PORTFOLIO"
        backgroundColor="bg-deep-navy"
        textColor="soft-text"
        borderColor="#3B648C"
        rotation={1}
      />

      {/* PORTFOLIO Section - Custom Split Layout */}
      <section style={{ backgroundColor: '#DDEAF0', color: '#0f2e5a', borderBottom: '8px solid #0f2e5a' }}>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Custom Portfolio Layout */}
            <div className="grid md:grid-cols-3 md:auto-rows-fr">

              {/* Left Sidebar - 1/3 width */}
              <div className="md:col-span-1 border-4 border-t-0 border-deep-navy flex flex-col" style={{ backgroundColor: '#fff6ee' }}>

                {/* Main Project Buttons - Top Section */}
                <div>
                  {portfolioTabs.slice(0, 3).map((tab, index) => {
                    const selected = activePortfolioTab === tab.id;
                    const isLast = index === 2;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActivePortfolioTab(tab.id)}
                        className={`relative w-full text-left px-4 py-5 ${isLast ? 'border-b-0' : 'border-b'} transition-all duration-300 border-deep-navy`}
                        style={{
                          backgroundColor: selected ? '#0f2e5a' : '#7EA3BD',
                          color: selected ? '#fff6ee' : '#0f2e5a'
                        }}
                        onMouseEnter={(e) => {
                          if (!selected) {
                            e.currentTarget.style.backgroundColor = '#3B648C';
                            e.currentTarget.style.color = '#fff6ee';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!selected) {
                            e.currentTarget.style.backgroundColor = '#7EA3BD';
                            e.currentTarget.style.color = '#0f2e5a';
                          }
                        }}
                      >
                        <span className="font-bold uppercase tracking-wide">
                          {tab.label}
                        </span>
                        {selected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#FF7A18' }}></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Old Projects Section - Connected to last button */}
                <div>
                  {/* Old Projects Header */}
                  <div className="text-text-cream p-4 border-b-2" style={{ backgroundColor: '#244B73', borderColor: '#7EA3BD' }}>
                    <h4 className="font-display text-sm font-black uppercase tracking-wider text-center">
                      OLD PROJECTS
                    </h4>
                  </div>

                  {/* Old Projects Grid - Perfect Squares (each = half width of header) */}
                  <div style={{ backgroundColor: '#DDEAF0', borderColor: '#7EA3BD' }}>
                    <div className="grid grid-cols-2">

                      {/* Image Slider - Top Left */}
                     <div className="bg-deep-navy border-4 border-t-0 border-deep-navy shadow-pixel hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex flex-col justify-between p-3 rounded-sm min-h-[360px]" style={{ color: '#fff6ee' }}>
  <div className="text-center">
    <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#7EA3BD' }}>
      Image Slider
    </h5>
  
  </div>

  <div className="text-left space-y-2 mt-2">
    <p className="text-[11px] leading-relaxed">
      <span className="font-semibold" style={{ color: '#7EA3BD' }}>Description:</span> A responsive React image carousel that fetches and displays dynamic content using Axios, styled with Material UI components for a clean interface.
    </p>
    <div>
      <p className="font-semibold text-[11px] mb-1" style={{ color: '#7EA3BD' }}>Key Points:</p>
      <ul className="list-disc list-inside text-[11px] space-y-1">
        <li>Built with React and Axios for dynamic image retrieval.</li>
        <li>Utilizes Material UI for responsive design and layout.</li>
        <li>Includes a local Node server for data simulation.</li>
        <li>Demonstrates API integration and component reusability.</li>
      </ul>
    </div>
  </div>

  <div className="flex gap-2 justify-center mt-3">
    <a
      href={oldProjects[1].github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-text-cream text-deep-navy px-2 py-0.5 font-mono text-xs font-bold rounded hover:bg-lime-accent hover:text-text-cream transition-colors duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      CODE
    </a>
  </div>
</div>


                      {/* Wine Quality - Top Right */}
                  <div className="border-4 border-t-0 border-l-0 border-deep-navy shadow-pixel hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex flex-col justify-between p-3 rounded-sm min-h-[360px]" style={{ backgroundColor: '#7EA3BD', color: '#0f2e5a' }}>
  <div className="text-center">
    <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-deep-navy">
      Wine Quality
    </h5>
   
  </div>

  <div className="text-left space-y-2 mt-2">
    <p className="text-[11px] leading-relaxed">
      <span className="font-semibold text-deep-navy">Description:</span> An R-based data analysis exploring the physicochemical factors influencing wine quality using statistical methods and visualization.
    </p>
    <div>
      <p className="font-semibold text-deep-navy text-[11px] mb-1">Key Points:</p>
      <ul className="list-disc list-inside text-[11px] space-y-1">
        <li>Analyzes the red wine quality dataset with R Markdown.</li>
        <li>Applies correlation matrices and predictive modeling techniques.</li>
        <li>Includes visualizations of key quality indicators.</li>
        <li>Demonstrates data analysis, cleaning, and reporting in R.</li>
      </ul>
    </div>
  </div>

  <div className="flex gap-2 justify-center mt-3">
    <a
      href={oldProjects[3].github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-deep-navy text-text-cream px-2 py-0.5 font-mono text-xs font-bold rounded hover:bg-lime-accent hover:text-deep-navy transition-colors duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      CODE
    </a>
  </div>
</div>


                      {/* Coronagora - Bottom Left */}
                      <div className="border-4 border-t-0 border-deep-navy shadow-pixel hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex flex-col justify-between p-3 rounded-sm min-h-[360px]" style={{ backgroundColor: '#3B648C', color: '#fff6ee' }}>
  <div className="text-center">
    <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#fff6ee' }}>
      Coronagora (Next.js Website)
    </h5>
  </div>

  <div className="text-left space-y-2">
    <p className="text-[11px] leading-relaxed">
      <span className="font-semibold" style={{ color: '#fff6ee' }}>Description:</span> A web application built using Next.js for the Coronagora project, focused on showcasing clean architecture and modular design.
    </p>
    <div>
      <p className="font-semibold text-deep-navy text-[11px] mb-1">Key Points:</p>
      <ul className="list-disc list-inside text-[11px] space-y-1">
        <li>Based on the “Learn Next.js” starter template.</li>
        <li>Implements components, pages, and custom styling.</li>
        <li>Demonstrates Next.js routing and server-side rendering.</li>
        <li>Highlights frontend development with JavaScript and modern frameworks.</li>
      </ul>
    </div>
  </div>

  <div className="flex gap-2 justify-center mt-3">
  
    <a
      href={oldProjects[0].github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-text-cream text-deep-navy px-2 py-0.5 font-mono text-xs font-bold rounded hover:bg-deep-navy hover:text-text-cream transition-colors duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      CODE
    </a>
  </div>
</div>



                      {/* Python Reports - Bottom Right */}
                      <div className="border-4 border-t-0 border-l-0 border-deep-navy shadow-pixel hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex flex-col justify-between p-3 rounded-sm min-h-[360px]" style={{ backgroundColor: '#0f2e5a', color: '#fff6ee' }}> 
  <div className="text-center">
    <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#7EA3BD' }}>
      Python Reports
    </h5>
  
  </div>

  <div className="text-left space-y-2 mt-2">
    <p className="text-[11px] leading-relaxed">
      <span className="font-semibold" style={{ color: '#7EA3BD' }}>Description:</span> A collection of Python notebooks and scripts for processing, analyzing, and visualizing data across multiple domains.
    </p>
    <div>
       <p className="font-semibold text-[11px] mb-1" style={{ color: '#7EA3BD' }}>Key Points:</p>
      <ul className="list-disc list-inside text-[11px] space-y-1">
        <li>Includes data cleaning, transformation, and visualization workflows.</li>
        <li>Integrates pandas, NumPy, and Matplotlib for analysis.</li>
        <li>Features automated reporting in Jupyter and HTML formats.</li>
        <li>Demonstrates structured analytical storytelling with reproducible code.</li>
      </ul>
    </div>
  </div>

  <div className="flex gap-2 justify-center mt-3">
    <a
      href={oldProjects[1].github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-text-cream text-deep-navy px-2 py-0.5 font-mono text-xs font-bold rounded hover:bg-lime-accent hover:text-text-cream transition-colors duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      CODE
    </a>
  </div>
</div>


                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - 2/3 width - Full Height */}
              <div className="md:col-span-2 border-4 border-t-0 md:border-l-0 border-deep-navy" style={{ backgroundColor: '#DDEAF0' }}>
                {portfolioTabs.find(tab => tab.id === activePortfolioTab)?.panel}
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Contact Section Band */}
      <BrutalistSectionBand
        id="contact"
        title="CONTACT"
        backgroundColor="bg-deep-navy"
        textColor="soft-text"
        borderColor="#3B648C"
        rotation={-1}
      />

      {/* Scrolling Mantra Banner */}
      <div className="w-full overflow-hidden bg-deep-navy py-6" style={{ borderTop: '4px solid #fff6ee', borderBottom: '4px solid #fff6ee' }}>
        <div className="flex animate-scroll-left">
          <span className="flex-shrink-0 font-mono text-xl md:text-2xl font-bold tracking-wider uppercase whitespace-nowrap pr-12" style={{ color: '#fff6ee' }}>
            ✦ SHIP GREAT WORK ON TIME ✦ PM WHO CODES AND BUILDS ✦ DATA MEETS REAL CHOICES ✦ SYSTEMS THAT SCALE WELL ✦ CLEAR SCOPE ALWAYS WINS ✦ USERS OVER EGO COME FIRST ✦ OWN THE END TO END ✦ SIMPLE BEATS CLEVER TRICKS ✦ FAIL FAST FIX IT FASTER ✦ LAUNCH LEARN AND ITERATE
          </span>
          <span className="flex-shrink-0 font-mono text-xl md:text-2xl font-bold tracking-wider uppercase whitespace-nowrap pr-12" style={{ color: '#fff6ee' }}>
            ✦ SHIP GREAT WORK ON TIME ✦ PM WHO CODES AND BUILDS ✦ DATA MEETS REAL CHOICES ✦ SYSTEMS THAT SCALE WELL ✦ CLEAR SCOPE ALWAYS WINS ✦ USERS OVER EGO COME FIRST ✦ OWN THE END TO END ✦ SIMPLE BEATS CLEVER TRICKS ✦ FAIL FAST FIX IT FASTER ✦ LAUNCH LEARN AND ITERATE
          </span>
        </div>
      </div>



      {/* Footer Section */}
      <footer className="bg-deep-navy border-t-8 border-deep-navy" style={{ color: '#fff6ee' }}>
        <div className="w-full p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl ml-auto mr-32">
              <div className="text-left">
                <h4 className="font-mono text-lg font-bold mb-4 uppercase tracking-widest text-warm-orange">
                  QUICK LINKS
                </h4>
                <div className="space-y-2">
                  <a href="#experience" className="block font-bold transition-colors" style={{ color: '#fff6ee' }} onMouseEnter={(e) => e.currentTarget.style.color = '#7EA3BD'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff6ee'}>
                    EXPERIENCE
                  </a>
                  <a href="#skills" className="block font-bold transition-colors" style={{ color: '#fff6ee' }} onMouseEnter={(e) => e.currentTarget.style.color = '#7EA3BD'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff6ee'}>
                    SKILLS
                  </a>
                  <a href="#portfolio" className="block font-bold transition-colors" style={{ color: '#fff6ee' }} onMouseEnter={(e) => e.currentTarget.style.color = '#7EA3BD'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff6ee'}>
                    PORTFOLIO
                  </a>
                  <a href="#education" className="block font-bold transition-colors" style={{ color: '#fff6ee' }} onMouseEnter={(e) => e.currentTarget.style.color = '#7EA3BD'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff6ee'}>
                    EDUCATION
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block font-bold transition-colors" style={{ color: '#fff6ee' }} onMouseEnter={(e) => e.currentTarget.style.color = '#7EA3BD'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff6ee'}>
                    GITHUB
                  </a>
                </div>
              </div>

              <div className="text-left">
                <h4 className="font-mono text-lg font-bold mb-4 uppercase tracking-widest text-warm-orange">
                  CONNECT
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-3 border" style={{ backgroundColor: '#7EA3BD', borderColor: '#fff6ee' }}></div>
                    <span className="font-bold" style={{ color: '#fff6ee' }}>eric.mauro@hotmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-warm-orange mr-3 border border-text-cream"></div>
                    <span className="font-bold" style={{ color: '#fff6ee' }}>071-892-8364</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-3 border" style={{ backgroundColor: '#3B648C', borderColor: '#fff6ee' }}></div>
                    <span className="font-bold" style={{ color: '#fff6ee' }}>Cape Town, SA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-4 pt-6 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: '#7EA3BD' }}>
              <div className="px-4 py-2 font-mono text-sm font-bold border-2 mb-4 md:mb-0" style={{ backgroundColor: '#7EA3BD', color: '#0f2e5a', borderColor: '#fff6ee' }}>
                © 2025 ERIC AMBRIZA. ALL RIGHTS RESERVED.
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 border-2 shadow-pixel" style={{ backgroundColor: '#7EA3BD', borderColor: '#fff6ee' }}></div>
                <div className="w-8 h-8 bg-deep-navy border-2 shadow-pixel" style={{ borderColor: '#fff6ee' }}></div>
                <div className="w-8 h-8 border-2 shadow-pixel" style={{ backgroundColor: '#3B648C', borderColor: '#fff6ee' }}></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
