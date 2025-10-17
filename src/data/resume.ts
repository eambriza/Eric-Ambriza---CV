export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  resumeDownload: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface WorkExperience {
  company: string;
  title: string;
  years: string;
  description: string;
  bullets?: string[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  sortDate: string; // For sorting purposes
  icon: string; // Icon identifier
  credentialLink?: string;
  description?: string;
  skills?: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Eric Ambriza',
  title: 'Senior Project Analyst & Digital Health Specialist',
  bio: "Graduated with Honors in Computer Science with a focus on software development, database management, and systems analysis. Currently leading digital health projects across Sub-Saharan Africa, specializing in scalable mobile applications and data solutions for international NGOs.",
  email: 'eric.mauro@hotmail.com',
  phone: '071-892-8364',
  github: 'https://github.com/eambriza?tab=repositories',
  resumeDownload:
    'https://drive.google.com/file/d/1S6Xf4VCKK7lsJqgzJ9W1oBf5QqAhamtO/view?usp=sharing',
  address: {
    street: '4th Ave, Rondebosh East 141',
    city: 'Cape Town',
    state: 'Western Cape',
    zip: '7780',
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Dimagi',
    title: 'Senior Project Analyst',
    years: '2020 - Present',
    description: 'Led end-to-end digital health projects on CommCare across Sub-Saharan Africa, owning scoping, build, QA, deployment, and partner communication.',
    bullets: [
      'Led end-to-end digital health projects on CommCare across Sub-Saharan Africa, owning scoping, build, QA, deployment, and partner communication.',
      'Built Superset and Power BI dashboards by exporting and cleaning CommCare data to deliver actionable insights to stakeholders.',
      'Integrated DHIS2 and other systems with CommCare to improve interoperability and reporting quality.',
      'Planned budgets, timelines, risks, and resources; delivered on time and within scope on projects totaling $300k+.',
      'Trained end users, produced release notes, and monitored usage to drive adoption and data quality.'
    ]
  },
  {
    company: 'Pernod Ricard / Chivas',
    title: 'Brand Ambassador',
    years: '2019',
    description: 'Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.',
    bullets: [
      'Delivered brand education sessions and tastings for trade partners to grow advocacy for Chivas portfolio.',
      'Planned and executed events and activations end to end, including budgets, suppliers, and post-event analysis.',
      'Ran local social media campaigns and content; tracked engagement and proposed new promotional initiatives.',
      'Produced quarterly reports with market intelligence and competitor insights to optimize promotions.'
    ]
  },
  {
    company: 'Vodacom Mozambique',
    title: 'Billing Applications Specialist',
    years: '2014 - 2019',
    description: 'Operated USSD self-care, registration, recharge, and SMS systems serving 11M+ subscribers; ensured availability and reliability.',
    bullets: [
      'Operated USSD self-care, registration, recharge, and SMS systems serving 11M+ subscribers; ensured availability and reliability.',
      'Administered CRM application and SFTP billing file-transfer platform; improved secure data flows between systems.',
      'Developed and integrated web services on GlassFish/Payara; built database code with Oracle PL/SQL on Linux.',
      'Acted as focal point for IT Security, Audit, and Governance; improved integrations and code quality across the stack.',
      'Promoted from Coordinator to Specialist; served as technical lead on complex billing projects.'
    ]
  },
  {
    company: 'Business Connexion @ Mozal',
    title: 'Desktop Deployment Engineer',
    years: '2013',
    description: 'Deployed Desktop images via PXE/media and migrated users from Windows XP to Windows 7 with on-site support and training.',
    bullets: [
      'Deployed Desktop images via PXE/media and migrated users from Windows XP to Windows 7 with on-site support and training.',
      'Delivered a five-month rollout in three months by streamlining imaging, data migration, and user handover.'
    ]
  }
];

export const education: Education[] = [
  {
    school: 'ISCTEM – Instituto Superior de Ciências e Tecnologia de Moçambique',
    degree: 'B.Sc. (Hons) in Computer Science',
    graduated: '2010 - 2014',
  },
  {
    school: 'ISCTEM – Instituto Superior de Ciências e Tecnologia de Moçambique',
    degree: 'MBA in Oil and Gas (Incomplete)',
    graduated: '2016 - Not Finished',
  },
];

export const skills: Skill[] = [
  {
    category: 'Tech Stack',
    items: ['Python', 'PL/SQL', 'JavaScript', 'Linux', 'Git']
  },
  {
    category: 'Data & BI',
    items: ['Power BI', 'Superset', 'Tableau', 'MySQL']
  },
  {
    category: 'Project Management',
    items: ['Agile', 'Scrum', 'PMP', 'Jira', 'Asana', 'ClickUp', 'Confluence']
  },
  {
    category: 'Digital Health & Systems',
    items: ['CommCare', 'CRM integration']
  },
  {
    category: 'Soft Skills',
    items: ['Leadership & Team Management', 'Cross-Cultural Communication', 'Problem Solving & Critical Thinking', 'Stakeholder Engagement']
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'Portuguese (Native)', 'Changana (Fluent)']
  }
];

