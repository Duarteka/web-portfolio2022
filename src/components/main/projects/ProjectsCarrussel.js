/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
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
import AnimatedCursor from 'react-animated-cursor';
import { projects } from '../../utils/dataInfo';
import { AfewWordsContainer } from './stylesProjectList';
import { backgroundColor, textColor, textColorBringUp } from '../../../styled';
import HandPointing from '../../../assets/handpointing.webp';
import AnimatedInViewComponent from '../../content/BlinkAnimation';

gsap.registerPlugin(ScrollTrigger);

const HandPointingcontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;

  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
  height: 80vh;
  padding: 5rem;

  img {
    max-width: 15vw;
    object-fit: cover;
    position: relative;
  }
  h1 {
    font-size: 10rem;
  }

  .seeAllContainer {
    display: flex;
    justify-content: space-around;
    border: solid 2px;
    border-radius: 200px;
    width: 70vw;
    align-items: center;
    color: ${textColor};
  }
`;
const HoverText = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid;
  color: ${textColorBringUp};
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, border-radius 0.3s ease;

  .hoverseemore {
    transition: all 0.2s ease-in-out;
  }
  .hoverseemore:hover {
    transform: scale(1.1);
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
const ImageProjectContainer = styled.div`
  top: 0;
  left: 0;
  z-indez: 0;
  cursor: none;

  img {
    width: auto;
    height: 350px;
    object-fit: cover;
  }
`;

const Panel = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: solid 2px;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  .textProjectSesionHome {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    position: relative;
    width: 100%;
    margin-bottom: -5rem;
    color: ${textColor};

    // padding 3rem 3rem;
    // border-top: solid 2px;

    p {
      color: ${textColorBringUp};
      font-size: 2em;
      font-weight: 700;
    }
    h2 {
      font-size: 10em;
      cursor: pointer;
    }
    h4 {
      font-size: 2.5em;
      font-weight: 200;
    }
    a {
    }
  }
  .titleAndNumber {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .roles {
    max-width: 5rem;
    text-align: left;
  }

  img {
    width: 550px;
    border-radius: 20px;
    margin-left: 10rem;
    margin-top: 2rem;
  }
`;

export default function ProjectCards({ projectList }) {
  const app = useRef(null);
  const containerRefCarrousel = useRef(null);
  const sectionsRef = useRef([]);
  const imgRefs = useRef([]);

  const [hoverStates, setHoverStates] = useState(() =>
    projects.reduce((acc, project, index) => {
      acc[index] = { isVisible: false, position: { x: 0, y: 0 } };
      return acc;
    }, {})
  );
  const handleMouseEnter = (index) => {
    setHoverStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], isVisible: true }
    }));
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], isVisible: false }
    }));
  };

  const handleMouseMove = (e, index) => {
    const { clientX, clientY } = e;
    setHoverStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], position: { x: clientX, y: clientY } }
    }));
  };

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

    //   gsap.to(imgRefs.current[index], {
    //     scale: 1.2,
    //     duration: 0.5,
    //     ease: 'power2.out',
    //     scrub: 3
    //   });

    return () => {
      ctx.revert();
    };
  }, [sectionsRef]);

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
    <>
      <div ref={app}>
        <AfewWordsContainer>
          <h4>I&rsquo;VE BEEN WORKING</h4>
        </AfewWordsContainer>
        <ContainerCarrousel
          ref={containerRefCarrousel}
          className="containerCarrousel"
        >
          {projects.map((section, i) => (
            <Panel
              className={`panel ${section.id}`}
              ref={(el) => (sectionsRef.current[i] = el)}
            >
              <Link
                to={`/project/${section.name}`}
                key={section.id}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                onMouseMove={(e) => handleMouseMove(e, i)}
              >
                {hoverStates[i] && hoverStates[i].isVisible && (
                  <HoverText
                    className="hoverseemore"
                    style={{
                      position: 'fixed',
                      left: hoverStates[i].position.x,
                      top: hoverStates[i].position.y,
                      pointerEvents: 'none'
                    }}
                  >
                    <h5>SEE</h5>
                  </HoverText>
                )}
                <div className="textProjectSesionHome">
                  <div className="titleAndNumber">
                    <p>{section.number}</p>
                    <h2 id={`textInside-${section.id}`}>{section.title}</h2>
                  </div>
                  <h5>[roles]</h5>
                  <h4 className="roles">{section.rol}</h4>
                </div>

                <ImageProjectContainer>
                  <img
                    ref={(el) => (imgRefs.current[i] = el)}
                    src={section.image}
                    alt={section.title}
                    key={i}
                    className="imageCarrusselHomeProjects hoverseemore"
                  />
                </ImageProjectContainer>
              </Link>
            </Panel>
          ))}
        </ContainerCarrousel>
      </div>
      <HandPointingcontainer className="hand-pointingSeeALL">
        <AnimatedInViewComponent>
          <Link to="/seemore">
            <div className="seeAllContainer">
              <div>
                <h1>see all</h1>
              </div>

              <img src={HandPointing} alt="hand pointing click to see more" />
            </div>
          </Link>
        </AnimatedInViewComponent>
      </HandPointingcontainer>
    </>
  );
}
