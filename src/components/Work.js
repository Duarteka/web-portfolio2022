/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';
import { Slide } from './slideAnimation/Slide';

gsap.registerPlugin(ScrollTrigger);

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});
function Work() {
  const ref1 = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  useEffect(() => {
    // console.log(ref1.current);

    gsap.fromTo(
      ref1.current,
      {
        opacity: 0,
        // y: 50,
        ease: Power2,
        clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
      },
      {
        opacity: 1,
        // y: 0,
        duration: 0.7,
        delay: 1.5,
        ease: Power2,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      }
    );

    itemsRef.current.map((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          // y: 20,
          scale: 1.5,
          ease: Power2,
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
        },
        {
          // y: 0,
          duration: 0.7,
          autoAlpha: 1,
          scale: 1,
          ease: Power2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false
          }
        }
      );
    });
  }, [ref1, itemsRef]);

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  return (
    <>
      <BrandKa ref={ref1}>
        <h1 ref={addToRefs}>
          l m your next <br /> <span>creative</span> <br />
          developer
        </h1>
      </BrandKa>

      <HeadingWork>
        <Slide>
          <p>
            I take my work schedule and my productivity hours very seriously, I
            will to understand every aspect of the project I am working on.
            Spend as much time as needed to refine a concept to ensure its just
            right.
          </p>
        </Slide>
      </HeadingWork>
      <ContainerBrand>
        <div>
          <h3>01.INTERACTION</h3>

          <p>
            Using information gathered, we ll propose a creative solution with
            script and visual frames. This is the concepting step.
          </p>
        </div>
        <div>
          <h3>02.PERFORMANCE</h3>
          <p>
            We ll produce the hero animation with illustration, animation and
            audio. This is the creating step.
          </p>
        </div>
        <div
          style={{
            borderBottom: '1px solid',
            paddingBottom: '3rem'
          }}
        >
          <h3>03.TEAMWORK</h3>
          <p>
            We ll produce cutdowns and still assets in various formats for
            delivery. This is the delivery step.
          </p>
        </div>
      </ContainerBrand>
    </>
  );
}

export default Work;

const ContainerBrand = styled.div`
  display: 'flex';
  flex-direction: column;
  padding: 8%;

  p {
    max-width: 40%;
  }

  h3 {
    color: ${textColor};
    font-size: 0.7rem;
    font-family: Lemonada;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    align-items: center;
    border-top: 1px solid;
    padding: 1rem;
  }
`;

const BrandKa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  -webkit-text-stroke: 1px ${textColor};
  color: transparent;
  margin-top: 7rem;
  height: 150vh;
  position: relative;
  width: 100vw;
  padding: 0 10rem;

  h1 {
    text-transform: lowercase;
    font-size: 15rem;
    line-height: 150px;
    height: 100vh;
    width: 100vw;
    padding-top: 5%;
  }
  &:nth-child(odd) {
    margin-left: random(400) - 100px;
  }

  &:nth-child(even) {
    margin-right: random(400) - 100px;
  }

  span {
    text-transform: lowercase;
    color: ${textColor};
    font-family: 'Lemonada';
    font-size: 12rem;
  }
`;
const HeadingWork = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  justify-content: center;
  align-items: center;

  p {
    max-width: 50%;
    text-align: right;
    transform: translateX(50%);
  }
`;
