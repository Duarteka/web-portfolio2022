/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Transition from './Transition';

export default function About() {
  const about = gsap.timeline();
  const abouth1 = useRef(null);
  const aboutimg = useRef(null);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        abouth1.current,
        {
          skewX: 10,
          x: 0,
          opacity: 0
        },
        {
          skewX: 0,
          x: +200,
          opacity: 1
        }
      )
      .fromTo(
        aboutimg.current,
        {
          y: +200,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1
        }
      );
  }, []);

  return (
    <AboutContainer>
      <Transition timeline={about} />

      <h1 ref={abouth1}>
        About<span>me</span>
      </h1>

      <h3 ref={aboutimg}>
        I’M KAREN, A JUNIOR FRONT END DEVELOPER BORN IN BRAZIL AND RAISED IN
        CHILE, CURRENTLY LIVING IN MADRID . MY EXPERIENCE INCLUDES,
        ILLUSTRATION, BRANDING, DESIGNING WEBSITES FOR FOCUSED IN CREATING MICRO
        ANIMATIONS AND UX INTERACTION
      </h3>

      <p>
        The reason I started creative coding was because I saw some amazing
        websites and felt like I wanted to do that too, so I started with basic
        CSS, HTML and of course JavaScript. So in 2019 i graduated from masters
        degree in web design and development with high marks. I am now hard at
        work on WEBGL and similar libraries.
      </p>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;

  p {
    text-align: justify;
    padding: 0 4%;
  }

  span {
    font-size: 9rem;
    margin: 0;
    font-family: 'Lemonada';
    top: 0;
    text-transform: lowercase;
  }
  h3 {
    font-weight: 100;
    font-size: 3rem;
    margin: 0;
    padding: 0 10%;
    text-align: right;
  }
`;
