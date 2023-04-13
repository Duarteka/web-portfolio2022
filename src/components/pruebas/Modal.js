/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// // /* eslint-disable jsx-a11y/no-static-element-interactions */
// // /* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useState } from 'react';
// import { gsap } from 'gsap';
// import styled from 'styled-components';

// import * as THREE from 'three';
// import React, { useRef, useEffect } from 'react';
// import { useLoader } from 'react-three-fiber';
// import fragment from './glitch.fs';
// import vertex from './glitch.vs';

// function Glitch() {
//   const ref = useRef();
//   const materialRef = useRef();
//   const texture = useLoader(THREE.TextureLoader, '/path/to/image.jpg');

//   useEffect(() => {
//     const material = materialRef.current;
//     const tl = new TimelineMax({ paused: true });

//     tl.fromTo(
//       material.uniforms.distortion,
//       { value: 0 },
//       { value: 1, duration: 0.5 }
//     );
//     tl.to(material.uniforms.distortion, { value: 0, duration: 0.5 });

//     const handleScroll = () => {
//       const scrollPos =
//         window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
//       tl.progress(scrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <mesh ref={ref} position={[0, 0, 0]}>
//       <planeBufferGeometry args={[window.innerWidth, window.innerHeight]} />
//       <shaderMaterial
//         ref={materialRef}
//         vertexShader={vertex}
//         fragmentShader={fragment}
//       >
//         <uniforms>
//           <uniform name="texture" value={texture} />
//           <uniform name="distortion" value={0} />
//           <uniform name="distortion2" value={0} />
//           <uniform name="speed" value={0.2} />
//           <uniform name="amplitude" value={1.0} />
//         </uniforms>
//       </shaderMaterial>
//     </mesh>
//   );
// }

// export default Glitch;

// function Modal() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Proyecto 1',
//       image: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 1'
//     },
//     {
//       id: 2,
//       title: 'Proyecto 2',
//       image: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 2'
//     },
//     {
//       id: 3,
//       title: 'Proyecto 3',
//       image: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 3'
//     },
//     {
//       id: 4,
//       title: 'Proyecto 4',
//       image: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 4'
//     }
//   ];

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//     setShowModal(true);

//     gsap.to('.project-list', {
//       duration: 0.5,
//       x: '-50%'
//     });
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setShowModal(false);

//     gsap.to('.project-list', {
//       duration: 0.5,
//       x: 0
//     });
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <ul className="project-list">
//         {projects.map((project) => (
//           <li key={project.id} className="project-item">
//             <div className="project-item__image-container">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="project-item__image"
//               />
//               <div className="project-item__title">{project.title}</div>
//             </div>
//             <div
//               className="project-item__description"
//               style={{
//                 color: selectedProject?.id === project.id ? '#fff' : '#333'
//               }}
//             >
//               {project.description}
//             </div>
//             <div
//               className="project-item__overlay"
//               onClick={() => handleProjectClick(project)}
//             />
//           </li>
//         ))}
//       </ul>

//       {showModal && (
//         <div className="project-modal" onClick={handleCloseModal}>
//           <img
//             src={selectedProject.image}
//             alt={selectedProject.title}
//             className="project-modal__image"
//           />
//           <div className="project-modal__description">
//             {selectedProject.description}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { gsap } from 'gsap';

// function Modal() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Proyecto 1',
//       img: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 1'
//     },
//     {
//       id: 2,
//       title: 'Proyecto 2',
//       img: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 2'
//     },
//     {
//       id: 3,
//       title: 'Proyecto 3',
//       img: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 3'
//     },
//     {
//       id: 4,
//       title: 'Proyecto 4',
//       img: 'https://via.placeholder.com/500x500',
//       description: 'Descripción del proyecto 4'
//     }
//   ];

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//     gsap.to('.project-list', {
//       x: '-50%',
//       duration: 1
//     });
//   };

//   const handleCloseClick = () => {
//     setSelectedProject(null);
//     gsap.to('.project-list', {
//       x: '0%',
//       duration: 1
//     });
//   };

//   return (
//     <Container>
//       {selectedProject ? (
//         <SelectedProjectContainer>
//           <CloseButton onClick={handleCloseClick}>X</CloseButton>
//           <img src={selectedProject.img} alt={selectedProject.title} />
//           <p>{selectedProject.description}</p>
//         </SelectedProjectContainer>
//       ) : null}
//       <ProjectListContainer className="project-list">
//         {projects.map((project) => (
//           <ProjectItem
//             key={project.id}
//             onClick={() => handleProjectClick(project)}
//           >
//             <img src={project.img} alt={project.title} />
//             <ProjectTitle>{project.title}</ProjectTitle>
//             <ProjectDescription>{project.description}</ProjectDescription>
//           </ProjectItem>
//         ))}
//       </ProjectListContainer>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   justify-content: center;
// `;

