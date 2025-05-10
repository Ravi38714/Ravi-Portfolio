// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import Vit from './assets/education_logo/VIT-Logo.png';
import Sps from './assets/education_logo/SPS-Logo.jpg';

// Project Section Logo's
import Job_portal from './assets/work_logo/Job-Portal.png';
import AI_Fitness from './assets/work_logo/AI-Fitness.png';
import Typing_Speed from './assets/work_logo/Typing_Speed.png';
import Emoji_Translator from './assets/work_logo/Emoji_Translator.png';
import Sorting_Visualizer from './assets/work_logo/Sorting_Visualizer.png';
import Todo_List from './assets/work_logo/Todo_List.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: Vit,
      school: "Vellore Institute Of Technology, Bhopal",
      date: "Sept 2021 - Aug 2025",
      grade: "8.18 CGPA",
      desc: "I have completed my Bachelor’s degree (B.Tech) in Computer Science and Engineering from VIT Bhopal, where I built a strong foundation in programming, web development, and problem-solving. My coursework covered key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in technical workshops and events, which enhanced both my theoretical understanding and practical skills. My experience at VIT Bhopal has been instrumental in shaping my technical expertise and supporting my overall professional growth.",
    },
    {
      id: 1,
      img: Sps,
      school: "Sharada Public School",
      date: "Apr 2018 - May 2019",
      grade: "61.4%",
      desc: "I completed my class 12 education from Sharada Public School, Balrampur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: Sps,
      school: "Sharada Public School",
      date: "Apr 2016 - June 2017",
      grade: "91.2%",
      desc: "I completed my class 10 education from Sharada Public School, Balrampur, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Job Portal",
      description:
        "JobPortal is a full-stack web application built using the MERN stack, designed to connect job seekers with employers through a modern, efficient, and user-friendly platform. It allows job seekers to browse and apply for jobs, while employers can post listings and manage applications through a dedicated dashboard. The application features a component-based architecture with Redux for effective state management, and implements secure JWT-based authentication with role-based access control to ensure personalized access for job seekers, employers, and administrators.",
      image: Job_portal,
      tags: ["React JS", "Node JS", "MongoDB", "Express JS", "Tailwind CSS", "JWT", "Redux", "API"],
      github: "https://github.com/Ravi38714/Job_Portal-Dep",
      webapp: "https://job-portal-dep.onrender.com/",
    },
    {
      id: 1,
      title: "Sorting Visualizer",
      description:
        "Sorting Visualizer is a dynamic and interactive web application that demonstrates how various sorting algorithms work through real-time animations. The goal of the project is to help learners and developers understand the inner workings of algorithms like Bubble Sort, Selection Sort, Insertion Sort, and more by visually representing the sorting process in an engaging way.",
      image: Sorting_Visualizer,
      tags: ["React JS", "Vite", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Ravi38714/Sorting-Visualizer",
      webapp: "https://sorting-visualizer-omega-neon.vercel.app/",
    },
    {
      id: 2,
      title: "AI-Fitness",
      description:
        "Developed a responsive AI-driven fitness website featuring a real-time chatbot, voice assistant for coaching, and dynamic workout plans using DOM manipulation. Enhanced user experience with performance optimizations like lazy loading and asynchronous API calls.",
      image: AI_Fitness,
      tags: ["HTML", "CSS", "JavaScript", ],
      github: "https://github.com/Ravi38714/AI-Fitness",
      webapp: "https://ai-fitness-91dg.onrender.com/",
    },
    {
      id: 3,
      title: "Typing Speed",
      description:
        "The Typing Speed Tester is a simple React + Vite-based web application that helps users test and improve their typing speed and accuracy. It features a real-time timer, dynamic sentence highlighting for correct/incorrect characters, and calculates words per minute (WPM), accuracy percentage, and total time taken.",
      image: Typing_Speed,
      tags: ["React JS", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/Ravi38714/Typing-Speed",
      webapp: "https://typing-speed-bgk0.onrender.com/",
    },
    {
      id: 4,
      title: "Emoji Translator",
      description:
        "Emoji-Tran is a fun and interactive web application built using React that translates text-based expressions into meaningful emojis. The aim of the project is to provide an engaging way for users to express their thoughts visually, bridging communication gaps and making conversations more expressive.",
      image: Emoji_Translator,
      tags: ["JavaScript", "CSS", "React JS", "Vite"],
      github: "https://github.com/Ravi38714/Emoji-Translator",
      webapp: "https://emoji-translator-6bu9.onrender.com",
    },
    {
      id: 5,
      title: "Todo List",
      description:
        "This is a simple ToDo List web application that allows users to add, delete, and manage tasks. Built using HTML, CSS, and JavaScript, the app provides an interactive experience where tasks are stored in local storage to persist even after a page refresh. The application features an intuitive design and is fully responsive, making it a perfect project for those learning basic web development.",
      image: Todo_List,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ravi38714/Todo-List",
      webapp: "https://todo-list-8n1f.onrender.com/",
    },
    // {
    //   id: 1,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
  ];  