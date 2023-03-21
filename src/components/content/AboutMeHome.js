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
  textColorBringUpReverse
} from '../../styled';

export const ContainerDescriptionAbout = styled.div`
  span {
    color: ${textColorBringUpReverse};
  }
  p {
    color: ${backgroundColor};
    opacity: 0;
  }

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
  text-align: justify;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;
gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const sectionRef = useRef(null);
  const bgColor = {
    from: darkThemeEnabled ? '#373737' : '#F9F5E7',
    to: darkThemeEnabled ? '#F9F5E7' : '#373737'
  };

  useEffect(() => {
    const section = sectionRef.current;

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
    // colorTl.to(section, { opacity: 0, duration: 3 });
    colorTl.to(section, {
      opacity: 1,
      backgroundColor: gsap.utils.interpolate(bgColor.to),
      duration: 1,
      pin: true,
      pinSpacing: false
    });
    colorTl.to('p', { opacity: 1 });

    // const containerHeight = container.clientHeight;

    // const handleScroll = () => {
    //   const scrollPosition = window.scrollY + containerHeight;
    //   const containerPosition = container.offsetTop + containerHeight;
    //   const scrollPercentage =
    //     scrollPosition > container.offsetTop
    //       ? Math.min(
    //           1,
    //           (scrollPosition - container.offsetTop) / containerHeight
    //         )
    //       : 0;

    //   gsap.to(container, {
    //     backgroundColor: gsap.utils.interpolate(
    //       bgColor.from,
    //       bgColor.to
    //     )(scrollPercentage),
    //     ease: 'none',

    //   });

    // };

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [bgColor.to, darkThemeEnabled]);
  return (
    <ContainerDescriptionAbout ref={sectionRef}>
      <p>
        <span
          style={{
            fontSize: '0.9rem',
            fontWeight: 400,
            wordBreak: 'keep-all',
            paddingRight: '60rem'
          }}
        >
          a few words about &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
        </span>
        I&apos;M A DESIGNER WHO DOESN&apos;T STOP UNTIL EVERYTHING IS IN PLACE,
        WITH A KEEN EYE FOR GOOD DESIGN PATTERNS AND A FOCUS ON SATISFYING USER
        NEEDS. I LIKE TO EXPERIMENT AND BE CREATIVE, BUT NEVER FORGET THE
        IMPORTANCE OF COHERENCE AND FUNCTIONALITY.
      </p>
    </ContainerDescriptionAbout>
  );
}

export default SmoothScroll;