export const certifications: Certification[] = [
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    date: 'Jun 2025',
    sortDate: '2025-06',
    icon: 'pmi',
    credentialLink: 'https://www.credly.com/badges/11fac0e0-9459-4789-aba3-9fdf7b6910ee/linked_in_profile',
    description: 'Globally recognized certification demonstrating expertise in project management across industries and methodologies.',
    skills: ['Project Planning', 'Risk Management', 'Stakeholder Management', 'Agile Methodologies', 'Budget Management', 'Quality Control']
  },
  {
    name: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: 'Oct 2025',
    sortDate: '2025-10',
    icon: 'deeplearning',
    credentialLink: 'https://learn.deeplearning.ai/accomplishments/60524dbf-7170-481d-ae37-a16ff0d18117?usp=sharing',
    description: 'Advanced techniques for building applications with large language models using effective prompt engineering strategies.',
    skills: ['Prompt Engineering', 'LLM Integration', 'AI Application Development', 'Natural Language Processing']
  },
  {
    name: 'Generative AI for Project Managers',
    issuer: 'SkillUP',
    date: 'Oct 2025',
    sortDate: '2025-10',
    icon: 'skillup',
    credentialLink: 'https://www.coursera.org/account/accomplishments/specialization/QODSWCLCPBM2',
    description: 'Specialized training on leveraging generative AI tools and techniques to enhance project management efficiency and decision-making.',
    skills: ['AI-Powered Project Planning', 'Automated Reporting', 'Risk Assessment with AI', 'Team Productivity Enhancement']
  },
  {
    name: 'ClickUp Expert Certificate of Completion',
    issuer: 'ClickUp',
    date: 'Sep 2025',
    sortDate: '2025-09',
    icon: 'clickup',
    credentialLink: 'https://verify.skilljar.com/c/v2gzoznuvzhz',
    description: 'Comprehensive mastery of ClickUp platform for project management, team collaboration, and workflow optimization.',
    skills: ['Project Management', 'Team Collaboration', 'Workflow Automation', 'Task Management', 'Reporting & Analytics']
  },
  {
    name: 'Generative AI for Software Development',
    issuer: 'DeepLearning.AI',
    date: 'Aug 2025',
    sortDate: '2025-08',
    icon: 'deeplearning',
    credentialLink: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/JL5NRNOAK7R1',
    description: 'Comprehensive course on integrating generative AI into software development workflows, including code generation and optimization.',
    skills: ['AI-Assisted Coding', 'Code Generation', 'Software Architecture with AI', 'Development Workflow Optimization']
  },
  {
    name: 'Google Project Management Professional Certificate',
    issuer: 'Coursera',
    date: 'Feb 2025',
    sortDate: '2025-02',
    icon: 'coursera',
    credentialLink: 'https://www.credly.com/badges/0abd5e6c-ca34-4b6c-a298-0a9591726620/linked_in_profile',
    description: 'Comprehensive project management program covering traditional and agile methodologies, with hands-on experience using industry tools.',
    skills: ['Project Initiation', 'Planning & Execution', 'Agile Management', 'Risk Management', 'Stakeholder Communication', 'Google Workspace']
  },
  {
    name: 'Marketing Analytics Foundation',
    issuer: 'Meta',
    date: 'Dec 2022',
    sortDate: '2022-12',
    icon: 'meta',
    credentialLink: 'https://coursera.org/share/7339d986a9aa18df58daadf40dc656e6',
    description: 'Foundational course in marketing analytics covering data collection, analysis, and interpretation for marketing decision-making.',
    skills: ['Data Analysis', 'Marketing Metrics', 'Campaign Performance', 'Customer Insights', 'ROI Analysis']
  },
  {
    name: 'Nanodegree in Data Analysis',
    issuer: 'Udacity',
    date: '2018',
    sortDate: '2018-01',
    icon: 'udacity',
    credentialLink: 'https://confirm.udacity.com/your-nanodegree-id',
    description: 'Intensive program covering the complete data analysis workflow from data wrangling to statistical analysis and visualization.',
    skills: ['Python Programming', 'Data Wrangling', 'Statistical Analysis', 'Data Visualization', 'Pandas & NumPy', 'Jupyter Notebooks']
  },
  {
    name: 'MySQL & Linux Intermediate',
    issuer: 'Cenfoss',
    date: '2017',
    sortDate: '2017-01',
    icon: 'cenfoss',
    description: 'Intermediate-level training in MySQL database administration and Linux system management for enterprise environments.',
    skills: ['MySQL Administration', 'Database Optimization', 'Linux System Administration', 'Shell Scripting', 'Server Management']
  }
].sort((a, b) => b.sortDate.localeCompare(a.sortDate)); // Sort by date descending (newest first)
