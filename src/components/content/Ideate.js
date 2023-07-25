/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
import { textColor, textColorBringUp } from '../../styled';
import Ideate from '../../assets/ideate.webp';
import Design from '../../assets/design.webp';
import Develop from '../../assets/develop.webp';
import InfiniteTextFrame from '../utils/InfiniteTextFrame';

const TextWrapper = styled.div`
  height: 300vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;

  .hiddenSection {
    height: 100vh;
    border-top: solid 1px black;
    overflow: hidden;
    cursor: none;
  }
  .cursor {
    position: fixed;
    background-color: #e6a1af;
    opacity: 90%;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    pointer-events: none;
    z-index: 1;
    mix-blend-mode: multiply;
  }

  h1 {
    color: inherit;
    font-size: 18rem;
  }

  .imageContainer.firstImage img {
    transform: translate(79%, -4%);
    width: 50%;
    max-width: 0%;
    height: auto;
  }

  .imageContainer.secondImage img {
    transform: translate(154%, 12%);
    max-width: 40%;
  }
  .imageContainer.thirdImage img {
    transform: translate(23%, 0%);
    width: 50%;
    max-width: 30%;
    height: auto;
  }

  img {
    max-width: 50%;
    background-size: cover;
    position: relative;
    z-index: 1;
    opacity: 80%;
  }

  .list img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .list {
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    position: relative;
    cursor: none;

    .list h1 {
      position: relative;
      z-index: 2;
    }

    h1 {
      width: 100%;
      position: relative;
      display: inline-block;
      font-weight: bold;
      line-height: 1.9;
      letter-spacing: 30px;
      overflow: hidden;
      color: transparent;
      -webkit-text-stroke: 2px ${textColor};
      z-index: 2;

      .outer {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        color: ${textColor};
        transform: translateX(-100%);
      }
      .inner {
        display: inline-block;
        transform: translateX(100%);
      }
      .outer,
      .inner {
        transition: transform 0.15s cubic-bezier(0.29, 0.73, 0.74, 1.02);
      }
    }

    [data-animation='to-top'] .inner {
      transform: translateY(-100%);
    }

    [data-animation='to-top'] .outer {
      transform: translateY(100%);
    }
  }

  @media (max-width: 843px) {
    .list h1 {
      letter-spacing: 3px;
      font-size: 15rem;
    }
  }
`;

const TextLoop = styled.div`  
  width; 100vh;
  display: flex;
  flex-direction: column;
  height:100%;
  max-height: 100%;
  margin-top: -3rem;
  overflow-y: hidden;
 
  h2{
    margin: 0 5rem;
    padding: 2rem 9;
  }
  h3{
    margin: 2rem 7rem;
  }
  
  
  `;

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 1,
    title: 'Ideate',
    image: Ideate,
    alt: 'First image',

    textInfiniteh2: [
      { id: 1, text: 'DESIGN THINKING' },
      { id: 2, text: ' BRAIN STORM' },
      { id: 3, text: 'USER STRATEGY' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'NOTION' },
      { id: 2, text: ' PAPER' },
      { id: 3, text: 'NOTEPAD' },
      { id: 4, text: 'A NON-LINEAR PROCESS' }
    ]
  },
  {
    id: 2,
    title: 'Design',
    image: Design,
    alt: 'Second image',

    textInfiniteh2: [
      { id: 1, text: 'UI /UXDESIGN ' },
      { id: 2, text: ' WIREFRAMING' },
      { id: 3, text: 'PROTOTYPING' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'ANTDESIGN' },
      { id: 2, text: ' FIGMA' },
      { id: 3, text: 'ADOBE' },
      { id: 4, text: 'ADOBE XD' },
      { id: 5, text: 'ILLUSTRATOR' },
      { id: 6, text: 'WEBFLOW' },
      { id: 7, text: 'CSS/BEM ' },
      { id: 8, text: 'STYLED ' }
    ]
  },
  {
    id: 3,
    title: 'Develop',
    image: Develop,
    alt: 'Third image',

    textInfiniteh2: [
      { id: 1, text: 'UNIT TEST' },
      { id: 2, text: ' CONTROL VERSION' },
      { id: 3, text: 'USER TESTING' }
    ],
    textInfiniteh3: [
      { id: 1, text: 'JAVASCRIPT' },
      { id: 2, text: ' REACT JS' },
      { id: 3, text: 'GSAP' },
      { id: 4, text: 'HTML ' },
      { id: 5, text: 'TYPESCRIPT' },
      { id: 6, text: 'NODE JS' },
      { id: 7, text: 'JEST ' },
      { id: 8, text: 'REDUX RTK ' },
      { id: 9, text: 'WEBPACK ' }
    ]
  }
];

