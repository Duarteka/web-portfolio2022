import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textColor } from '../../styled';

gsap.registerPlugin(ScrollTrigger);

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: inherit;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    h1 {
      width: 100%;
      position: relative;
      display: inline-block;
      font-family: 'Oswald';
      font-weight: bold;
      line-height: 2;
      letter-spacing: -5px;
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
`;

function AnimatedText({ text }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const h1 = wrapper.querySelector('h1');

    gsap.to(h1.querySelector('.outer'), {
      yPercent: -100,
      ease: 'power2.in',
      duration: 3,
      scrollTrigger: {
        trigger: h1,
        start: 'top center+=1500',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to(h1.querySelector('.inner'), {
      yPercent: 100,
      ease: 'power2.in',
      duration: 3,
      scrollTrigger: {
        trigger: h1,
        start: 'top center+=1500',
        end: 'bottom top',
        scrub: true,
        marks: true
      }
    });
  }, []);

  return (
    <div ref={wrapperRef}>
      <TextWrapper>
        <div className="menu">
          <div data-animation="to-top">
            <h1>
              {text}
              <span className="outer" aria-hidden="true">
                <span className="inner">{text}</span>
              </span>
            </h1>
          </div>
        </div>
      </TextWrapper>
    </div>
  );
}

export default AnimatedText;
