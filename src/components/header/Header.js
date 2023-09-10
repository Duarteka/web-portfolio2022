/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import MoonFAce from '../../assets/moon.webp';
import DowloadCV from '../content/DowloadCV';

gsap.registerPlugin(ScrollTrigger);

function HeaderContent() {
  const containerRef = useRef(null);
  const moonHeaderRef = useRef(null);

  useEffect(() => {
    const spansAnimationSlide = containerRef.current.children; // Obtener los hijos del contenedor (los elementos <span>)

    gsap.fromTo(
      spansAnimationSlide,
      {
        opacity: 0,
        x: (i) => (i + 1) * 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.4,
        ease: 'back.out(1)',
        scrollTrigger: {
          start: 'top 80%',
          marks: true
        }
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(moonHeaderRef.current.querySelector('img'), {
      y: 200,
      scrollTrigger: {
        trigger: moonHeaderRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const clamp = gsap.utils.clamp(-10, 10);
          const skew = clamp(self.getVelocity() / -150);
          gsap.set(moonHeaderRef.current, {
            skewX: skew
          });
        }
      }
    });
  }, []);
  return (
    <Containerheader className="containerHeader" id="header">
      <ListStyled className="sectionHeroSpanAnimation">
        <div
          className="spansAnimationSlide headerSectionsText "
          ref={containerRef}
        >
          <h1>
            <span>HI,&#160;I DESIGN </span>
          </h1>
          <h1>
            <span>AND DEVELoP</span>
          </h1>

          <span className="moonHeader" ref={moonHeaderRef}>
            <img src={MoonFAce} alt="moonface" />
          </span>

          <h1>
            <span>WEB </span> <span>PAGES</span>
          </h1>

          <p className="basedinMadrid">based in madrid</p>
        </div>
      </ListStyled>
      <DowloadCV />
    </Containerheader>
  );
}

const Containerheader = styled.header`
  color: ${textColor};
  background-color: ${backgroundColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  position: relative;
  min-width: 100%;

  .basedinMadrid {
    color: ${textColorBringUp};
    margin-left: 3rem;
  }
`;

const ListStyled = styled.div`
  max-height: 100%;
  img {
    position: absolute;
    max-width: 18%;
    left: 77%;
    top: -3%;
  }
  @media (max-width: 843px) {
    img {
      left: 64%;
      top: 4%;
      max-width: 25%;
    }
  }
  .moonHeader {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
  }
  .devs2 {
    perspective: 50vw;
    max-width: 100%;
    padding: 0 3vw;
  }
`;

export default HeaderContent;
