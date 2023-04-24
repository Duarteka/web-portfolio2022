import Ideate from '../../assets/ideate.webp';
import Design from '../../assets/design.webp';
import Develop from '../../assets/develop.webp';

export const socialMidiaContact = [
  {
    id: 1,
    contact: 'Discord',
    socialMidiaName: 'Kapi#8423',
    route: '#'
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
    route: '#'
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

export const sections = [
  {
    id: 1,
    title: 'Ideate',
    image: Ideate,
    alt: 'First image',

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
