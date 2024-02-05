/* eslint-disable no-unused-vars */
// /* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { backgroundColor } from '../../styled';

export default function TextSlide() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-slide-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    });

    // Aquí se animan tanto el texto principal como el secundario
    tl.to('.text-slide-one', {
      xPercent: -20,
      duration: 1
    }).to(
      '.text-slide-two',
      {
        xPercent: 20,
        duration: 1
      },
      0
    );
  }, []);

  return (
    <SectionTextSlide className="text-slide-container">
      <div className="text-container">
        <h2 className="text-slide text-slide-one">
          ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
          ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
          &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK
          PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT
          WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
        </h2>
      </div>
      <div className="text-container">
        <h2 className="text-slide text-slide-two">
          ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
          ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
          &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK
          PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT
          WORK PROCESS &#32; ABOUT WORK PROCESS &#32; ABOUT WORK PROCESS
        </h2>
      </div>
    </SectionTextSlide>
  );
}

const SectionTextSlide = styled.section`
  position: absolute;
  width: 100%; // Ocupa todo el ancho
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .text-container {
    white-space: nowrap;
    overflow: hidden;

    .text-slide {
      display: inline-block; // O cualquier otro estilo necesario
      font-size: 11.2vw;
      margin: 0;
    }
  }

  .text-slide {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    line-height: 120%;
    margin: 0;
    text-transform: uppercase;
    width: 100%;
  }

  h2 {
    margin: 0;
    font-family: 'Acier';
    font-weight: 700;
    font-size: 20vw !important;
    letter-spacing: -9px;
    white-space: nowrap;
    overflow: hidden;
    color: ${backgroundColor};
    width: 100%;
    height: 100%;
    opacity: 95%;
  }

  @media (max-width: 668px) {
    max-width: 100vw;
    overflow: hidden;
    font-size: 1rem !important;
  }
`;
