import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  root_image,
  jobit,
  tripguide,
  logojmk,
  resultmais,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Clean Code",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Autonomous",
    icon: logojmk,
    site: "",
    iconBg: "#E6DEDD",
    date: "March 2022 - At the moment",
    points: [
      "Developing and maintaining web applications, ensuring website availability, applying improvements to adapt to different screen sizes.",
      "We update old sites to receive improvements and security fixes.",
    ],
  },
  {
    title: "Technical Support",
    company_name: "Result Mais Sistemas",
    icon: resultmais,
    site: "http://www.resultmais.com",
    iconBg: "#E6DEDD",
    date: "February 2017 - March 2022",
    points: [
      "Customer service via telephone and remote access, answering questions and correcting system failures.",
      "After the programmers fixed the flaw, we tested the fix outside of the production environment and then it was shown and passed on to the customer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jonas proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jonas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jonas optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task Manager",
    description:
      "Web application that helps to organize the deadlines of new tasks and the delivery of old ones. With sound alerts to facilitate the delivery of new tasks. Having an easy dashboard to manage all tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "red-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: root_image,
    source_code_link: "/taskmanager",
  },
];

export { services, technologies, experiences, testimonials, projects };
