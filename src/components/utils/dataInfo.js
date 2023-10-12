/* eslint-disable no-unused-vars */
import Ideate from '../../assets/ideate.webp';
import Design from '../../assets/design.webp';
import Develop from '../../assets/develop.webp';

import project1 from '../../assets/project1.webp';
import project3 from '../../assets/project3.webp';
import project5 from '../../assets/project5.webp';
import project4 from '../../assets/project4.webp';

export const socialMidiaContact = [
  {
    id: 1,
    contact: 'Linkedin',
    socialMidiaName: 'Kapi#8423',
    ruta: 'https://www.linkedin.com/in/duarte-karen/'
  },
  {
    id: 3,
    contact: 'Behance',
    socialMidiaName: 'karenduarte21',
    ruta: 'https://www.behance.net/karenduarte21'
  },
  {
    id: 4,
    contact: 'Github',
    socialMidiaName: 'DuarteKa',
    ruta: 'https://github.com/Duarteka'
  }
  // {
  //   id: 5,
  //   contact: 'Email',
  //   socialMidiaName: 'Karen',
  //   route: 'mailto:kaptemia@gmail.com'
  // }
];

export const navLinks = [
  {
    id: 1,
    text: 'Projects',
    path: '/seemore'
  },
  {
    id: 2,
    text: 'About',
    path: '/about'
  },
  {
    id: 3,
    text: 'Contact',
    path: '/contact'
  }
];

export const projects = [
  {
    id: 1,
    name: 'chaoscosmos',
    title: 'Chaos cosmos',
    image: project1,
    images: [project1, project3, project5, project4],
    link: '/project1',
    rol: 'development, ux',
    number: '01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 2,
    name: 'mediterranean',
    title: 'Mediterranean',
    image: project3,
    images: [project1, project3, project5, project4],
    link: '/project2',
    rol: ' design development, ux',
    number: '02',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 3,
    name: 'coffeshop',
    title: 'Coffe Shop',
    image: project5,
    images: [project1, project3, project5, project4],
    link: '/project3',
    rol: 'development, ux',
    number: '03',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 4,
    name: 'designportfolio',
    title: 'Design Portfolio',
    image: project4,
    images: [project1, project3, project5, project4],
    link: '/project4',
    rol: 'development, ux',
    number: '04',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  }
];

export const sections = [
  {
    id: 1,
    title: 'Ideate',
    image: Ideate,
    alt: 'First image',
    description:
      'First things first, determine what goals the new website or app needs to meet. That&#39;s, what is it is purpose. It is the initial stage to understand how I can integrate or start in the project. This includes exploring and answering important questions like brand attributes, audience, creative brief, etc.',

    textInfiniteh2: [
      { id: 1, text: 'DESIGN THINKING' },
      { id: 2, text: 'BRAIN STORM' },
      { id: 3, text: 'USER STRATEGY' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'NOTION' },
      { id: 2, text: ' PAPER' },
      { id: 3, text: 'NOTEPAD' },
      { id: 4, text: 'A NON-LINEAR PROCESS' }
    ]
  },
  {
    id: 2,
    title: 'Design',
    image: Design,
    alt: 'Second image',
    description:
      'I&#39;ts common for websites to gradually expand, evolve, or completely change during the design process. This is not necessarily a problem for designers; it just means more work. However, if expectations do not match the level of work required, projects can quickly become unrealistic. <br />  <br /> To ensure achievable deadlines and dates, I will work with schedules and to-do lists. I will also collaborate with my team to address any issues that are likely to arise.',

    textInfiniteh2: [
      { id: 1, text: 'UI/HTML5 ' },
      { id: 2, text: 'WIREFRAMING' },
      { id: 3, text: 'PROTOTYPING' },
      { id: 4, text: 'CMS' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'ANTDESIGN' },
      { id: 2, text: 'FIGMA' },
      { id: 3, text: 'ADOBE' },
      { id: 4, text: 'ADOBE XD' },
      { id: 5, text: 'ILLUSTRATOR' },
      { id: 6, text: 'WEBFLOW' },
      { id: 7, text: 'CSS3' },
      { id: 8, text: 'STYLED ' }
    ]
  },
  {
    id: 3,
    title: 'Develop',
    image: Develop,
    alt: 'Third image',
    description:
      'Once the wireframes are complete and the information architecture of the website is laid out, it&#39;s time to create a visual design that comes close to the deliverable. <br/> <br/> After that, the real magic begins. I will use React to build and run the components, and some libraries to control the CSS styles. <br/> <br/> In case the project requires the use of another technology, I&#39;m adaptable.',

    textInfiniteh2: [
      { id: 1, text: 'UNIT TEST' },
      { id: 2, text: ' CONTROL VERSION' },
      { id: 3, text: 'USER TESTING' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'JAVASCRIPT' },
      { id: 2, text: ' REACT JS' },
      { id: 3, text: 'GSAP' },
      { id: 4, text: 'HTML ' },
      { id: 5, text: 'TYPESCRIPT' },
      { id: 6, text: 'NODE JS' },
      { id: 7, text: 'JEST ' },
      { id: 8, text: 'REDUX RTK ' },
      { id: 9, text: 'WEBPACK ' },
      { id: 10, text: 'Core Web Vitals' }
    ]
  }
];
