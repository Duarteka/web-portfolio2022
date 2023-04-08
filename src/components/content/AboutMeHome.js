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

import GifDanceImage from '../../assets/dancegif.gif';

export const ContainerDescriptionAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin-top: 10rem;
  height: 130vh;
  transition: ease-in 0.2s;

  position: relative;
  text-align: left;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .fonthightlight {
    font-family: 'Lemonada';
    font-size: 1.8rem;
    text-transform: lowercase;
    color: ${textColorBringUp};
  }
  .borderHightlight {
    border: solid 1px white;
    font-size: 2.5rem;
    padding: 0.5rem;
  }
  .borderBottonhightlight {
    text-decoration: underline;
    font-size: 2.5rem;
  }
  .fonthighlight {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
  }
  p {
    font-size: 2.5rem;
    line-height: 1.5;
    letter-spacing: 0.05em;
  }

  .textInside {
    width: 55vw;
  }
  span {
    color: ${backgroundColor};

    img {
      max-width: 10%;
      max-height: 5%;
      margin-top: -1.5rem;
    }
  }
  p {
    color: ${backgroundColor};
    opacity: 0;
  }
  .subtitleTextInside {
    font-size: 1.2rem;
    text-transform: lowercase;
  }
`;
gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  const sectionRef = useRef(null);
  const bgColor = {
    from: '#373737',
    to: '#373737'
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: 'top 10%',
          end: 'top 20%',
          pin: true,
          pinSpacing: false
        }
      });
      colorTl.to(section, {
        opacity: 1,
        backgroundColor: gsap.utils.interpolate(bgColor.from, bgColor.to),
        duration: 1,
        pin: true,
        pinSpacing: false
      });
      colorTl.to('p', { opacity: 1 });
    }
  }, [bgColor.from, bgColor.to, sectionRef]);

  return (
    <ContainerDescriptionAbout ref={sectionRef}>
      <p>
        <span className="fonthightlight">Hey there!</span> I&apos;m Karen, a web
        designer originally from SP Brazil, currently settled in Madrid. I have
        a a passion for creating user-friendly websites
        <span className="fonthightlight">♥</span>, with a focus on{' '}
        <span className="borderHightlight">
          frontend <span className="fonthighlight">&</span> UX/UI design.
        </span>{' '}
        <br />
        But enough about my amazing design skills,{' '}
        <span className="borderBottonhightlight">
          let&apos;s talk about how I can help your team.
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
        (And let&apos;s be honest, I&apos;ll probably do a little happy dance
        when that happens
        <span>
          {' '}
          <img src={GifDanceImage} alt="happy dance" autoPlay loop />
        </span>
        ).
      </p>

      <p>
        So go ahead and hire me, and let&apos;s work together to create
        something great!
      </p>
    </ContainerDescriptionAbout>
  );
}

export default SmoothScroll;