// const ProjectListContainer = styled.ul`
//   display: flex;
//   flex-direction: colunm;
//   flex-wrap: nowrap;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   flex-direction: colunm;
//   width: 100%;
// `;

// const ProjectItem = styled.li`
//   cursor: pointer;
//   margin: 0;
//   padding: 0;
//   position: relative;
//   width: 50%;
//   height: 50vh;
//   overflow: hidden;

//   img {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   &:hover img {
//     transform: translateY(-90%);
//   }
// `;

// const ProjectTitle = styled.h3`
//   font-size: 5rem;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const ProjectDescription = styled.p`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   padding: 1rem;
// `;

// const SelectedProjectContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   position: absolute;
// `;
// const CloseButton = styled.div`
//   position: absolute;
//   top: 5%;
//   right: 5%;
//   background-color: transparent;
//   color: white;
//   border: none;
//   font-size: 2rem;
//   cursor: pointer;
// `;
// export default Modal;

// const Button = styled.button`
//   background-color: white;
//   color: black;
//   font-size: 20px;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Content = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: pink;
//   z-index: 999;
//   overflow-x: hidden;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background-color: transparent;
//   color: white;
//   font-size: 20px;
//   border: none;
//   cursor: pointer;
// `;
// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import gsap from 'gsap';

// function Modal() {
//   return (
//     <div id="circle-container">
//       <div className="circle">
//         <h2 className="marqueeStyle">&nbsp;SCROLL&nbsp; DOWN&nbsp;</h2>
//         <h2 className="marqueeStyle2">&nbsp;SCROLL&nbsp; DOWN&nbsp;</h2>
//       </div>
//     </div>
//   );
// }

// export default Modal;

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import GScroll from '@grcmichael/gscroll';

// gsap.registerPlugin(ScrollTrigger);

// function ExampleComponent() {
//   useEffect(() => {
//     const scroll = new GScroll('#GScroll', 0.6, () => {
//       ScrollTrigger.update();
//     });
//     scroll.init();
//     scroll.wheel();

//     const scroller = document.getElementById('GScroll');
//     ScrollTrigger.defaults({
//       scroller
//     });

//     ScrollTrigger.scrollerProxy(scroller, {
//       scrollTop(value) {
//         if (arguments.length) {
//           scroll.current = -value; // setter
//         }
//         return -scroll.current; // getter
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight
//         };
//       }
//     });

//     window.addEventListener('resize', () => {
//       scroll.resize();
//     });

//     const incr = 0;
//     // document.querySelectorAll('p span').forEach((lettre) => {
//     //   gsap.to(lettre, {
//     //     y: '-40%',
//     //     opacity: 0,
//     //     ease: 'none',
//     //     scrollTrigger: {
//     //       trigger: '.trigger',
//     //       start: `top top-=${incr}`,
//     //       end: `+=${100}`,
//     //       scrub: true
//     //     }
//     //   });
//     //   incr += 16;
//     // });

//     ScrollTrigger.create({
//       trigger: '.trigger',
//       start: 'top top',
//       end: `+=${500}`,
//       pin: true
//     });

//     gsap.to('div', {
//       x: '0%',
//       rotation: 0,
//       opacity: 1,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: 'img',
//         start: 'top bottom',
//         end: 'bottom bottom',
//         scrub: 0.5
//       }
//     });
//     window.addEventListener('scroll', scroller);
//     return () => {
//       window.removeEventListener('scroll', scroller);
//       scroll.resize();
//     };

//     // recalculate the height of the smooth scroll section after the "pin" animation
//   }, []);

//   return (
//     <section id="GScroll">
//       <div className="trigger" />

//       <img
//         className="elmt"
//         src="https://benjaminrighetti.com/img/slider/1.jpg"
//         alt=""
//       />
//     </section>
//   );
// }

// export default ExampleComponent;
// import { useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { ContainerDescriptionProjects } from '../content/AboutMeHome';

// const text =
//   "I'M A DESIGNER WHO DOESN'T STOP UNTIL EVERYTHING IS IN PLACE, WITH A KEEN EYE FOR GOOD DESIGN PATTERNS AND A FOCUS ON SATISFYING USER NEEDS. I LIKE TO EXPERIMENT AND BE CREATIVE, BUT NEVER FORGET THE IMPORTANCE OF COHERENCE AND FUNCTIONALITY.";

// const colors = {
//   light: '#f6f6f6',
//   dark: '#1f1f1f'
// };

// const ContainerDescriptionProjectsAnimated = animated(
//   ContainerDescriptionProjects
// );

