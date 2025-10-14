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
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
}

export interface Skill {
  name: string;
  level: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Eric Ambriza',
  title: 'Full Stack Developer & Data Analyst',
  bio: "I'm a young man, full of dreams… I have Honors degree in Computer Science and I also have a partial MBA in oil and gas. I also have a Nanodegree in Data Analysis at Udacity and a CAPM exam preparation at Udemy.",
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
    company: 'Pernod Ricard Mozambique',
    title: 'Chivas Brand Ambassador',
    years: 'March 2019 - December 2019',
    description:
      'Responsible for brand promotion and customer engagement, building relationships with key stakeholders and driving brand awareness in the premium spirits market.',
  },
  {
    company: 'Vodacom Mozambique',
    title: 'Billing Application Specialist',
    years: 'September 2014 - February 2019',
    description:
      'Managed billing systems and applications, ensuring accurate customer billing processes and resolving technical issues. Worked closely with cross-functional teams to optimize billing workflows.',
  },
  {
    company: 'Business Connection at Mozal Mozambique',
    title: 'Desktop Deployment Engineer',
    years: '2013',
    description:
      'Responsible for deploying desktop images via PXE boot or media build, migration of users from Windows XP to Windows 7 environment. Directly engaged with the Mozal user base as the face of the project.',
  },
];

export const education: Education[] = [
  {
    school: 'Udacity',
    degree: 'Nanodegree in Data Analysis',
    graduated: '2018',
  },
  {
    school: 'ISCTEM – Instituto Superior De Ciências e Tecnologia de Moçambique',
    degree: 'MBA in Oil and Gas',
    graduated: '2016 – Not Finished',
  },
  {
    school: 'ISCTEM – Instituto Superior De Ciências e Tecnologia de Moçambique',
    degree: 'Honors in Computer Science',
    graduated: '2014',
  },
];

export const skills: Skill[] = [
  { name: 'ReactJs', level: '70%' },
  { name: 'PL SQL', level: '55%' },
  { name: 'CSS', level: '55%' },
  { name: 'Python', level: '50%' },
  { name: 'R', level: '50%' },
  { name: 'TABLEAU', level: '50%' },
  { name: 'LINUX', level: '40%' },
];
