/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { Slide } from '../slideAnimation/Slide';
import HorizontalScroll from '../utils/horizontalscroll';
import {
  backgroundColor,
  textColor,
  textColorBringUpReverse
} from '../../styled';
import {
  SubtitleHeaderSection,
  TextHeaderSection
} from '../slideAnimation/TextHeaderSection';

gsap.registerPlugin(ScrollTrigger);
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

const container = document.querySelector('.backgroundChangecolor');

function Process() {
  const text = useRef({ value: 1 });
  const color = useRef({ value: 1 });
  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: 'right bottom',
            end: 'bottom top',
            trigger: '#section3',
            scrub: 8,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-10, 10);
              const skew = clamp(self.getVelocity() / -100);
              gsap.to('#section3 h3', { skewX: -skew });
            }
          }
        }
      })
      .fromTo(
        '#section3 h3:first-of-type',
        {
          xPercent: 100
        },
        { xPercent: -5 }
      )
      .fromTo(
        '#section3 h3:nth-of-type(2)',
        {
          xPercent: -100
        },
        { xPercent: 10 }
      );
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            trigger: '.backgroundChangecolor',
            end: `xPercent: -100 *${container}`,
            pin: true,
            scrub: true
          }
        }
      })
      .to('.backgroundChangecolor', {
        y: -100,
        duration: 2,
        backgroundColor: '#111',
        ease: 'none'
      });
  }, [text, color]);

  return <HowIworkCarrussel />;
}
export function HowIworkCarrussel() {
  const SampleCards = React.memo(() =>
    howItworks.map((_e, i) => (
      <SampleCard key={`sampleCard-${i}`}>
        <h2 id="#section3">{_e.largeText}</h2>

        <iframe
          title={_e.frameTitle}
          allow="fullscreen"
          frameBorder="0"
          height="270"
          src={_e.image}
          width="480"
        />

        <p>{_e.description}</p>
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

const HorizontalSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100%;
  max-height: 100%;
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
    color: ${textColorBringUpReverse};

    padding: 2rem;
  }
  p {
    margin: 2rem 5rem;
    color: ${backgroundColor};
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
const SampleCard = styled.div`
  position: relative;
  height: 100vh;
  width: 770px;
  border: solid 1.5px ${backgroundColor};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
