/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Slide } from '../slideAnimation/Slide';
import { animateHeadingTwo } from '../../styled';

const behaviour = ({ perm }) => {
  if (perm) {
    return 'play none none none';
  }
  return 'restart none none reverse';
};
const toId = (str) => str.replace(' ', '-');
const animation = ({ v, perm, i }) => ({
  y: -20,
  opacity: 1,
  duration: perm ? 3 : 1,
  delay: perm ? i * 2 : 0,
  scrollTrigger: {
    trigger: `#${toId(v)}`,
    start: '20px 70%',
    end: '100% 30%',
    scrub: !perm,

    toggleActions: behaviour({ perm })
  }
});

function Headline({ className }) {
  return (
    <div className="headline-container" style={{ overflow: 'hidden' }}>
      <p className={className}>
        I’M KAREN, A JUNIOR FRONT END DEVELOPER BORN IN BRAZIL AND RAISED IN
        CHILE, CURRENTLY LIVING IN MADRID . MY EXPERIENCE INCLUDES,
        ILLUSTRATION, BRANDING, DESIGNING WEBSITES FOR FOCUSED IN CREATING MICRO
        ANIMATIONS AND UX INTERACTION
      </p>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const text = [
    { v: 'ABOUT ', align: 'left', perm: true },

    { v: 'ME', align: 'left', perm: true },

    {
      v: 'im karen i ',
      align: 'left'
    }
  ];

  useEffect(() => {
    text.forEach(({ v, perm }, index) => {
      gsap.to(`#${toId(v)}`, animation({ v, perm, i: index }));
    });
  }, [text]);

  const Header = styled.h1`
    line-height: 84px;
    font-size: 70px;
    text-transform: uppercase;
    widht: 100%;
    heigth: 100%;
  `;

  return (
    <>
      <Slide>
        <div className="aboutHeader">
          <h1>
            About<span>me</span>
          </h1>
        </div>
      </Slide>
      <section className="headings-section">
        <Headline className="heading heading-two" />

        <p>
          The reason I started creative coding was because I saw some amazing
          websites and felt like I wanted to do that too, so I started with
          basic CSS, HTML and of course JavaScript. So in 2019 i graduated from
          masters degree in web design and development with high marks. I am now
          hard at work on WEBGL and similar libraries.
        </p>
      </section>
    </>
  );
}

const AboutContainer = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  position: relative;

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
