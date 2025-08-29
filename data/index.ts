export const navItems = [
  { name: "About", link: "#about" }, // grid.jsx
  { name: "Projects", link: "#projects" }, // RecentProjects.tsx
  { name: "Value", link: "#testimonials" }, // Experience.jsx
  { name: "Contact", link: "#contact" }, // Footer.jsx
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Team collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable Developer with a Growth Mindset",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Innovating with Code and Problem Solver",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Software Developer - Seeking New Opportunities",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DocNest- A Collaborative Application",
    des: "Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, DocNest is a clone of Goole Docs. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact.",
    img: "/docnest.png",
    iconLists: ["/re.svg", "/liveblock.png", "/le.png", "/shadcn.png"],
    link: "https://doc-nest-teal.vercel.app/",
  },
  {
    id: 2,
    title: "CareerMind AI -  AI Career Coach",
    des: "CareerMind AI is a cutting-edge AI-powered career coach designed to transform how users prepare for, pursue, and grow in their careers. Built with modern full stack technologies, CareerMind AI offers intelligent, personalized support across every stage of the job search.",
    img: "/logopro.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.png"],
    link: "https://career-mind-ai-pearl.vercel.app/",
  },

  {
    id: 3,
    title: "HireElite - Job Portal",
    des: "HireElite is a modern job portal designed to seamlessly connect job seekers with employers. This full-stack web application streamlines job applications, employer job postings, and automated email notifications for relevant job opportunities.",
    img: "/we1.png",
    iconLists: ["/react.png", "/tail.svg", "/js.jpg", "/redux.png"],
    link: "https://hire-elite-seven.vercel.app/",
  },

  {
    id: 4,
    title: "CarePlus- HealthCare Application",
    des: "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
    img: "/hecare.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwr.png"],
    link: "https://carepulse-kohl-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Threads- Full Stack Application",
    des: "Develop Threads, Next.js 13 app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!",
    img: "/thread.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/rhf.png",
      "/mongo.png",
      "/zod.png",
    ],
    link: "https://github.com/dev-SachinPrajapati/Threads",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/dev-SachinPrajapati/Animated_Portfolio_web",
  },
];

export const testimonials = [
  {
    quote:
      "Adaptable, self-driven, and always eager to learn — I bring a problem-solving mindset and full-stack development experience from multiple real-world projects and internships.",
    name: "Sachin Prajapati",
    title: "Aspiring Software Development Engineer",
  },
  {
    quote:
      "Great communication skills and a strong team player — known for contributing to both group projects and open collaboration efforts.",
    name: "Personal Highlight",
    title: "Team Collaboration",
  },
  {
    quote:
      "I bring hands-on experience from real-world internships and full-stack projects — building scalable applications using the MERN stack, Next.js, and Java backends.",
    name: "Why Hire Me?",
    title: "Industry-Ready Skills",
  },
  {
     quote:
      "I adapt quickly to new tools and environments, thrive in fast-paced settings, and love learning from challenges — ideal traits for early-stage product teams.",
    name: "Why Hire Me?",
    title: "Growth Mindset",
  },
  {
    quote:
      "Built and deployed production-ready full-stack applications using MERN, Next.js, and Java — with focus on performance, scalability, and clean code.",
    name: "What I Bring",
    title: "Full-Stack Development",
  },
];

export const companies = [
  {
    id: 1,
    name: "React",
    img: "/react.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Developer Intern - Neuronetic Vision",
//     desc: "Collaborated with frontend, backend, and AI teams to build and optimize web applications using Next.js and React; designed user interfaces in Figma, integrated APIs, and supported AWS-based deployments.",
//     className: "md:col-span-2",
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 2,
//     title: "Full Stack Developer Intern - Intellectsia AI Services",
//     desc: "Developed full-stack web applications using Angular, Spring Boot, and SQL; optimized API performance and implemented caching strategies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp2.svg",
//   },
//     {
//     id: 3,
//     title: "Backend Development Intern - Engaze",
//     desc: "Built and tested RESTful APIs using Node.js and Express.js, and improved backend reliability through debugging and logging tools.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
// ];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern - Neuronetic Vision",
    company: "Neuronetic Vision",
    companyLink: "https://www.linkedin.com/company/neuronetic-vision/", 
    date: "July 2025 - Present",
    type: "Remote",
    desc: "Collaborated with frontend, backend, and AI teams to build and optimize web applications using Next.js and React; designed user interfaces in Figma, integrated APIs, and supported AWS-based deployments.",
    responsibilities: [
      "Built responsive UIs with Next.js and React",
      "Worked closely with the AI team to integrate ML-based features",
      "Collaborated with backend and AWS team for API integration & deployments",
      "Created design prototypes in Figma and optimized UX"
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern - Intellectsia AI Services",
    company: "Intellectsia AI Services",
    companyLink: "https://www.linkedin.com/company/intellectsia-ai-services/", 
    date: "Dec 2024 - Jan 2025",
    type: "Onsite",
    desc: "Developed full-stack web applications using Angular, Spring Boot, and SQL; optimized API performance with caching strategies, designed and maintained database schemas, and collaborated with cross-functional teams to ensure scalable, secure, and responsive user experiences.",
    // desc: "Developed full-stack web applications using Angular, Spring Boot, and SQL; optimized API performance and implemented caching strategies.",
    responsibilities: [
      "Designed and implemented RESTful APIs with Spring Boot",
      "Enhanced SQL queries for performance optimization",
      "Developed scalable UI components with Angular",
      "Collaborated with cross-functional teams to deliver projects on time"
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Backend Development Intern - Engaze",
    company: "Engaze",
    companyLink: "https://www.linkedin.com/company/engaze-in/",
    date: "Dec 2023 - Jan 2024",
    type: "Remote",
    desc: "Built and tested RESTful APIs using Node.js and Express.js; improved backend reliability through debugging and logging tools, implemented authentication and authorization mechanisms, and worked with frontend teams to ensure seamless API integration and performance.",
    // desc: "Built and tested RESTful APIs using Node.js and Express.js, and improved backend reliability through debugging and logging tools.",
    responsibilities: [
      "Developed secure REST APIs with Node.js & Express",
      "Implemented logging & debugging tools for backend stability",
      "Wrote unit tests to ensure API reliability",
      "Tested and documented APIs using Postman for QA and debugging"
    ],
    thumbnail: "/exp1.svg",
  },
];


export const learningExperience = [
  {
    id: 1,
    title: "MERN Stack Projects & Learning",
    desc: "Built real-world apps including collaborative editors, job portals, and healthcare dashboards using React, Node.js, MongoDB, and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Self-Driven Product Development",
    desc: "Designed and shipped full-stack projects like DocNest and CareerMind AI, applying system design and real-world problem-solving approaches.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
{
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dev-SachinPrajapati", 
  },
  {
    id: 2,
    img: "/cnsimg.svg",
    link: "https://www.naukri.com/code360/profile/57b94bcc-9d37-4680-866a-b519f4600d39", 
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/sachin-prajapati-it", 
  },
];