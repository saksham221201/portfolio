// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import kafkaLogo from './assets/tech_logo/kafka.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import intelliJ from './assets/tech_logo/intelliJ.png';

// Experience Section Logo's
import nagarroLogo from './assets/company_logo/nagarro.png';

// Education Section Logo's
import psitLogo from './assets/education_logo/psit.png';
import schoolLogo from './assets/education_logo/school.jpg';

// Project Section Logo's
import inApp from './assets/work_logo/in-app.jpg';
import ecommerceLogo from './assets/work_logo/ecommerce.png';
import bankingLogo from './assets/work_logo/banking.jpg';


export const SkillsInfo = [
  {
    title: 'Backend',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Kafka', logo: kafkaLogo }
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'IntelliJ', logo: intelliJ },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nagarroLogo,
      role: "Engineer",
      company: "Nagarro",
      date: "January 2025 - Present",
      desc: "Led the backend development of an In-App Notification System built on a Microservices architecture, leveraging Kafka for asynchronous messaging. Designed and implemented services for message validation, processing, storage (MongoDB), and real-time push delivery via Firebase. Created a reusable Kafka producer module to streamline integration across services.",
      skills: [
        "Java",
        "SpringBoot",
        "Apache Kafka",
        "MongoDB",
        "MySQL"
      ],
    },
    {
      id: 1,
      img: nagarroLogo,
      role: "Associate Engineer",
      company: "Nagarro",
      date: "Feburary 2024 - December 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as Java, SpringBoot, HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Delivered high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "Java",
        "SpringBoot",
        "ReactJS",
        "Redux",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: psitLogo,
      school: "Pranveer Singh Institute of Technology",
      date: "August 2019 - July 2023",
      grade: "7.64 CGPA",
      desc: "I have completed my Bachelor of Technology in Computer Science from PSIT, Kanpur. During my time at PSIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I secured an B grade in TECHEXPO 2022, a project display contest organized by PSIT.",
      degree: "Bachelor of Technology in Computer Science - B.Tech",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "United Public School, Kanpur",
      date: "Apr 2018 - March 2019",
      grade: "77.6%",
      desc: "I completed my class 12 education from United Public School, Kanpur, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "ISC(XII) - PCM",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "United Public School, Kanpur",
      date: "Apr 2016 - March 2017",
      grade: "87.3%",
      desc: "I completed my class 10 education from United Public School, Kanpur, under the ICSE board, where I studied Physics, Chemistry, Biology and Mathematics (PCMB).",
      degree: "ICSE(X) - Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "In-App Notification System",
      description:
        "Project aimed at developing an in-app notification module using microservices architecture and Kafka-based asynchronous messaging. The system consisted of services to consume, validate, process, store, and forward messages across the platform. Kafka messages were validated and processed asynchronously, mapped and stored via a MongoDB-based CRUD service, and passed to another microservice responsible for sending silent push notifications via Firebase to end users. A reusable Kafka producer JAR was built to allow other services to publish messages efficiently. The application was containerized, deployed on Kubernetes with support for autoscaling, and managed using Azure DevOps pipelines.",
      image: inApp,
      tags: ["Java", "Spring Boot", "Kafka", "Redis", "Microservices", "SQL", "MongoDB"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS"
    },
    {
      id: 1,
      title: "E-commerce Application",
      description:
        "Project involved working on an e-commerce application with functionalities such as product catalogue, cart service, Spring JWT for authentication, and many more.",
      image: ecommerceLogo,
      tags: ["Microservices", "Spring Boot", "HTML5", "CSS3", "JavaScript", "SQL", "Java", "ReactJS", "Redux"],
      github: "https://github.com/codingmastr/CSPrep"
    },
    {
      id: 2,
      title: "Banking Application",
      description:
        "Project involved creating a solution for banking application requirements using a Microservices architecture.",
      image: bankingLogo,
      tags: ["Microservices", "Spring Boot", "Java"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App"
    }
  ];  