export default function TextFill() {
  const wrapperRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // ------------mouse effect animation-----------

  const mouseListener = (e) => {
    setCursorPos({
      x: e.clientX - 10,
      y: e.clientY - 10
    });
  };

  const scaleCursorIn = () => {
    gsap.to('.cursor', {
      scale: 18,
      duration: 0.7
    });
    gsap.to('hiddenSection', {
      color: 'white',
      duration: 0.7
    });
  };

  const scaleCursorOut = () => {
    gsap.to('.cursor', {
      scale: 1,
      duration: 0.7
    });
    gsap.to('hiddenSection', {
      color: '#E6A1AF',
      duration: 0.7
    });
  };
  useEffect(() => {
    const button = document.querySelector('.hiddenSection');

    window.addEventListener('mousemove', mouseListener);
    button.addEventListener('mouseenter', scaleCursorIn);
    button.addEventListener('mouseleave', scaleCursorOut);

    return () => {
      window.removeEventListener('mousemove', mouseListener);
      button.removeEventListener('mouseenter', scaleCursorIn);
      button.removeEventListener('mouseleave', scaleCursorOut);
    };
  }, []);

  function getClassByIndex(index) {
    switch (index) {
      case 0:
        return 'firstImage';
      case 1:
        return 'secondImage';
      case 2:
        return 'thirdImage';
      default:
        return '';
    }
  }
  // --------------- text animation fill------------
  useEffect(() => {
    const wrapper = wrapperRef.current;

    const texts = wrapper.querySelectorAll('h1');

    texts.forEach((h1) => {
      const id = h1.textContent.toLowerCase();
      h1.setAttribute('id', id);

      gsap.to(h1.querySelector('.outer'), {
        yPercent: -100,
        duration: 4,
        scrollTrigger: {
          trigger: h1,
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(h1.querySelector('.inner'), {
        yPercent: 100,
        duration: 4,
        scrollTrigger: {
          trigger: h1,
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }, []);

  return (
    <div className="hiddenSection">
      <HeaderTextForSection text1="Process" text2="&" text3="skills" />
      <div ref={wrapperRef}>
        <TextWrapper>
          {sections.map((section, index) => (
            <>
              <div className="list " key={section.id}>
                <div
                  className="cursor"
                  key={section.id}
                  style={{
                    top: `${cursorPos.y}px`,
                    left: `${cursorPos.x}px`
                  }}
                />
                <div className={`imageContainer ${getClassByIndex(index)}`}>
                  <img
                    key={section.id}
                    className="imageSection"
                    src={section.image}
                    alt=""
                  />
                </div>
                <div data-animation="to-top">
                  <h1 key={section.id}>
                    {section.title}
                    <span className="outer" aria-hidden="true">
                      <span className="inner">{section.title}</span>
                    </span>
                  </h1>
                </div>
              </div>
              <TextLoop>
                <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnHover
                  pauseOnClick
                  delay={0}
                  play
                  direction="left"
                >
                  {section.textInfiniteh2.map((item) => (
                    <div key={item.id}>
                      <h2>{item.text}</h2>
                    </div>
                  ))}
                </Marquee>
                <Marquee
                  gradient={false}
                  speed={50}
                  pauseOnHover
                  pauseOnClick
                  delay={0}
                  play
                  direction="right"
                >
                  {section.textInfiniteh3.map((item) => (
                    <div key={item.id}>
                      <h3>{item.text}</h3>
                    </div>
                  ))}
                </Marquee>
              </TextLoop>
            </>
          ))}
        </TextWrapper>
      </div>
    </div>
  );
}
const ContainerHeaderTextForSection = styled.div`
  display: flex;
  flex-direction: flex;
  position: relative;
  justify-content: space-around;
  height: 45vh;
  align-items: center;

  h3 {
  }
`;
export function HeaderTextForSection({ text1, text2, text3 }) {
  return (
    <ContainerHeaderTextForSection>
      <h3>{text1}</h3>
      <h3>{text2}</h3>
      <h3>{text3}</h3>
    </ContainerHeaderTextForSection>
  );
}
