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
import { AfewWordsContainer } from '../main/ProjectsList';

const EmailContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  justify-content: center;

  @media (max-width: 576px) {
    margin-top: 15vw;
  }

  span {
    border-bottom: solid 0.1em ${textColorBringUp};
  }
`;

export const ContainerDescriptionAbout = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  margin: 10rem 0 10rem 0;

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
  display: flex;
  position: relative;
  // padding: 15vw 15vw 4vw 15vw;
  justify-content: space-between;
  border-bottom: solid 0.1em;

  width: 100%;

  h3 {
    font-weight: 600 !important;
    font-size: 1.5vw !important;
  }

  @media (max-width: 576px) {
    padding: 10vw 10vw 2vw 10vw;

    h3 {
      font-size: 3vw !important;
    }
  }
`;
gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  // const sectionRef = useRef(null);
  // const bgColor = {
  //   from: '#373737',
  //   to: '#373737'
  // };

  // useEffect(() => {
  //   const section = sectionRef.current;

  //   if (section) {
  //     const colorTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: section,
  //         scrub: 1,
  //         start: 'top 10%',
  //         end: 'top 20%',
  //         pin: true,
  //         pinSpacing: false
  //       }
  //     });
  //     colorTl.to(section, {
  //       opacity: 1,
  //       backgroundColor: gsap.utils.interpolate(bgColor.from, bgColor.to),
  //       duration: 1,
  //       pin: true,
  //       pinSpacing: false
  //     });
  //     colorTl.to('p', { opacity: 1 });
  //   }
  // }, [bgColor.from, bgColor.to, sectionRef]);

  return (
    <>
      <ContainerDescriptionAbout>
        <AfewWordsContainer className="header-about">
          {/* <h3>lets talk</h3>
        <h3>&</h3> */}
          <h2>a fell words</h2>
        </AfewWordsContainer>
        <p>
          <span className="fonthightlight">Hey there!</span> I&apos;m Karen, a
          web designer, currently settled in Madrid. I have a a passion for
          creating user-friendly websites
          <span className="fonthightlight">♥</span>, with a focus on&nbsp;
          <span className="borderHightlight">
            frontend <span className="fonthighlight">&</span> UX/UI design.
          </span>
          &nbsp; SO, &nbsp;
          <span className="borderBottonhightlight">
            how I can help your team?
          </span>{' '}
          <span className="fonthightlight">Why me?</span> Well, let&apos;s just
          say I&apos;m like a{' '}
          <span className="fonthighlight">
            <i>chameleon</i>
          </span>
          - I CAN ADAPT TO ANY STYLE THAT SUITS YOUR PROJECTS. MY GOAL IS TO
          CREATE DESIGNS THAT WILL MAKE YOU SAY{' '}
          <span className="fonthightlight">
            &quot;WOW, THAT&apos;S EXACTLY WHAT I WAS THINKING!&quot;
          </span>
          <br />
          (And let&apos;s be honest, I&apos;ll probably do a little happy dance
          when that happens
          <span>
            {' '}
            <img src={GifDanceImage} alt="happy-dance" autoPlay loop />
          </span>
          ).
        </p>

        {/* <p>
        So go ahead and hire me, and let&apos;s work together to create
        something great!
      </p> */}
      </ContainerDescriptionAbout>
      <AfewWordsContainer>
        <h2>lets talk</h2>
      </AfewWordsContainer>
      <EmailContact>
        <h3 className="email">
          <span>duarte.karen21@gmail.com</span>
        </h3>
        {/* <img src={Apple01} alt="manzana" /> */}
        <AnimationApple />
      </EmailContact>
    </>
  );
}

export default SmoothScroll;
