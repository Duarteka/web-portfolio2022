import Ideate from '../../assets/ideate.webp';
import Design from '../../assets/design.webp';
import Develop from '../../assets/develop.webp';

import project1 from '../../assets/project1.jpg';
import project3 from '../../assets/project3.jpg';
import project5 from '../../assets/project5.png';

export const socialMidiaContact = [
  {
    id: 1,
    contact: 'Discord',
    socialMidiaName: 'Kapi#8423',
    route: 'https://discord.gg/tP3mH56w'
  },
  {
    id: 3,
    contact: 'Behance',
    socialMidiaName: 'karenduarte21',
    route: 'https://www.behance.net/karenduarte21'
  },
  {
    id: 4,
    contact: 'Github',
    socialMidiaName: 'DuarteKa',
    route: 'https://github.com/Duarteka'
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
    title: 'Chaos cosmos',
    image: project1,
    link: '/project1',
    rol: 'development, ux',
    number: '01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 2,
    title: 'Mediterranean',
    image: project3,
    link: '/project2',
    rol: ' design development, ux',
    number: '02',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 3,
    title: 'Coffe Shop',
    image: project5,
    link: '/project3',
    rol: 'development, ux',
    number: '03',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.'
  },
  {
    id: 4,
    title: 'Design Portfolio',
    image: 'https://picsum.photos/id/40/1920/1080',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.',

    textInfiniteh2: [
      { id: 1, text: 'DESIGN THINKING' },
      { id: 2, text: ' BRAIN STORM' },
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.',

    textInfiniteh2: [
      { id: 1, text: 'UI /UXDESIGN ' },
      { id: 2, text: ' WIREFRAMING' },
      { id: 3, text: 'PROTOTYPING' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'ANTDESIGN' },
      { id: 2, text: ' FIGMA' },
      { id: 3, text: 'ADOBE' },
      { id: 4, text: 'ADOBE XD' },
      { id: 5, text: 'ILLUSTRATOR' },
      { id: 6, text: 'WEBFLOW' },
      { id: 7, text: 'CSS ' },
      { id: 8, text: 'STYLED ' }
    ]
  },
  {
    id: 3,
    title: 'Develop',
    image: Develop,
    alt: 'Third image',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, erat iaculis cursus feugiat, dolor lectus pharetra massa, cursus tempor lectus diam malesuada turpis. Morbi dolor odio, malesuada in dictum ut, elementum non lacus.',

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
