/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WomanTongueHome from '../../assets/funnyface.webp';
import { backgroundColor, textColor } from '../../styled';
import TextSlide from './TextSlide';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDesign() {
  const funnyFaceRef = useRef(null);

  return (
    <ContainerAboutDesign>
      <ImageContainer>
        <div className="overlayText" />
        <TextSlide />
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
  flex: 1;
  justify-content: center;
  max-width: 100%;
  height: 100%;
  z-index: 1;
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
  }

  .overlayText {
    max-height: 100%;
    width: 100%;
    position: absolute;
    align-self: center;
    top: 0;
    left: 0;
    z-index: 20;
    color: ${backgroundColor};
    text-align: center;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
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