// function Description() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [containerHeight, setContainerHeight] = useState(0);
//   const [background, setBackground] = useState(colors.light);

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     const maxScroll = containerHeight - window.innerHeight;

//     setScrollPosition(position);
//     setBackground(position >= maxScroll ? colors.dark : colors.light);
//   };

//   useEffect(() => {
//     setContainerHeight(document.getElementById('container').offsetHeight);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   const { transform } = useSpring({
//     from: { transform: 'translate3d(0,0,0)' },
//     to: { transform: `translate3d(0, ${scrollPosition * 0.5}px, 0)` },
//     config: { mass: 1, tension: 100, friction: 30 }
//   });

//   return (
//     <ContainerDescriptionProjectsAnimated
//       id="container"
//       style={{ backgroundColor: background, transform }}
//     >
//       <p>{text}</p>
//     </ContainerDescriptionProjectsAnimated>
//   );
// }

// export default Description;

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function Title() {
//   const titleRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const title = titleRef.current;
//     const letters = title.textContent.split('');
//     title.innerHTML = '';
//     letters.forEach((letter) => {
//       const span = document.createElement('span');
//       span.textContent = letter;
//       title.appendChild(span);
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: title,
//         start: 'top 70%',
//         end: 'bottom 20%',
//         scrub: true,
//         markers: true
//       }
//     });

//     tl.staggerFromTo(
//       title.children,
//       0.4,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, ease: 'power4.out' },
//       0.05,
//       0
//     );
//   }, []);

//   return (
//     <h1 className="title" ref={titleRef}>
//       work
//     </h1>
//   );
// }

// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function Line() {
//   const lineRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: lineRef.current,
//         start: 'top 80%',

//         scrub: true
//       }
//     });

//     tl.to(lineRef.current, { scaleX: 1, duration: 1.5 });
//   }, []);

//   return (
//     <>
//       <CircleLine />
//       <div
//         style={{
//           height: '3px',
//           width: '100%',
//           backgroundColor: 'black',
//           transformOrigin: 'left',
//           transform: 'scaleX(0)'
//         }}
//         ref={lineRef}
//       />
//     </>
//   );
// }

// function CircleLine() {
//   const circleRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: circleRef.current,
//         start: 'top 80%'
//       }
//     });

//     tl.to(circleRef.current, {
//       strokeDasharray: '1 1',
//       strokeDashoffset: 0,
//       duration: 1.5,
//       ease: 'power4.out'
//     });
//   }, []);

//   return (
//     <svg viewBox="0 0 100 100" width="100" height="100">
//       <circle
//         ref={circleRef}
//         cx="50"
//         cy="50"
//         r="45"
//         fill="none"
//         stroke="black"
//         strokeWidth="5"
//         strokeDasharray="225"
//         strokeDashoffset="225"
//       />
//     </svg>
//   );
// }

// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// import { ArrowdownHeader } from '../icons/Icons';

// function ArrowDownHola() {
//   const circleRef = useRef(null);
//   const iconRef = useRef(null);

//   useEffect(() => {
//     gsap.to(iconRef.current, {
//       y: '+=10',
//       duration: 1,
//       repeat: -1,
//       yoyo: true
//     });
//   }, []);

//   const handleMouseEnter = () => {
//     gsap.to(circleRef.current, {
//       strokeDashoffset: 0,
//       duration: 0.5
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(circleRef.current, {
//       strokeDashoffset: 380,
//       duration: 0.5
//     });
//   };

//   return (
//     <div style={{ position: 'relative', width: '10rem', height: '10rem' }}>
//       <svg
//         viewBox="0 0 100 100"
//         style={{ position: 'absolute', top: 0, left: 0 }}
//       >
//         <path
//           d="M50 5
//              a 45 45 0 0 1 0 90
//              a 45 45 0 0 1 0 -90"
//           fill="none"
//           stroke="#373737"
//           strokeWidth="5"
//           strokeDasharray="360.10"
//           strokeDashoffset="360.10"
//           ref={circleRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         />
//       </svg>
//       <ArrowdownHeader
//         ref={iconRef}
//         style={{
//           position: 'absolute',
//           top: '-5rem',
//           left: '50%',
//           transform: 'translateX(-50%)'
//         }}
//       />
//     </div>
//   );
// }

// export default ArrowDownHola;

// import React from 'react';
// import styled from 'styled-components';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const initialText = ['HELLO,', 'I   DESIGN   AND DEVELOP', 'WEB   PAGES'];

// gsap.registerPlugin(ScrollTrigger);

// const ListStyled = styled.div`
//   overflow: hidden;

//   .section {
//     height: 70vh;
//   }

//   .devs,
//   .devs2 {
//     perspective: 4000px;
//     left: 400px;
//     position: relative;

//     & li {
//       font-size: 30px;
//     }
//   }
// `;

// function List() {
//   const devsRef = React.useRef(null);
//   const devs2Ref = React.useRef(null);

//   React.useEffect(() => {
//     const devs = devsRef.current.querySelectorAll('li');
//     const devs2 = devs2Ref.current.querySelectorAll('li');

//     // Staggered animation for first list
//     gsap.fromTo(
//       devs,
//       {
//         opacity: 0,
//         rotationX: -90,
//         transformOrigin: '50% top -100'
//       },
//       {
//         opacity: 1,
//         rotationX: 0,
//         duration: 0.7,
//         stagger: 0.1,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: devsRef.current,
//           start: 'top 80%'
//         }
//       }
//     );

//     // Staggered animation for second list
//     gsap.fromTo(
//       devs2,
//       {
//         opacity: 0,
//         x: (i) => (i + 1) * 50
//       },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//           trigger: devs2Ref.current,
//           start: 'top 80%'
//         }
//       }
//     );
//   }, []);

//   return (
//     <ListStyled>
//       <div className="section" />
//       <div className="devs" ref={devsRef} />
//       <div className="section" />
//       <div className="devs2" ref={devs2Ref}>
//         <h2>
//           <li>HELLO,</li>
//           <li>I DESIGN AND</li>
//           <li>DEVELOP</li>
//           <li>WEB PAGES</li>
//         </h2>
//       </div>
//       <div className="section" />
//     </ListStyled>
//   );
// }

// export default List;

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import useWindowSize from '../utils/useREsize';
// import TextKaraoke from '../utils/SplitTextKaraoke';

// gsap.registerPlugin(ScrollTrigger);

// export default function BorderAnimation() {
//   const [inViewport, setInViewport] = useState(false);
//   const refLista = useRef(null);
//   useEffect(() => {
//     const handleScroll = () => {
//       const { top, bottom } = refLista.current.getBoundingClientRect();
//       const isVisible = top >= 0 && bottom <= window.innerHeight;
//       if (isVisible) {
//         setInViewport(true);
//         window.removeEventListener('scroll', handleScroll);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   return (
//     <span
//       ref={refLista}
//       className={inViewport ? 'border-animada in-viewport' : 'border-animada'}
//     />
//   );
// }

// function TestKaraoke() {
//   return (
//     <TextKaraoke textLineSplit="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet lacinia dui. Nullam pretium nunc et tellus feugiat, ut aliquam lacus consectetur. Vivamus in leo ut quam tincidunt lobortis. Nulla ut eros nec turpis dictum auctor vitae ac lectus. Pellentesque scelerisque nec ante eu interdum. Donec elementum dolor id mi ultrices, in scelerisque turpis aliquet. Fusce sollicitudin mollis elit, non suscipit nibh elementum in. Ut ac urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla eget odio odio. Donec malesuada ultrices dolor vel pretium." />
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const LineClass = styled.div`
  overflow: hidden;
`;

const AnimJS = styled.div`
  overflow: hidden;
  height: 100vh;

  span {
    margin-top: 30rem;
    overflow: hidden;
    display: inline-block;
    position: relative;
    opacity: 0;
    transition: all ease 0.4s;
    clip-path: ease cubic-bezier(0.71, -0.77, 0.43, 1.67);
  }
`;

function AnimatedText({ text, tag }) {
  const ref = useRef();
  const [words, setWords] = useState([]);

  useEffect(() => {
    const wordsTab = text.split(' ');
    setWords(wordsTab);
  }, [text]);

  useEffect(() => {
    if (ref.current) {
      const animateWords = () => {
        ref.current.querySelectorAll('span').forEach((blocSpan, index) => {
          gsap.to(
            blocSpan,
            {
              y: 50,
              rotation: 45,
              opacity: 0
            },
            {
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 50%',
                end: 'bottom 20%',
                scrub: true
              },
              y: 0,
              rotation: 0,
              opacity: 1,
              duration: 0.2,
              delay: 0.1 * index,
              ease: 'power1.out'
            }
          );
        });
      };

      if (typeof window !== 'undefined') {
        if (document.readyState === 'complete') {
          animateWords();
        } else {
          window.addEventListener('load', animateWords);
        }
      }
    }
  }, [ref]);

  return (
    <LineClass>
      <AnimJS ref={ref} as={tag}>
        {words.map((word, index) => (
          <span key={index} data-text={word}>
            {word}
          </span>
        ))}
      </AnimJS>
    </LineClass>
  );
}

export default function Spliter() {
  return (
    <>
      <AnimatedText text="JS Vanilla" tag="h1" />
      <AnimatedText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        tag="h2"
      />
      <AnimatedText
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        tag="p"
      />
    </>
  );
}
