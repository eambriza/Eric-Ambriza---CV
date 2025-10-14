export interface Project {
  slug: string;
  title: string;
  blurb: string;
  url?: string;
  embed?: string;
  image?: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: 'coronagora',
    title: 'CoronAgora',
    blurb:
      'A comprehensive Corona app tracker built with Next.js and deployed on Vercel. Features real-time data visualization and responsive design.',
    url: 'https://coronagora.com/',
    image: 'coronagora.JPG',
    category: 'Next.js, Vercel',
  },
  {
    slug: 'image-slider',
    title: 'Image Slider',
    blurb:
      'Interactive React carousel component with Axios integration and Material UI styling. Demonstrates modern React patterns and API integration.',
    url: 'https://github.com/eambriza/imageslider_socketIO',
    image: 'imageslider.JPG',
    category: 'React JS, Material UI',
  },
  {
    slug: 'python-reports',
    title: 'Python Reports',
    blurb:
      'Data analysis and reporting tools built with Python. Showcases data processing, visualization, and automated report generation capabilities.',
    url: 'https://github.com/eambriza/Python_Reports',
    image: 'python.JPG',
    category: 'Python',
  },
  {
    slug: 'wine-quality',
    title: 'Wine Quality Analysis',
    blurb:
      'Statistical analysis of wine quality using R programming. Includes data visualization, correlation analysis, and predictive modeling.',
    url: 'https://github.com/eambriza/Wine-Quality---R',
    image: 'wine.JPG',
    category: 'R, Data Analysis',
  },
];
