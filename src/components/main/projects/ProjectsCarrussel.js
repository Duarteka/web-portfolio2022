/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../utils/dataInfo';

import { AfewWordsContainer } from './stylesProjectList';

import SplitScrollText from '../../utils/SplitScrollText';
import { backgroundColor, textColor } from '../../../styled';
import HandPointing from '../../../assets/handpointing.webp';
import AnimatedInViewComponent from '../../content/BlinkAnimation';

const HandPointingcontainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${backgroundColor};
  color: ${textColor};
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
  height: 50%;
  border-bottom: solid 2px;
  padding: 5rem 5rem;

  img {
    max-width: 10vw;
    object-fit: cover;
  }
`;
gsap.registerPlugin(ScrollTrigger);

// const ProjectCards = React.memo(({ projectList }) => (
//   <CardContainerCarrousel>
//     <AfewWordsContainer>
//       <h3>Work</h3>
//     </AfewWordsContainer>

//     {projects.map((project, index) => (
//       <StyledProjectCard key={project.id} className="card-project-carrousel">
//         <Link to={`/project/${project.name}`}>
//           <div id={`textInside-${project.id}`}>
//             <div className="projectName">
//               <p>{project.number}</p>
//
//             </div>
//             <p className="projDescriptionHome">{project.rol} </p>
//           </div>
//         </Link>
//       </StyledProjectCard>
//     ))}
//     <Link to="/seemore">
//       <div className="hand-pointing">
//         <AnimatedInViewComponent>
//           <img src={HandPointing} alt="hand pointing click to see more" />
//           <p>see all</p>
//         </AnimatedInViewComponent>
//       </div>
//     </Link>
//   </CardContainerCarrousel>
// ));

const ContainerCarrousel = styled.div`
  width: ${projects.length * 80}vw;
  height: 100vh;
  display: flex;
  // flex-wrap: nowrap;
  background-color: ${backgroundColor};
  border-bottom: solid 2px;
  border-top: solid 2px;
`;

const Panel = styled.section`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: solid 2px;
  text-align: center;
  color: ${textColor};
  position: relative;
  box-sizing: border-box;
  padding: 100px;

  img {
    object-fit: cover;
  }
  img.modal-image {
    opacity: 0;
  }
  img.modal-image {
    width: 30%;
    height: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContainerScrollTogether = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export default function ProjectCards({ projectList }) {
  const app = useRef(null);
  const containerRefCarrousel = useRef(null);
  const sectionsRef = useRef([]);

  const imgRefs = useRef([]);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(sectionsRef.current);

    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          markers: false,
          trigger: containerRefCarrousel.current,
          pin: true,
          scrub: 0.1,
          end: () => '+=' + projects.length * window.innerWidth * 0.8
        }
      });
    }, app);

    return () => ctx.revert();
  }, [sectionsRef]);

  const handleMouseEnter = (index) => {
    const image = sectionsRef.current[index].querySelector('.modal-image');
    gsap.to(image, {
      opacity: 1,
      duration: 0.3,
      x: 0,
      y: 0,

      ease: 'Elastic.easeOut(0.25)'
    });
    gsap.to(image, {
      opacity: 1,
      duration: 0.3
    });
  };

  const handleMouseMove = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - 50; // -50 para desplazar un poco la imagen
    const y = e.clientY - rect.top - 50;

    const image = imgRefs.current[index];
    gsap.set(image, {
      x,
      y,
      ease: 'Power3.easeOut'
    });
  };

  const handleMouseLeave = (index) => {
    const image = sectionsRef.current[index].querySelector('.modal-image');
    gsap.to(image, {
      opacity: 0, // No la ocultamos completamente
      x: 0,
      y: 0,

      ease: 'Elastic.easeOut(0.25)',
      duration: 0.3
    });
  };

  return (
    <div ref={app}>
      <AfewWordsContainer>
        <h3>TAKE A LOOK AT MY WORK</h3>
      </AfewWordsContainer>
      <ContainerCarrousel ref={containerRefCarrousel}>
        {projects.map((section, i) => (
          <Link to={`/project/${section.name}`}>
            <Panel
              key={section.id}
              className={`panel ${section.id}`}
              ref={(el) => (sectionsRef.current[i] = el)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <img
                ref={(el) => (imgRefs.current[i] = el)}
                src={section.image}
                alt={section.title}
                className="modal-image"
              />
              <h2 id={`textInside-${section.id}`}>{section.title}</h2>
              {section.rol}
            </Panel>
          </Link>
        ))}
      </ContainerCarrousel>
      <Link to="/seemore">
        <HandPointingcontainer className="hand-pointingSeeALL">
          <AnimatedInViewComponent>
            <img src={HandPointing} alt="hand pointing click to see more" />
            <h4>see all</h4>
          </AnimatedInViewComponent>
        </HandPointingcontainer>
      </Link>
    </div>
  );
}
