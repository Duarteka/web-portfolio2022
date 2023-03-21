/* eslint-disable react/function-component-definition */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';

import { textColor } from '../../styled';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

export function TextHeaderSection(props) {
  const text = useRef({ value: 1 });

  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: 'rigth bottom',
            end: 'bottom top',
            trigger: `#${props.id}`,
            scrub: 5,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -100);
              gsap.to(`#${props.id} h1`, { skewX: -skew });
            }
          }
        }
      })
      .fromTo(
        `#${props.id} h1:first-of-type`,
        {
          xPercent: 100
        },
        { xPercent: -30 }
      )
      .fromTo(
        `#${props.id} h1:nth-of-type(2)`,
        {
          xPercent: -100
        },
        { xPercent: 50 }
      );
  }, [text, props.id]);

  return (
    <Sectionthree id={props.id} className="largeContent">
      <>
        <div className="hiddenSection">
          <h1>{props.title} </h1>
          <h1>
            <span>{props.title}</span>
          </h1>
        </div>
        <h1>{props.title} </h1>
      </>
    </Sectionthree>
  );
}

export function SubtitleHeaderSection(props) {
  return (
    <SubtitleHeaderSectioncontainer>
      <h2>{props.subtitle} </h2>
    </SubtitleHeaderSectioncontainer>
  );
}

const Sectionthree = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  position: relative;
  max-width: 100vw;
  margin: 10rem 0;

  @media (max-width: 668px) {
    margin-left: 0;
  }

  h1 {
    max-width: 100vw;
    font-size: 20rem;

    @media (max-width: 668px) {
      font-size: 5rem;
      margin-top: 35%;
    }
  }
  span {
    font-family: 'Lemonada';
    font-weight: 400;
    color: ${textColor};
    text-transform: lowercase;
  }

  .hiddenSection {
    pointer-events: none !important;
    background-color: #ffff9e;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    overflow-x: hidden;
  }
`;

const SubtitleHeaderSectioncontainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: none;
  max-height: none;

  h2 {
    max-width: 20%;
  }
`;
