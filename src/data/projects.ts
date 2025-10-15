export interface Project {
  slug: string;
  title: string;
  blurb: string;
  url?: string;
  github?: string;
  embed?: string;
  image?: string;
  category: string;
}

// New projects (featured first)
export const newProjects: Project[] = [
  {
    slug: 'global-environmental-impact-calculator',
    title: 'Global Environmental Impact Calculator',
    blurb:
      'Interactive web application for calculating and visualizing environmental impact metrics with real-time data processing and responsive charts.',
    github: 'https://github.com/eambriza/global-environmental-impact-calculator',
    image: 'global-environmental-impact-calculator.JPG',
    category: 'React, JavaScript, Chart.js',
  },
  {
    slug: 'pmp-drill-coach',
    title: 'PMP Drill Coach',
    blurb:
      'Project Management Professional exam preparation tool featuring interactive quizzes, progress tracking, and comprehensive study materials.',
    github: 'https://github.com/eambriza/pmp-drill-coach',
    image: 'pmp-drill-coach.JPG',
    category: 'React, Node.js, Express',
  },
  {
    slug: 'eric-ambriza-cv',
    title: 'Eric Ambriza CV',
    blurb:
      'Modern, responsive portfolio website built with Next.js featuring interactive animations, dark theme, and optimized performance.',
    github: 'https://github.com/eambriza/Eric-Ambriza---CV',
    image: 'eric-ambriza-cv.JPG',
    category: 'Next.js, React, Tailwind CSS',
  },
];

// Older projects
export const oldProjects: Project[] = [
  {
    slug: 'coronagora',
    title: 'CoronAgora',
    blurb:
      'A comprehensive COVID-19 tracker built with Next.js featuring real-time data visualization, interactive charts, and responsive design for tracking pandemic statistics.',
    url: 'https://coronagora.com/',
    github: 'https://github.com/eambriza/coronagora',
    image: 'coronagora.JPG',
    category: 'Next.js, React, Chart.js, Vercel',
  },
  {
    slug: 'image-slider',
    title: 'Image Slider',
    blurb:
      'Interactive React carousel component with Axios integration and Material UI styling. Demonstrates modern React patterns and API integration.',
    github: 'https://github.com/eambriza/imageslider_axios',
    image: 'imageslider.JPG',
    category: 'React JS, Material UI',
  },
  {
    slug: 'python-reports',
    title: 'Python Reports',
    blurb:
      'Data analysis and reporting tools built with Python. Showcases data processing, visualization, and automated report generation capabilities.',
    github: 'https://github.com/eambriza/Python_Reports',
    image: 'python.JPG',
    category: 'Python',
  },
  {
    slug: 'wine-quality',
    title: 'Wine Quality Analysis',
    blurb:
      'Statistical analysis of wine quality using R programming. Includes data visualization, correlation analysis, and predictive modeling.',
    github: 'https://github.com/eambriza/Wine-Quality---R',
    image: 'wine.JPG',
    category: 'R, Data Analysis',
  },
];

// Combined array for compatibility
export const projects: Project[] = [...newProjects, ...oldProjects];
