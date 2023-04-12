import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Owoyomi Taiwo ',
  title: "Hi all, I'm Taiwo",
  description:
    "I'm passionate Full Stack Engineer having an experience in web applications with Python, Django, Flask and Blockchain development on Ethereum, Solidity, Web3.js, Golang, and Brownie Framework.",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'owoyomi20',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/owoyomitaiwoadeyemi-/',
  github: 'https://github.com/owoyomi20',
  instagram: 'https://www.instagram.com/am_sylver_vert',
  twitter: 'https://twitter.com/Im_Heka2pac',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'A PASSIONATE SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ BUilt Fullstack AirBnB Clone Using HTML, CSS, Javscript and Flask'),
          
        emoji('⚡ Building RESTful APIs in Flask & Flask REST Framework'),

        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Flask',
          fontAwesomeClassName: 'logos:flask',
        },
        {
          skillName: 'Celery',
          fontAwesomeClassName: 'simple-icons:celery',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Go',
          fontAwesomeClassName: 'logos:go',
        },

      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Digital Ocean',
          fontAwesomeClassName: 'logos:digital-ocean',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
    
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '30', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Federal University Of Technology Akure', 
    subHeader: 'B.Tech in Physics Electronics',
    duration: 'September 2015 - December 2021',
    desc: 'Participated in the research of Peaceful use of Nuclear waste and published 3 papers.',
    grade: 'Grade B',
    descBullets: [
      'Strengthening quantitative reasoning and problem solving skills that are valuable in areas beyond physics',
      'Acquired skills in electrical circuit analysis and design, analog and digital electronics, embedded systems, and communication systems',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Jr Web Developer',
    company: 'Island Computer ',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },

  {
    role: 'Software Engineer Intern',
    company: 'ALX Africa',
    companyLogo: '',
    date: 'May 2021 - Apr 2022',
    desc: 'I joined ALX Africa as an intern student in software engineering and completed a 12-month programme that taught me web development from the ground up. I learned how to use HTML, CSS, JavaScript, React, Node.js, and MongoDB to create web applications. I also learned how to use Git, GitHub, and AWS for version control and cloud deployment. I applied my skills and knowledge to several projects, such as a portfolio website, a blog app, and a social media clone. I also accessed The ROOM, a network of opportunities and a community to support my career growth.',
  },

];

export const projects: ProjectType[] = [
  {
    name: 'My personal portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/owoyomi20/My-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'TYcrm',
    desc: 'My project is a web application that helps users manage their customers and sales. It uses Django for the backend and Tailwind CSS for the frontend. It has features like contact management, lead tracking, invoice generation, email communication, and dashboard reports. It is deployed on Digital Ocean and uses PostCSS for processing the CSS files.',
    github: 'https://github.com/#',
  },
  {
    name: 'Airbnb Clone ',
    desc: 'My project is a web application that allows users to find and book rooms or apartments for short-term stays. It is inspired by the popular platform Airbnb, but with my own design and features. I used Flask as the backend framework to handle the logic and data of the app, and HTML and CSS to create the front end interface.',
     
    github: 'https://github.com/owoyomi20/AirBnB_clone_v4',
  },
  {
    name: 'Flask  (Ecommerce)',
    desc: 'Flask Fullstack ',
    github: 'https://github.com/owoyomi20/Flask_Ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Ibitoye Esther',
    feedback:
      'You have delivered a fantastic web development project for us. You have impressed us with your quality, functionality, and design. You have been professional, creative, and responsive throughout the process. You have completed the project on time and within budget. Thank you for your excellent work and dedication!',
  },
  {
    name: 'Awoyemi Oluwasegun David',
    feedback:
      'I am very pleased with the website you created for my business. It is attractive, functional, and user-friendly. It showcases my products and services in a professional and appealing way. It also has a fast loading speed, a responsive design, and a secure payment system. The website has increased my online presence and sales. Thank you for your excellent work and service.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Owoyomi Taiwo Adeyemi Rehoboam ',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Hanzla Tauqeer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://',
  keywords: [
    'Taiwo',
    'Adeyemi taiwo',
    'owoyomi20',
    'owoyomi20',
    'Portfolio',
    'Taiwo Portfolio ',
    'Owoyomi Taiwo',
  ],
};