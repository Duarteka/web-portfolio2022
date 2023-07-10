/* eslint-disable no-unused-vars */
import { gsap } from 'gsap';

import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import ParallaxContainer from '../pruebas/Modal';
import {
  backgroundColor,
  textColor,
  textColorBringUp,
  textColorBringUpReverse
} from '../../styled';

import Apple01 from '../../assets/ap01.png';

import GifDanceImage from '../../assets/dancegif.gif';
import AnimationApple from '../utils/AnimationApple';

import { HeaderTextForSection } from './Ideate';

const EmailContactContainer = styled.div`
  display: 100vh;
  margin-top 15% ;
 
  position: relative;
`;
const EmailContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  position: relative;
  justify-content: center;
  /margin-top: 5rem;

  a {
    color: ${textColor};
  }

  @media (max-width: 576px) {
  }

  span {
    border-bottom: solid 0.1em ${textColorBringUp};
  }
`;

export const ContainerDescriptionAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
  //margin: 7rem 0 7rem 0;
  justify-content: center;

  p {
    font-size: 2vw;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-weight: 400;
    padding: 0 10vw;

    @media (max-width: 576px) {
      padding: 0;
      font-size: 4vw;
    }
  }

  .fonthightlight {
    font-family: 'Lemonada';
    font-size: 1.5vw;
    text-transform: lowercase;
    color: ${textColorBringUp};
  }
  .borderHightlight {
    border: solid 0.1em;
    font-size: 1.4vw;
    padding: 0 0.5vw;
  }
  .borderBottonhightlight {
    text-decoration: underline;
    font-size: 1.9vw;
  }
  .fonthighlight {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4vw;
  }

  span {
    color: ${textColor};

    img {
      max-width: 10vw;
      max-height: 5vh;
      margin-top: -1vw;
    }
  }
`;

const HeaderAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: inline;
  padding: 0 10rem;
  position: relative;

  h4 {
    font-weight: 600;
    width: 100%;
  }
  @media (max-width: 576px) {
    padding: 0;
    margin: 0;
    h4 {
      margin-left: 5rem;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  return (
    <div id="about">
      <HeaderTextForSection
        text1="A FELL WORDS ABOUT"
        text2="&"
        text3="LET’S TALK"
      />
      <ContainerDescriptionAbout>
        <p>
          <span className="fonthightlight">Hey there!</span>
          <br /> I&apos;m Karen, a web designer, currently settled in Madrid. I
          have a passion for creating user-friendly websites
          <span className="fonthightlight">♥</span>, with a focus on&nbsp;
          <span className="borderHightlight">
            frontend <span className="fonthighlight">&</span> UX/UI design.
          </span>
          &nbsp; SO, &nbsp;
          <span className="borderBottonhightlight">
            how I can help your team?
          </span>
          <br />
          <span className="fonthightlight">Why me?</span> <br /> Well,
          let&apos;s just say I&apos;m like a
          <span className="fonthighlight">
            <i>chameleon</i>
          </span>
          - I CAN ADAPT TO ANY STYLE THAT SUITS YOUR PROJECTS. MY GOAL IS TO
          CREATE DESIGNS THAT WILL MAKE YOU SAY
          <br />
          <span className="fonthightlight">
            &quot;WOW, THAT&apos;S EXACTLY WHAT I WAS THINKING!&quot;
          </span>
          <br />
          (And let&apos;s be honest, I&apos;ll probably do a little happy dance
          when that happens
          <span>
            <img src={GifDanceImage} alt="happy-dance" autoPlay loop />
          </span>
          ).
        </p>

        {/* <p>
        So go ahead and hire me, and let&apos;s work together to create
        something great!
      </p> */}
      </ContainerDescriptionAbout>

      <EmailContactContainer>
        <EmailContact id="contact">
          <p>
            So don&rsquo;t be shy and contact me and let&rsquo;s do something
            great!
          </p>
          <h3 className="email">
            <span>
              <a
                style={{ color: textColor }}
                href="mailto: duarte.karen21@gmail.com"
              >
                duarte.karen21@gmail.com
              </a>
            </span>
          </h3>
          {/* <img src={Apple01} alt="manzana" /> */}
          <AnimationApple />
        </EmailContact>
      </EmailContactContainer>
    </div>
  );
}

export default SmoothScroll;
