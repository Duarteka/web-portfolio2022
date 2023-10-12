/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trail } from '../slideAnimation/Slide';
import WomanTongueHome from '../../assets/funnyface.webp';
import { backgroundColor, textColor } from '../../styled';
import contournTextAnimation from '../../assets/TextContorn.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDesign() {
  const circleRotationRef = useRef(null);
  const funnyFaceRef = useRef(null);

  useEffect(() => {
    const tween = gsap
      .to(circleRotationRef.current, {
        rotation: '+=1440',
        duration: 360,
        ease: 'none',
        repeat: -1
      })
      .totalProgress(0.5);

    ScrollTrigger.create({
      trigger: circleRotationRef.current,
      start: 'center center',
      end: '+=1000',
      onUpdate: ({ getVelocity }) => {
        const velocity = getVelocity();
        const timeScale = velocity > 1 ? 10 : -10;

        gsap.to(tween, {
          duration: 0,
          timeScale
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: funnyFaceRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5
      }
    });

    // Aquí es donde agregas tus animaciones al timeline
    tl.to(funnyFaceRef.current, {
      scale: 1.2,
      duration: 5,
      ease: 'power1.out'
    });
  }, []);
  return (
    <ContainerAboutDesign>
      <ImageContainer>
        <div className="overlayText">
          <h2> ABOUT WORK PROCESS</h2>
          <h2 className="outline"> ABOUT WORK PROCESS</h2>
          <h2> ABOUT WORK PROCESS</h2>
          <h2 className="outline"> ABOUT WORK PROCESS</h2>
        </div>
        <div className="funnyFaceContainer">
          <img
            ref={funnyFaceRef}
            src={WomanTongueHome}
            alt="funny face"
            className="imageFunnyFace"
          />
        </div>
      </ImageContainer>
    </ContainerAboutDesign>
  );
}

const ContainerAboutDesign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100vw;
  flex-direction: center;
  border-top: solid 2px;
  background-color: ${backgroundColor};
  position: relative;

  .outline {
    color: transparent;
    -webkit-text-stroke: 2px ${backgroundColor};
  }

  @media (max-width: 668px) and (max-width: 992px) {
    max-height: 80vh;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-left: solid 2px;
  max-width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .funnyFaceContainer {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .imageFunnyFace {
    width: 100%;

    //object-fit: cover;
  }

  .overlayText {
    max-height: 100%;
    width: 100%;
    position: absolute;
    align-self: center;
    top: 0;
    left: 0;
    z-index: 10;
    color: ${backgroundColor};
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);

    h2 {
      margin: 0;
      font-family: 'Oswald';
      font-weight: 700;
      font-size: 11.2vw;
      letter-spacing: -9px;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: solid 2px;
    }
  }
  @media (max-width: 768px) {
    .overlayText h2 {
      font-size: 8vw;
    }
  }

  .imageFunnyFace {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center top;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    border-left: none;
    flex-direction: column;
    overflow: hidden;
  }
`;
