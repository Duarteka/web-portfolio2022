/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Slide, Trail } from '../slideAnimation/Slide';
import WomanTongueHome from '../../assets/funnyface.webp';
import { backgroundColor, textColor } from '../../styled';

import contournTextAnimation from '../../assets/TextContorn.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDesign() {
  const imageRef = useRef(null);
  const funnyFaceRef = useRef(null);

  useEffect(() => {
    const tween = gsap
      .to(imageRef.current, {
        rotation: '+=1440',
        duration: 360,
        ease: 'none',
        repeat: -1
      })
      .totalProgress(0.5);

    ScrollTrigger.create({
      trigger: imageRef.current,
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
    gsap.to(funnyFaceRef.current, {
      scrollTrigger: {
        trigger: funnyFaceRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5,
        pin: true
      },
      // x: '-50%',
      scale: 1.2,
      width: '100%',
      duration: 5, // Cambia esto al valor de escala que desees
      ease: 'power1.out'
    });
  }, []);
  return (
    <ContainerAboutDesign>
      <ImageContainer>
        <div className="textContornAnimation">
          <img
            ref={imageRef}
            src={contournTextAnimation}
            alt="text about design contorn"
          />
        </div>
        <div className="funnyFaceContainer">
          <span className="multiplyLayer" />
          <img
            ref={funnyFaceRef}
            src={WomanTongueHome}
            alt="funny face"
            className="imageFunnyFace"
          />
        </div>
      </ImageContainer>
      <TextContainer>
        <Trail>
          <h2>DESIGN IS THE PROCESS OF PLANNING</h2>
        </Trail>
        <Trail>
          <h2>AND CREATING A VISUAL EXPRESSION</h2>
        </Trail>
        <Trail>
          <h2>OF AN IDEA OR INTENTION.</h2>
        </Trail>
        <Trail>
          <h2>SO</h2>
        </Trail>
      </TextContainer>
    </ContainerAboutDesign>
  );
}

const ContainerAboutDesign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  border-top: solid 2px;
  width: 100vw;
  flex-direction: row;
  border-bottom: solid 2px;
  background-color: ${backgroundColor};
  position: relative;

  @media (max-width: 668px) and (max-width: 992px) {
    max-height: 80vh;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  alig-items: center;

  justify-content: center;
  flex: 1;
  border-right: solid 2px;
  max-width: 50%;
  position: relative;
  z-index: 5;

  .textContornAnimation {
    display: flex;
    alig-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    z-index: 1;

    .textContornAnimation img {
      max-width: 80%;
      height: auto;
      transform: translate(-50%, 50%);
      overflow: hidden;
    }
  }
  .funnyFaceContainer {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .imageFunnyFace {
    width: 100%;
    height: 100%;
    object-fit: cover; // Esto es para asegurarse de que la imagen cubra todo el contenedor sin deformarse
  }
  .multiplyLayer span img {
    position: absolute;
    mix-blend-mode: multiply;
    width: 50%;
    height: 100%;
    background-color: ${textColor};
    opacity: 40%;
  }

  img {
    width: 120%;
    max-height: 100vh;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding-left: 3rem;

  h2 {
    margin-top: -1rem;
    font-size: 4em;
    line-height: 80%;
    height: 100vh;
  }
`;
