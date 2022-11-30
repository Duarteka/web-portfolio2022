/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';
import { Link, NavLink } from 'react-router-dom';
import { Slide } from './slideAnimation/Slide';

import HorizontalScroll from './horizontalscroll';
import { backgroundColor, textColor, textColorBringUp } from '../styles';

gsap.registerPlugin(ScrollTrigger);

export const textColorProcess = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});

export const textColorBringUpProcess = theme('theme', {
  light: '#F9F586',
  dark: '#D34C7F'
});

function Process() {
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
          l m your next <span>creative</span> <br />
          developer
        </h1>
      </BrandKa>

      {/* <HeadingWork>
        <Slide>
          <p>
            I take my work schedule and my productivity hours very seriously, I
            will to understand every aspect of the project I am working on.
            Spend as much time as needed to refine a concept to ensure its just
            right.
          </p>
        </Slide>
      </HeadingWork> */}
      <HowIworkCarrussel />
    </>
  );
}
export function HowIworkCarrussel() {
  const howItworks = [
    {
      id: 1,
      largeText: '01.Brief',
      frameTitle: 'brief',
      description:
        'First things first, determine what goals the new website or app needs to meet. That is, what is its purpose. It is the initial stage to understand how I can integrate or start in the project. This includes exploring and answering important questions like brand attributes, audience, creative brief, etc.',

      image: 'https://giphy.com/embed/26gYPjuK6O0H63GyQ'
    },
    {
      id: 2,
      largeText: '02.Scope definition',
      frameTitle: 'Scope definition',
      description:
        'It is common for websites to gradually expand, evolve, or completely change during the design process, this is not necessarily a problem for designers, it just means more work, but if expectations don t match the level of work, projects can quickly become unrealistic. I will work with schedules and to-do lists to help set achievable deadlines and dates and work out with my team any issues that are bound to come up.',

      image: 'https://giphy.com/embed/WRQBXSCnEFJIuxktnw'
    },
    {
      id: 3,
      largeText: '03.Content Creation',
      frameTitle: 'Content Creation',
      description:
        'In this phase, I start to devise a sitemap, the information architecture of the website gives a clear idea about the pages and their visual content elements. Next is to create a mockup of the wireframe to identify and lay out the entire design concept and can help identify potential challenges and gaps with the sitemap, next is to create a visual design that will come close to the deliverable.',

      image: 'https://giphy.com/embed/YVmL3uMI8IobhU6KD7'
    },
    {
      id: 4,
      largeText: '04.Programming',
      frameTitle: 'Programming',
      description:
        'After the exhaustive layout system (or not), the real magic begins, I ll use React to build and run the components and some libraries to control the CSS sheets.In case the project requires the use of another technology, I am adaptive.',

      image: 'https://giphy.com/embed/scZPhLqaVOM1qG4lT9'
    },
    {
      id: 5,
      largeText: '05.Testing',
      frameTitle: 'Testing',
      description:
        'By now, I have all the pages and defined how they are displayed to the site visitor, so it s time to make sure everything works. I m going to combine manual site navigation on a variety of devices and browsers, from user experience issues to simple broken links.',

      image: 'https://giphy.com/embed/lz67zZWfWPsWnuGH0s'
    }
  ];
  const SampleCards = React.memo(() =>
    howItworks.map((_e, i) => (
      <SampleCard key={`sampleCard-${i}`}>
        <Slide>
          <h2>{_e.largeText}</h2>
        </Slide>
        <iframe
          title={_e.frameTitle}
          allow="fullscreen"
          frameBorder="0"
          height="270"
          src={_e.image}
          width="480"
        />
        <Slide>
          <p>{_e.description}</p>
        </Slide>
      </SampleCard>
    ))
  );
  return (
    <HorizontalSection>
      <HorizontalScroll>
        <CardsContainer>
          <SampleCards />
        </CardsContainer>
      </HorizontalScroll>
    </HorizontalSection>
  );
}
export default Process;

const BrandKa = styled.div`
  display: flex;
  flex-wrap: nowrap
  align-items: center;
  justify-content: center
  align-content: stretch;

  height: 120vh;
  position: relative;
  padding:  5rem;
  top: 7rem;
  width: 100vw;

  @media (max-width: 668px) {
    padding: 0 3rem;
  }

  h1 {
    text-transform: lowercase;
    font-size: 15rem;
    line-height: 150px;
    height: 100vh;
    width: 130%;

    @media (max-width: 668px) {
      font-size: 5rem;
      line-height: 60px;
      height: 50vh;
      width: 130%;
      padding-top: 10%;
      padding-bottom: 35%;
    }
  }
  &:nth-child(odd) {
    margin-left: random(400) - 100px;
  }

  &:nth-child(even) {
    margin-right: random(400) - 100px;
  }

  span {
    text-transform: lowercase;
    color: transparent;
    -webkit-text-stroke: 1px ${textColorBringUp};
    font-weight: 100;
    font-family: 'Lemonada';
    font-size: 12rem;

    @media (max-width: 668px) {
      font-size: 5rem;
      padding-right: 10rem;
    }
  }
`;
const HeadingWork = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: -8rem;

  justify-content: center;
  align-items: center;

  p {
    max-width: 50%;
    text-align: right;
    transform: translateX(50%);
  }
`;
const HorizontalSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: ${backgroundColor};
  border-radius: 2rem;
`;
const CardsContainer = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 0 0 13rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-family: Lemonada;
    font-size: 3rem;
    text-transform: lowercase;
    color: transparent;
    -webkit-text-stroke: 1px ${textColorBringUpProcess};
    padding: 2rem;
  }
  p {
    margin: 2rem 5rem;
    color: ${textColorProcess};
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
const SampleCard = styled.div`
  position: relative;
  height: 100vh;
  width: 770px;
  border: solid 1.5px ${textColorProcess};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Giphys = styled.iframe``;
