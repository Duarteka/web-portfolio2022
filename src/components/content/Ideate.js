/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { textColor, textColorBringUp } from '../../styled';

const TextWrapper = styled.div`
  height: 300vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: inherit;
    font-size: 20rem;
  }

  .list {
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80vh;

    h1 {
      width: 100%;
      position: relative;
      display: inline-block;
      font-weight: bold;
      line-height: 1.4;
      overflow: hidden;
      color: transparent;
      -webkit-text-stroke: 2px ${textColor};

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
`;
gsap.registerPlugin(ScrollTrigger);

const sections = [
  { title: 'Ideate' },
  { title: 'Design' },
  { title: 'Develop' }
];

export default function TextFill() {
  const wrapperRef = useRef(null);

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
    <div ref={wrapperRef}>
      <TextWrapper>
        {sections.map((section, index) => (
          <div className="list">
            <div data-animation="to-top">
              <h1>
                {section.title}
                <span className="outer" aria-hidden="true">
                  <span className="inner">{section.title}</span>
                </span>
              </h1>
            </div>
          </div>
        ))}
      </TextWrapper>
    </div>
  );
}
