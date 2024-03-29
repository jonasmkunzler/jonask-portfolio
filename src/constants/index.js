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
  root_image_project_one,
  root_image_project_sec,
  logojmk,
  resultmais
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Fully Responsive',
    icon: web
  },
  {
    title: 'Clean Code',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'Freelancer',
    company_name: 'JK Web Developer',
    icon: logojmk,
    site: '',
    iconBg: '#E6DEDD',
    date: 'March 2022 - At the moment',
    points: [
      'Developing and maintaining web applications, ensuring website availability, applying improvements to adapt to different screen sizes.',
      'We update old sites to receive improvements and security fixes.'
    ]
  },
  {
    title: 'IT Analyst',
    company_name: 'Result Mais Sistemas',
    icon: resultmais,
    site: 'http://www.resultmais.com',
    iconBg: '#E6DEDD',
    date: 'February 2017 - March 2022',
    points: [
      'Implemented and monitored integrations with other systems.',
      'Interacted with companies to understand their processes, business requirements, and integrated them into the ERP workflow.',
      'Conducted meetings with the business team to design and implement system modifications.',
      'Facilitated mediation in accounting-related issues between clients and the accounting office.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'We had a huge gain in organization with the use of the application developed by Jonas, which certainly helped us to reach victory in the 2023 edition.',
    name: 'Igor',
    designation: 'Leader',
    company: 'Selvagens Team',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jonas does.",
    name: 'Lu',
    designation: 'Leader',
    company: 'Box 360 Team',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Jonas optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa',
    designation: 'Leader',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Task Manager',
    description:
      'Web application that helps to organize the deadlines of new tasks and the delivery of old ones. With sound alerts to facilitate the delivery of new tasks. Having an easy dashboard to manage all tasks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'red-text-gradient'
      },
      {
        name: 'MUI',
        color: 'pink-text-gradient'
      }
    ],
    image: root_image_project_one,
    source_code_link: '/taskmanager'
  },
  {
    name: 'HR Ecommerce',
    description:
      'It will be an e-commerce platform with payment integration and shipping calculation. Under Construction...',
    tags: [
      {
        name: 'nextjs 13.4',
        color: 'blue-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'red-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      },
      {
        name: 'firebase',
        color: 'blue-text-gradient'
      }
    ],
    image: root_image_project_sec,
    source_code_link: 'https://hr-ecommerce.vercel.app/'
  }
]

export { services, technologies, experiences, testimonials, projects }
