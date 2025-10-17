'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, education, certifications, personalInfo } from '@/data/resume';
import { newProjects, oldProjects, projects } from '@/data/projects';
import BrutalistSectionBand from '@/components/BrutalistSectionBand';
import BrutalistNavigation from '@/components/BrutalistNavigation';
import SplitTabs, { SplitTab } from '@/components/SplitTabs';

// Experience tabs data for home page with original card format
const experienceTabs: SplitTab[] = [
  {
    id: "dimagi",
    label: "DIMAGI",
    panel: (
      <div className="bg-lime-accent text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Company Header */}
        <div className="bg-teal-accent text-deep-navy p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            DIMAGI
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            SENIOR PROJECT ANALYST
          </p>
          <div className="bg-lime-accent text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            2020 - Present
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Led end-to-end digital health projects on CommCare across Sub-Saharan Africa, owning scoping, build, QA, deployment, and partner communication.
          </p>

          <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY ACHIEVEMENTS
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Led end-to-end digital health projects on CommCare across Sub-Saharan Africa, owning scoping, build, QA, deployment, and partner communication.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Built Superset and Power BI dashboards by exporting and cleaning CommCare data to deliver actionable insights to stakeholders.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Integrated DHIS2 and other systems with CommCare to improve interoperability and reporting quality.</span>
            </li>
          </ul>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-lime-accent border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-warm-orange border-l-2 border-deep-navy transform -translate-y-1/2"></div>
      </div>
    ),
  },
  {
    id: "pr-chivas",
    label: "PERNOD RICARD / CHIVAS",
    panel: (
      <div className="bg-lime-accent text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Company Header */}
        <div className="bg-teal-accent text-deep-navy p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            PERNOD RICARD / CHIVAS
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            BRAND AMBASSADOR
          </p>
          <div className="bg-lime-accent text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            2019
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.
          </p>

          <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY ACHIEVEMENTS
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Planned and executed events and activations end to end, including budgets, suppliers, and post-event analysis.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Produced quarterly reports with market intelligence and competitor insights to optimize promotions.</span>
            </li>
          </ul>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-lime-accent border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-warm-orange border-l-2 border-deep-navy transform -translate-y-1/2"></div>
      </div>
    ),
  },
  {
    id: "vodacom",
    label: "VODACOM MOZAMBIQUE",
    panel: (
      <div className="bg-lime-accent text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Company Header */}
        <div className="bg-teal-accent text-deep-navy p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            VODACOM MOZAMBIQUE
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            BILLING APPLICATIONS SPECIALIST
          </p>
          <div className="bg-lime-accent text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            2014 - 2019
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Operated USSD self-care, registration, recharge, and SMS systems serving 11M+ subscribers; ensured availability and reliability.
          </p>

          <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY ACHIEVEMENTS
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Operated USSD self-care, registration, recharge, and SMS systems serving 11M+ subscribers; ensured availability and reliability.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Administered CRM application and SFTP billing file-transfer platform; improved secure data flows between systems.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Developed and integrated web services on GlassFish/Payara; built database code with Oracle PL/SQL on Linux.</span>
            </li>
          </ul>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-lime-accent border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-warm-orange border-l-2 border-deep-navy transform -translate-y-1/2"></div>
      </div>
    ),
  },
  {
    id: "bcx-mozal",
    label: "BUSINESS CONNEXION @ MOZAL",
    panel: (
      <div className="bg-lime-accent text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Company Header */}
        <div className="bg-teal-accent text-deep-navy p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            BUSINESS CONNEXION @ MOZAL
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            DESKTOP DEPLOYMENT ENGINEER
          </p>
          <div className="bg-lime-accent text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            2013
          </div>
        </div>

        {/* Job Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Deployed Desktop images via PXE/media and migrated users from Windows XP to Windows 7 with on-site support and training.
          </p>

          <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY ACHIEVEMENTS
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Deployed Desktop images via PXE/media and migrated users from Windows XP to Windows 7 with on-site support and training.</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Delivered a five-month rollout in three months by streamlining imaging, data migration, and user handover.</span>
            </li>
          </ul>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-lime-accent border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-warm-orange border-l-2 border-deep-navy transform -translate-y-1/2"></div>
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
      <div className="bg-warm-orange text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-warm-orange border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            GLOBAL ENVIRONMENTAL IMPACT CALCULATOR
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            REACT, JAVASCRIPT, CHART.JS
          </p>
          <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            WEB APPLICATION
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Interactive web application for calculating and visualizing environmental impact metrics with real-time data processing and responsive charts.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-teal border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Real-time environmental impact calculations with interactive data visualization</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-teal border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Responsive charts and graphs using Chart.js for data presentation</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-teal border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Modern React architecture with component-based design</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={newProjects[0].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-teal text-deep-navy px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-lime-accent transition-colors duration-200 cursor-pointer">
              LIVE DEMO
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-teal border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-deep-navy border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Extended space to match old projects height */}
        <div className="bg-gradient-to-br from-warm-orange/10 to-deep-navy/10 min-h-[200px]">
        </div>
      </div>
    ),
  },
  {
    id: "pmp-drill-coach",
    label: "PMP DRILL COACH",
    panel: (
      <div className="bg-teal-accent text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-teal-accent border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            PMP DRILL COACH
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            REACT, NODE.JS, EXPRESS
          </p>
          <div className="bg-teal-accent text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            EDUCATION PLATFORM
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Project Management Professional exam preparation tool featuring interactive quizzes, progress tracking, and comprehensive study materials.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Interactive quiz system with progress tracking and performance analytics</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Comprehensive study materials organized by PMP knowledge areas</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Full-stack application with React frontend and Node.js backend</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={newProjects[1].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-warm-orange text-deep-navy px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-lime-accent transition-colors duration-200 cursor-pointer">
              LIVE DEMO
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-warm-orange border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-teal-accent border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Extended space to match old projects height */}
        <div className="bg-gradient-to-br from-teal-accent/10 to-deep-navy/10 min-h-[200px]">
        </div>
      </div>
    ),
  },
  {
    id: "coronagora",
    label: "CORONAGORA",
    panel: (
      <div className="bg-mint text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-mint border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            CORONAGORA
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            NEXT.JS, CHART.JS, VERCEL
          </p>
          <div className="bg-mint text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            DATA VISUALIZATION
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Comprehensive COVID-19 tracker built with Next.js featuring real-time data visualization, interactive charts, and responsive design for tracking pandemic statistics.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Real-time COVID-19 data tracking with global and regional statistics</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Interactive charts and data visualization using Chart.js</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Deployed on Vercel with optimized performance and SEO</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={oldProjects[0].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <a 
              href={oldProjects[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-label-purple text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-warm-orange transition-colors duration-200"
            >
              LIVE SITE
            </a>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-label-purple border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-mint border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Extended space to match old projects height */}
        <div className="bg-gradient-to-br from-mint/10 to-deep-navy/10 min-h-[200px]">
        </div>
      </div>
    ),
  },
  {
    id: "python-reports",
    label: "PYTHON REPORTS",
    panel: (
      <div className="bg-sky-blue text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-sky-blue border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            PYTHON REPORTS
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            PYTHON, DATA ANALYSIS
          </p>
          <div className="bg-sky-blue text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            AUTOMATION TOOLS
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Data analysis and reporting tools built with Python. Showcases data processing, visualization, and automated report generation capabilities.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Automated data processing and analysis workflows</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Dynamic report generation with data visualization</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Scalable Python architecture for enterprise reporting</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={oldProjects[2].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-warm-orange text-deep-navy px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-lime-accent transition-colors duration-200 cursor-pointer">
              DOCUMENTATION
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-warm-orange border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-sky-blue border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Extended space to match old projects height */}
        <div className="bg-gradient-to-br from-sky-blue/10 to-deep-navy/10 min-h-[200px]">
        </div>
      </div>
    ),
  },
  {
    id: "portfolio-website",
    label: "PORTFOLIO WEBSITE",
    panel: (
      <div className="bg-label-purple text-text-cream border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-label-purple border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            PORTFOLIO WEBSITE
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            NEXT.JS, REACT, TAILWIND CSS
          </p>
          <div className="bg-label-purple text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            PERSONAL PORTFOLIO
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Modern, responsive portfolio website built with Next.js featuring interactive animations, brutalist design theme, and optimized performance.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Brutalist design system with bold typography and geometric layouts</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Interactive animations using Framer Motion for smooth transitions</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Optimized Next.js architecture with server-side rendering</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={newProjects[2].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-warm-orange hover:text-deep-navy transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-warm-orange text-deep-navy px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-teal transition-colors duration-200 cursor-pointer">
              LIVE SITE
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-warm-orange border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-label-purple border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Extended space to match old projects height */}
        <div className="bg-gradient-to-br from-label-purple/10 to-deep-navy/10 min-h-[200px]">
        </div>
      </div>
    ),
  },
  {
    id: "wine-quality",
    label: "WINE QUALITY ANALYSIS",
    panel: (
      <div className="bg-butter-yellow text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-butter-yellow border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            WINE QUALITY ANALYSIS
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            R, DATA ANALYSIS, STATISTICS
          </p>
          <div className="bg-butter-yellow text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            STATISTICAL ANALYSIS
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Statistical analysis of wine quality using R programming. Includes comprehensive data visualization, correlation analysis, and predictive modeling techniques.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Comprehensive statistical analysis using R programming language</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Advanced data visualization with correlation matrices and plots</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-label-purple border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Predictive modeling for wine quality assessment</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={oldProjects[3].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-label-purple text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-warm-orange transition-colors duration-200 cursor-pointer">
              ANALYSIS REPORT
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-label-purple border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-butter-yellow border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Placeholder space for future content - integrated */}
        <div className="bg-gradient-to-br from-butter-yellow/10 to-deep-navy/10 border-t-4 border-deep-navy border-dashed p-8 flex items-center justify-center min-h-[200px]">
          <div className="text-deep-navy/40 font-mono text-lg font-bold uppercase tracking-wider text-center">
            <div>ADDITIONAL CONTENT</div>
            <div className="text-sm mt-2">PLACEHOLDER SPACE</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "image-slider",
    label: "IMAGE SLIDER",
    panel: (
      <div className="bg-teal text-deep-navy border-4 border-deep-navy overflow-hidden relative">
        {/* Project Header */}
        <div className="bg-deep-navy text-text-cream p-6 border-b-4 border-deep-navy relative">
          <div className="absolute top-4 right-4 w-6 h-6 bg-teal border-2 border-deep-navy shadow-pixel"></div>
          <h3 className="font-display text-2xl md:text-3xl font-black mb-2 uppercase tracking-wider">
            IMAGE SLIDER
          </h3>
          <p className="font-mono text-lg font-bold uppercase tracking-widest">
            REACT, MATERIAL UI, AXIOS
          </p>
          <div className="bg-teal text-deep-navy px-3 py-1 inline-block font-mono text-sm font-bold mt-2 border-2 border-deep-navy">
            UI COMPONENT
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <p className="text-lg mb-6 leading-relaxed font-bold">
            Interactive React carousel component with Axios integration and Material UI styling. Demonstrates modern React patterns and API integration techniques.
          </p>

          <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-sm font-bold mb-4 uppercase">
            KEY FEATURES
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Interactive carousel with smooth transitions and touch support</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">API integration using Axios for dynamic content loading</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 bg-warm-orange border-2 border-white mr-4 mt-1 flex-shrink-0 shadow-pixel"></div>
              <span className="text-base leading-relaxed">Material UI components for consistent design system</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a 
              href={oldProjects[1].github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-navy text-text-cream px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-label-purple transition-colors duration-200"
            >
              VIEW CODE
            </a>
            <div className="bg-warm-orange text-deep-navy px-4 py-2 inline-block font-mono text-sm font-bold hover:bg-lime-accent transition-colors duration-200 cursor-pointer">
              LIVE DEMO
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-warm-orange border-2 border-white"></div>
        <div className="absolute top-1/2 right-0 w-2 h-8 bg-teal border-l-2 border-deep-navy transform -translate-y-1/2"></div>
        
        {/* Placeholder space for future content - integrated */}
        <div className="bg-gradient-to-br from-teal/10 to-deep-navy/10 border-t-4 border-deep-navy border-dashed p-8 flex items-center justify-center min-h-[200px]">
          <div className="text-deep-navy/40 font-mono text-lg font-bold uppercase tracking-wider text-center">
            <div>ADDITIONAL CONTENT</div>
            <div className="text-sm mt-2">PLACEHOLDER SPACE</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function BrutalistCV() {
  const [currentTime, setCurrentTime] = useState('');
  const [expandedCerts, setExpandedCerts] = useState<Set<number>>(new Set());
  const [activePortfolioTab, setActivePortfolioTab] = useState('global-env-calc');

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

      {/* HOME Section - Deep Navy background, accents in Teal and Label Purple */}
      <section id="hero" className="bg-deep-navy soft-text p-8 pt-24 relative overflow-hidden scroll-mt-20 global-border">
        <div className="absolute top-4 right-4">
          <div className="bg-teal text-deep-navy px-4 py-2 font-mono text-sm font-bold global-border shadow-brutal">
            AVAILABLE FOR HIRE
          </div>
        </div>

        <div className="w-full px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none mb-4 relative">
              <span className="relative z-10">ERIC</span>
              <span className="absolute top-2 left-2 text-teal-accent opacity-70 -z-10">ERIC</span>
            </h1>
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none mb-8 relative">
              <span className="relative z-10">AMBRIZA</span>
              <span className="absolute top-2 left-2 text-label-purple opacity-70 -z-10">AMBRIZA</span>
            </h1>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <h2 className="font-mono text-2xl font-bold text-teal mb-4 uppercase tracking-widest">
                DIGITAL HEALTH SPECIALIST
              </h2>
              <p className="text-xl leading-relaxed mb-6 soft-text">
                Graduated with Honors in Computer Science with a focus on software development, database management, and systems analysis. Currently leading digital health projects across Sub-Saharan Africa, specializing in scalable mobile applications and data solutions for international NGOs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-teal text-deep-navy p-4 global-border shadow-brutal">
                <p className="font-mono font-bold">LOCATION: CAPE TOWN, SA [{currentTime}]</p>
              </div>
              <div className="text-deep-navy p-4 global-border inner-cream shadow-brutal" style={{ backgroundColor: '#7EA3BD', boxShadow: 'inset 0 0 0 2px var(--text-cream)' }}>
                <p className="font-mono font-bold">EMAIL: eric.mauro@hotmail.com</p>
              </div>
              <div className="bg-teal text-deep-navy p-4 global-border shadow-brutal">
                <p className="font-mono font-bold">PHONE: 071-892-8364</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-label-purple global-border shadow-brutal"></div>
        <div className="absolute top-1/2 right-16 w-8 h-8 bg-teal global-border shadow-brutal"></div>
      </section>

      {/* Experience Section Band */}
      <BrutalistSectionBand
        id="experience"
        title="EXPERIENCE"
        backgroundColor="bg-lime-accent"
        textColor="text-deep-navy"
        borderColor="border-deep-navy"
        rotation={-1}
      />

      {/* EXPERIENCE Section - Split Tabs with Mint and Lime styling */}
      <section className="bg-mint text-deep-navy border-b-8 border-lime-accent">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="[&_.brutal-border]:border-deep-navy [&_.brutal-border]:border-4 [&_button]:bg-lime-accent [&_button]:text-deep-navy [&_button]:border-deep-navy [&_button.bg-\\[var\\(--secondary\\)\\]]:bg-teal-accent [&_button.bg-\\[var\\(--secondary\\)\\]]:text-deep-navy [&_[role=tabpanel]]:bg-mint">
              <SplitTabs tabs={experienceTabs} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section Band */}
      <BrutalistSectionBand
        id="education"
        title="EDUCATION"
        backgroundColor="bg-label-purple"
        textColor="text-text-cream"
        borderColor="border-deep-navy"
        rotation={1}
      />

      {/* EDUCATION Section */}
      <section className="bg-sky-blue text-deep-navy border-b-8 border-label-purple">
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
              <div className="md:col-span-2">
                <div className="bg-warm-orange text-deep-navy p-4 border-4 border-deep-navy shadow-brutal">
                  <h3 className="font-display text-2xl font-black uppercase tracking-wider text-center">
                    DEGREES
                  </h3>
                </div>
                
                {/* Degrees Table Layout - Full Height */}
                <div className="flex flex-col h-full">
                  {/* Primary Degree - Takes 60% of available space */}
                  <div className="bg-text-cream text-deep-navy p-6 border-4 border-t-0 border-deep-navy shadow-brutal flex-1 flex flex-col justify-between min-h-[400px]">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-label-purple border-4 border-deep-navy shadow-pixel flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-text-cream border-2 border-deep-navy"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display text-xl font-black mb-2 uppercase tracking-wider leading-tight">
                            B.SC. (HONS) COMPUTER SCIENCE
                          </h4>
                          <p className="font-mono text-sm font-bold uppercase tracking-widest mb-2 text-warm-orange">
                            GRADUATED WITH HONORS
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="bg-warm-orange text-deep-navy px-3 py-1 inline-block font-mono text-xs font-bold border-2 border-deep-navy">
                          ISCTEM - MOZAMBIQUE
                        </div>
                        <div className="bg-teal text-deep-navy px-3 py-1 inline-block font-mono text-xs font-bold border-2 border-deep-navy ml-2">
                          2010 - 2014
                        </div>
                      </div>
                      <p className="text-sm font-bold leading-relaxed">
                        Software development, database management, and systems analysis.
                      </p>
                    </div>
                    {/* Placeholder space for future images */}
                    <div className="flex-1 min-h-[200px] bg-gradient-to-br from-warm-orange/10 to-teal/10 border-2 border-dashed border-deep-navy/30 mt-6 flex items-center justify-center">
                      <div className="text-deep-navy/40 font-mono text-sm font-bold uppercase tracking-wider">
                        IMAGE PLACEHOLDER
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Education - Takes 40% of available space */}
                  <div className="bg-mint text-deep-navy p-6 border-4 border-t-0 border-deep-navy shadow-brutal flex-1 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-warm-orange border-4 border-deep-navy shadow-pixel flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-deep-navy border border-text-cream"></div>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-display text-lg font-black mb-2 uppercase tracking-wider leading-tight">
                            MBA IN OIL AND GAS
                          </h5>
                          <p className="font-mono text-xs font-bold uppercase tracking-widest mb-2 text-label-purple">
                            INCOMPLETE - CAREER PIVOT
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-label-purple text-text-cream px-3 py-1 inline-block font-mono text-xs font-bold border-2 border-deep-navy">
                          ISCTEM - MOZAMBIQUE
                        </div>
                        <div className="bg-deep-navy text-text-cream px-3 py-1 inline-block font-mono text-xs font-bold border-2 border-deep-navy ml-2">
                          2016 - TRANSITIONED TO TECH
                        </div>
                      </div>
                    </div>
                    {/* Placeholder space for future images */}
                    <div className="flex-1 min-h-[120px] bg-gradient-to-br from-label-purple/10 to-deep-navy/10 border-2 border-dashed border-deep-navy/30 mt-4 flex items-center justify-center">
                      <div className="text-deep-navy/40 font-mono text-xs font-bold uppercase tracking-wider">
                        IMAGE PLACEHOLDER
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: CERTIFICATIONS (65% - 3 columns out of 5) */}
              <div className="md:col-span-3">
                <div className="bg-label-purple text-text-cream p-4 border-4 border-deep-navy shadow-brutal">
                  <h3 className="font-display text-2xl font-black uppercase tracking-wider text-center">
                    CERTIFICATIONS
                  </h3>
                </div>
                
                {/* Certifications Table Layout */}
                <div>
                  {certifications.map((cert, index) => (
                    <div key={index} className={`border-4 border-t-0 border-deep-navy shadow-brutal transition-all duration-200 ${
                      index % 3 === 0 ? 'bg-text-cream text-deep-navy' : 
                      index % 3 === 1 ? 'bg-mint text-deep-navy' : 
                      'bg-teal-accent text-deep-navy'
                    }`}>
                      {/* Main Certification Row - Clickable */}
                      <button
                        onClick={() => {
                          const newExpanded = new Set(expandedCerts);
                          if (expandedCerts.has(index)) {
                            newExpanded.delete(index);
                          } else {
                            newExpanded.add(index);
                          }
                          setExpandedCerts(newExpanded);
                        }}
                        className="w-full p-4 text-left hover:scale-102 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-deep-navy focus:ring-inset"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-mono text-sm font-bold uppercase leading-tight">
                                {cert.name}
                              </h4>
                              <div className={`w-4 h-4 border-2 border-deep-navy flex items-center justify-center transition-transform duration-200 ${
                                expandedCerts.has(index) ? 'rotate-180' : ''
                              }`}>
                                <div className="w-2 h-2 bg-deep-navy transform rotate-45"></div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <div className="bg-deep-navy text-text-cream px-2 py-1 font-mono text-xs font-bold border border-deep-navy">
                                {cert.issuer}
                              </div>
                              <div className="bg-warm-orange text-deep-navy px-2 py-1 font-mono text-xs font-bold border border-deep-navy">
                                {cert.date}
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
                                className="bg-label-purple text-text-cream px-3 py-2 font-mono text-xs font-bold border-2 border-deep-navy hover:bg-warm-orange hover:text-deep-navy transition-colors duration-200"
                              >
                                VERIFY
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
                            <div className="p-4 bg-deep-navy text-text-cream">
                              {cert.description && (
                                <div className="mb-4">
                                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-warm-orange">
                                    DESCRIPTION
                                  </h5>
                                  <p className="text-sm font-bold leading-relaxed">
                                    {cert.description}
                                  </p>
                                </div>
                              )}
                              {cert.skills && cert.skills.length > 0 && (
                                <div>
                                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-teal">
                                    SKILLS COVERED
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, skillIndex) => (
                                      <div
                                        key={skillIndex}
                                        className="bg-text-cream text-deep-navy px-2 py-1 font-mono text-xs font-bold border border-text-cream"
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
        borderColor="border-color-border"
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
        backgroundColor="bg-warm-orange"
        textColor="text-deep-navy"
        borderColor="border-deep-navy"
        rotation={1}
      />

      {/* PORTFOLIO Section - Custom Split Layout */}
      <section className="bg-peach text-deep-navy border-b-8 border-warm-orange">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Custom Portfolio Layout */}
            <div className="grid md:grid-cols-3">
              
              {/* Left Sidebar - 1/3 width */}
              <div className="md:col-span-1 border-4 border-t-0 border-deep-navy bg-white flex flex-col">
                
                {/* Main Project Buttons - Top Section */}
                <div>
                  {portfolioTabs.slice(0, 3).map((tab, index) => {
                    const selected = activePortfolioTab === tab.id;
                    const isLast = index === 2;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActivePortfolioTab(tab.id)}
                        className={`relative w-full text-left px-4 py-5 ${isLast ? 'border-b-0' : 'border-b'} transition-all duration-300 ${
                          selected 
                            ? "bg-deep-navy text-text-cream shadow-brutal" 
                            : "bg-warm-orange text-deep-navy hover:bg-teal-accent"
                        } border-deep-navy`}
                      >
                        <span className="font-bold uppercase tracking-wide">
                          {tab.label}
                        </span>
                        {selected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-warm-orange"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Old Projects Section - Connected to last button */}
                <div>
                  {/* Old Projects Header */}
                  <div className="bg-deep-navy text-text-cream p-4 border-b-4 border-deep-navy">
                    <h4 className="font-display text-sm font-black uppercase tracking-wider text-center">
                      OLD PROJECTS
                    </h4>
                  </div>
                  
                  {/* Old Projects Grid - Perfect Squares (each = half width of header) */}
                  <div className="bg-mint">
                    <div className="grid grid-cols-2">
                      
                      {/* Image Slider - Top Left */}
                      <div className="bg-royal-blue text-text-cream border-4 border-t-0 border-deep-navy shadow-pixel hover:scale-105 transition-transform duration-200 cursor-pointer aspect-square flex flex-col justify-between p-2">
                        <div className="text-center">
                          <h5 className="font-mono text-xs font-bold uppercase leading-tight mb-1">
                            IMAGE SLIDER
                          </h5>
                          <div className="bg-text-cream text-deep-navy px-1 py-0.5 inline-block font-mono text-xs font-bold mb-1">
                            REACT
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-xs leading-tight mb-2 text-text-cream">
                            React carousel component with Axios integration and Material UI styling
                          </p>
                          <a 
                            href={oldProjects[1].github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-text-cream text-deep-navy px-2 py-1 font-mono text-xs font-bold hover:bg-warm-orange hover:text-deep-navy transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                      
                      {/* Wine Quality - Top Right */}
                      <div className="bg-label-purple text-text-cream border-4 border-t-0 border-l-0 border-deep-navy shadow-pixel hover:scale-105 transition-transform duration-200 cursor-pointer aspect-square flex flex-col justify-between p-2">
                        <div className="text-center">
                          <h5 className="font-mono text-xs font-bold uppercase leading-tight mb-1">
                            WINE QUALITY
                          </h5>
                          <div className="bg-text-cream text-deep-navy px-1 py-0.5 inline-block font-mono text-xs font-bold mb-1">
                            R
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-xs leading-tight mb-2 text-text-cream">
                            R-based wine quality analysis with correlation matrices and predictive models
                          </p>
                          <a 
                            href={oldProjects[3].github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-text-cream text-deep-navy px-2 py-1 font-mono text-xs font-bold hover:bg-warm-orange hover:text-deep-navy transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                      
                      {/* Coronagora - Bottom Left */}
                      <div className="bg-matrix-black text-text-cream border-4 border-t-0 border-deep-navy shadow-pixel hover:scale-105 transition-transform duration-200 cursor-pointer aspect-square flex flex-col justify-between p-2">
                        <div className="text-center">
                          <h5 className="font-mono text-xs font-bold uppercase leading-tight mb-1">
                            CORONAGORA
                          </h5>
                          <div className="bg-text-cream text-deep-navy px-1 py-0.5 inline-block font-mono text-xs font-bold mb-1">
                            NEXT.JS
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-xs leading-tight mb-2 text-text-cream">
                            Next.js COVID-19 tracker with Chart.js visualizations and Vercel deployment
                          </p>
                          <div className="flex gap-1 justify-center">
                            <a 
                              href={oldProjects[0].github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-text-cream text-deep-navy px-1 py-1 font-mono text-xs font-bold hover:bg-warm-orange transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              CODE
                            </a>
                            <a 
                              href={oldProjects[0].url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-warm-orange text-deep-navy px-1 py-1 font-mono text-xs font-bold hover:bg-teal transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              LIVE
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Python Reports - Bottom Right */}
                      <div className="bg-lime text-deep-navy border-4 border-t-0 border-l-0 border-deep-navy shadow-pixel hover:scale-105 transition-transform duration-200 cursor-pointer aspect-square flex flex-col justify-between p-2">
                        <div className="text-center">
                          <h5 className="font-mono text-xs font-bold uppercase leading-tight mb-1">
                            PYTHON REPORTS
                          </h5>
                          <div className="bg-deep-navy text-text-cream px-1 py-0.5 inline-block font-mono text-xs font-bold mb-1">
                            PYTHON
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-xs leading-tight mb-2">
                            Python tools for data processing, visualization, and automated report generation
                          </p>
                          <a 
                            href={oldProjects[2].github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-deep-navy text-text-cream px-2 py-1 font-mono text-xs font-bold hover:bg-teal hover:text-deep-navy transition-colors duration-200"
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
              <div className="md:col-span-2 border-4 border-t-0 border-l-0 border-deep-navy bg-peach min-h-[600px]">
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
        backgroundColor="bg-teal"
        textColor="text-deep-navy"
        borderColor="border-deep-navy"
        rotation={-1}
      />

      {/* CONTACT Section - Creative Grid Layout */}
      <section className="bg-butter-yellow text-deep-navy">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Grid - Connected Elements */}
            <div className="grid md:grid-cols-3 min-h-[400px]">
              
              {/* Left Column: Contact Info */}
              <div className="bg-teal text-deep-navy border-4 border-t-0 border-deep-navy shadow-brutal flex flex-col">
                {/* Header */}
                <div className="bg-deep-navy text-text-cream p-4 border-b-4 border-deep-navy">
                  <h3 className="font-display text-xl font-black uppercase tracking-wider text-center">
                    GET IN TOUCH
                  </h3>
                </div>
                
                {/* Contact Details */}
                <div className="flex-1 p-6 flex flex-col justify-center space-y-6">
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-deep-navy border-2 border-deep-navy mr-4 flex items-center justify-center group-hover:bg-warm-orange transition-colors duration-200">
                      <div className="w-4 h-4 bg-teal border border-deep-navy"></div>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-deep-navy/70">EMAIL</div>
                      <span className="font-bold text-lg">eric.mauro@hotmail.com</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-deep-navy border-2 border-deep-navy mr-4 flex items-center justify-center group-hover:bg-warm-orange transition-colors duration-200">
                      <div className="w-4 h-4 bg-teal border border-deep-navy"></div>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-deep-navy/70">PHONE</div>
                      <span className="font-bold text-lg">071-892-8364</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-8 h-8 bg-deep-navy border-2 border-deep-navy mr-4 flex items-center justify-center group-hover:bg-warm-orange transition-colors duration-200">
                      <div className="w-4 h-4 bg-teal border border-deep-navy"></div>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-deep-navy/70">LOCATION</div>
                      <span className="font-bold text-lg">Cape Town, SA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column: Availability & Status */}
              <div className="bg-warm-orange text-deep-navy border-4 border-t-0 border-l-0 border-deep-navy shadow-brutal flex flex-col">
                {/* Header */}
                <div className="bg-deep-navy text-text-cream p-4 border-b-4 border-deep-navy">
                  <h3 className="font-display text-xl font-black uppercase tracking-wider text-center">
                    AVAILABILITY
                  </h3>
                </div>
                
                {/* Status Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="bg-teal text-deep-navy px-3 py-2 inline-block font-mono text-sm font-bold mb-4 border-2 border-deep-navy">
                      CURRENTLY AVAILABLE
                    </div>
                    <p className="font-bold mb-6 leading-relaxed">
                      Open to freelance projects and full-time opportunities in digital health, 
                      data analysis, and mobile application development.
                    </p>
                  </div>
                  
                  {/* Specializations */}
                  <div>
                    <div className="font-mono text-xs font-bold uppercase tracking-wider mb-3 text-deep-navy/70">
                      SPECIALIZATIONS
                    </div>
                    <div className="space-y-2">
                      <div className="bg-deep-navy text-text-cream px-2 py-1 inline-block font-mono text-xs font-bold mr-2">
                        DIGITAL HEALTH
                      </div>
                      <div className="bg-label-purple text-text-cream px-2 py-1 inline-block font-mono text-xs font-bold mr-2">
                        DATA ANALYSIS
                      </div>
                      <div className="bg-teal text-deep-navy px-2 py-1 inline-block font-mono text-xs font-bold">
                        PROJECT MANAGEMENT
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions & Links */}
              <div className="bg-label-purple text-text-cream border-4 border-t-0 border-l-0 border-deep-navy shadow-brutal flex flex-col">
                {/* Header */}
                <div className="bg-deep-navy text-text-cream p-4 border-b-4 border-deep-navy">
                  <h3 className="font-display text-xl font-black uppercase tracking-wider text-center">
                    TAKE ACTION
                  </h3>
                </div>
                
                {/* Action Buttons */}
                <div className="flex-1 p-6 flex flex-col justify-center space-y-4">
                  <a 
                    href={personalInfo.resumeDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-text-cream text-deep-navy p-4 font-mono text-sm font-bold border-4 border-deep-navy hover:bg-warm-orange hover:scale-105 transition-all duration-200 text-center uppercase tracking-wider"
                  >
                    DOWNLOAD CV
                  </a>
                  
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="bg-warm-orange text-deep-navy p-4 font-mono text-sm font-bold border-4 border-deep-navy hover:bg-teal hover:scale-105 transition-all duration-200 text-center uppercase tracking-wider"
                  >
                    SEND EMAIL
                  </a>
                  
                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal text-deep-navy p-4 font-mono text-sm font-bold border-4 border-deep-navy hover:bg-text-cream hover:scale-105 transition-all duration-200 text-center uppercase tracking-wider"
                  >
                    VIEW GITHUB
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-deep-navy text-text-cream border-t-8 border-teal">
        <div className="w-full p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-display text-2xl font-black mb-4 uppercase tracking-wider text-teal">
                  ERIC AMBRIZA
                </h3>
                <p className="font-bold text-text-cream leading-relaxed">
                  Digital Health Specialist & Data Analyst based in Cape Town, South Africa.
                </p>
              </div>
              
              <div>
                <h4 className="font-mono text-lg font-bold mb-4 uppercase tracking-widest text-warm-orange">
                  QUICK LINKS
                </h4>
                <div className="space-y-2">
                  <a href="#experience" className="block font-bold text-text-cream hover:text-teal transition-colors">
                    EXPERIENCE
                  </a>
                  <a href="#skills" className="block font-bold text-text-cream hover:text-teal transition-colors">
                    SKILLS
                  </a>
                  <a href="#portfolio" className="block font-bold text-text-cream hover:text-teal transition-colors">
                    PORTFOLIO
                  </a>
                  <a href="#education" className="block font-bold text-text-cream hover:text-teal transition-colors">
                    EDUCATION
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-mono text-lg font-bold mb-4 uppercase tracking-widest text-warm-orange">
                  CONNECT
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal mr-3 border border-text-cream"></div>
                    <span className="font-bold text-text-cream">eric.mauro@hotmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-warm-orange mr-3 border border-text-cream"></div>
                    <span className="font-bold text-text-cream">071-892-8364</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-label-purple mr-3 border border-text-cream"></div>
                    <span className="font-bold text-text-cream">Cape Town, SA</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t-4 border-teal pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="bg-teal text-deep-navy px-4 py-2 font-mono text-sm font-bold border-2 border-text-cream mb-4 md:mb-0">
                © 2025 ERIC AMBRIZA. ALL RIGHTS RESERVED.
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-warm-orange border-2 border-text-cream shadow-pixel"></div>
                <div className="w-8 h-8 bg-label-purple border-2 border-text-cream shadow-pixel"></div>
                <div className="w-8 h-8 bg-teal border-2 border-text-cream shadow-pixel"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}