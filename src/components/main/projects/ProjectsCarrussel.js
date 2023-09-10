/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../utils/dataInfo';
import { AfewWordsContainer } from './stylesProjectList';
import { backgroundColor, textColor, textColorBringUp } from '../../../styled';
import HandPointing from '../../../assets/handpointing.webp';
import AnimatedInViewComponent from '../../content/BlinkAnimation';

gsap.registerPlugin(ScrollTrigger);

const HandPointingcontainer = styled.div`
  display: flex;
  width: 100vw;
  // background-color: ${backgroundColor};
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
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-left: solid 2px;
  text-align: center;
  color: ${backgroundColor};
  position: relative;
  box-sizing: border-box;
  //padding: 100px;
  //margin: 0 2rem;
  overflow: hidden;

  .textProjectSesionHome {
    display: flex; 
    justify-content: flex-start;
    z-index: 1;
    position: relative;
    background-color: ${textColor};
    width: 100%;
    padding 3rem 3rem;
    border-top: solid 2px;
    align-items: flex-end;
    justify-content: space-between;
    
    p{
      color: ${textColorBringUp};
      font-size: 2em;
      font-weight: 700

    }
    h2{
      font-size: 6em;
      cursor: pointer;

    }
    h4{
      font-size: 2.5em;
      font-weight: 200;
     
    }


  }
  .titleAndNumber{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    position: absolute;
    object-fit: cover;
    filter: grayscale(120%) brightness(110%);
  }

  img.modal-image {
    max-width: 100%;
    max-height: 100%;
    //transition: opacity 0.3s ease;
  }
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

    // imgRefs.current.forEach((img, i) => {
    //   gsap.to(img, {
    //     scale: 2, // o cualquier otro valor o cálculo que necesites
    //     scrollTrigger: {
    //       trigger: img,
    //       scrub: 0.1
    //     }
    //   });
    // });

    return () => ctx.revert();
  }, [sectionsRef]);

  const handleMouseEnter = (index) => {
    gsap.to(imgRefs.current[index], {
      scale: 1.2,
      duration: 0.5,
      ease: 'power2.out',
      scrub: 3
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imgRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      scrub: 3
    });
  };

  // useLayoutEffect(() => {
  //   const panels = containerRefCarrousel.current.querySelectorAll('.panel');

  //   panels.forEach((panel, index) => {
  //     const image = panel.querySelector('.modal-image');

  //     panel.addEventListener('mouseenter', () => {
  //       gsap.to(image, {
  //         scale: 1,
  //         opacity: 1,

  //         duration: 0.3,

  //         ease: 'power2.out'
  //       });
  //     });

  //     panel.addEventListener('mouseleave', () => {
  //       gsap.to(image, {
  //         scale: 1,
  //         opacity: 0,

  //         duration: 0.3,
  //         ease: 'power2.out'
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div ref={app}>
      <AfewWordsContainer>
        <h3>TAKE A LOOK AT MY WORK</h3>
      </AfewWordsContainer>
      <ContainerCarrousel
        ref={containerRefCarrousel}
        className="containerCarrousel"
      >
        {projects.map((section, i) => (
          <Link to={`/project/${section.name}`} key={section.id}>
            <Panel
              className={`panel ${section.id}`}
              ref={(el) => (sectionsRef.current[i] = el)}
            >
              <div className="textProjectSesionHome">
                <div className="titleAndNumber">
                  <p>{section.number}</p>
                  <h2 id={`textInside-${section.id}`}>{section.title}</h2>
                </div>

                <h4>{section.rol}</h4>
              </div>

              <img
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                ref={(el) => (imgRefs.current[i] = el)}
                src={section.image}
                alt={section.title}
                key={i}
                className="imageCarrusselHomeProjects"
              />
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
