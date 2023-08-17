/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { ArrowdownHeader } from '../icons/Icons';
import MoonFAce from '../../assets/moon.webp';

gsap.registerPlugin(ScrollTrigger);

function ArrowAnimationHeader() {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      duration: 1,
      repeat: -1,
      y: '+=20',
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <ContainerArrow className="containerArrow">
      <ArrowdownHeader ref={arrowRef} className="arrow" />
    </ContainerArrow>
  );
}
function HeaderContent() {
  const containerRef = useRef(null);

  useEffect(() => {
    const devs2 = containerRef.current.children; // Obtener los hijos del contenedor (los elementos <span>)

    gsap.fromTo(
      devs2,
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

  return (
    <Containerheader className="containerHeader" id="header">
      <ListStyled>
        <div className="devs2 desktop" ref={containerRef}>
          <h1>
            <span>HI,</span>
            <span> I DESIGN</span>
            <br />
            <span>AND </span>
            <span>
              DEVEL{' '}
              <span>
                {' '}
                <img
                  style={{
                    maxWidth: '18%',
                    position: 'absolute',
                    top: '14vh' /* Esto colocará el elemento en el 20% de la altura de la pantalla desde la parte superior */,
                    left: '75vw'
                  }}
                  src={MoonFAce}
                  alt="moon face"
                />
              </span>
              &nbsp;<span>P</span>
            </span>
            <br />
            <span>WEB </span> <span>PAGES</span>
          </h1>
          <p>based in madrid</p>
        </div>
        {/* mobile version */}
      </ListStyled>
    </Containerheader>
  );
}

const Containerheader = styled.header`
  color: ${textColor};
  background-color: ${backgroundColor};
  border-bottom: solid 2px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  height: 100vh;
  width: 100%;
  position: relative;
  flex: 0 0 auto;
   
  


  h1 {
    @media screen and (max-width: 768px) {
      font-size: 5rem;
      line-height: 80.5px;
      letter-spacing: -0.05em;
      top: 0;
    }
  }
  @media (max-width: 668px) and (max-width: 992px) {
    flex-direction: column;
    height: 50vh;
    background-color: blue;
    

    .devs2 {
      margin-right: -4rem;
    }
  }}


`;

const ListStyled = styled.div`
  .devs2 {
    perspective: 50vw;
    position: relative;
    max-width: 100%;
    padding: 0 3vw;

    h1 {
      font-size: 16.3em;
      text-align: center;
      white-space: nowrap;
    }

    @media (max-width: 668px) {
      padding: 0 4vw;
    }
  }
`;

const ContainerArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 3rem;

  @media (max-width: 576px) {
    .arrow {
      margin-top: 2rem;
    }
  }
`;
export default HeaderContent;
