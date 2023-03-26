/* eslint-disable no-unused-vars */
// /* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

export default function TextSlide() {
  useEffect(() => {
    const animateTextSlide = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.text-slide-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      tl.to('.text-slide-one', {
        xPercent: -100
      }).to(
        '.text-slide-two',
        {
          xPercent: 100
        },
        0
      );
    };
    animateTextSlide();
  }, []);

  return (
    <SectionTextSlide className="text-slide-container">
      <h2 className="text-slide text-slide-one">
        ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio 2022 ✵ &#32; Karen
        Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio 2022 ✵ &#32;
        Karen Portfolio ✵ Karen Portfolio 2022 ✵&#32; Karen Portfolio 2022 ✵
        &#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio
        2022 ✵ &#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen
        Portfolio 2022 ✵&#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32;
        Karen Portfolio 2022 ✵ &#32; Karen Portfolio
      </h2>
      <MiddleText />
    </SectionTextSlide>
  );
}

function MiddleText() {
  return (
    <SectionTextSlide
      className="text-slide text-slide-two"
      style={{ position: 'relative' }}
    >
      <h2 className="text-slide" style={{ borderBottom: '1px solid' }}>
        ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio 2022 ✵ &#32; Karen
        Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio 2022 ✵ &#32;
        Karen Portfolio ✵ Karen Portfolio 2022 ✵&#32; Karen Portfolio 2022 ✵
        &#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen Portfolio
        2022 ✵ &#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32; Karen
        Portfolio 2022 ✵&#32; Karen Portfolio ✵ Karen Portfolio 2022 ✵ &#32;
        Karen Portfolio 2022 ✵ &#32; Karen Portfolio
      </h2>
      <h2
        className="text-slide"
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          borderBottom: '1px solid',
          borderTop: 'solid 1px'
        }}
      >
        available to work ✵ available to work ✵ available to work ✵ available to
        work ✵ available to work ✵ available to work ✵ available to work ✵
        available to work ✵ available to work ✵ available to work ✵
      </h2>
    </SectionTextSlide>
  );
}

const SectionTextSlide = styled.section`
  .text-slide {
    white-space: nowrap;
    line-height: 120%;
    margin: 0;
    text-transform: uppercase;
    min-width: 300%;
    font-size: 4rem !important;
  }

  @media (max-width: 668px) {
    max-width: 100vw;
    overflow: hidden;
    font-size: 1rem !important;
  }
`;
