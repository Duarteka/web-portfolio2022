/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from 'styled-theming';
import { JsSquare } from '@styled-icons/fa-brands/JsSquare';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Figma } from '@styled-icons/simple-icons/Figma';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { Notion } from '@styled-icons/simple-icons/Notion';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

export const backgroundColor = theme('theme', {
  light: '#373737',
  dark: '#F9F5E7'
});
export const textColor = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});
const JavaScriptLogo = styled(JsSquare)`
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;

const ReactLogoLogo = styled(ReactLogo)`
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const FigmaLogo = styled(Figma)`
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const ReduxLogo = styled(Redux)`
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const NotionLogo = styled(Notion)`
  height: 100px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
export default function Introduction() {
  const text = useRef({ value: 1 });
  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            trigger: '#section1',
            scrub: 1,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -150);
              gsap.set('#section1 div', {
                skewX: skew
              });
            }
          }
        }
      })

      .from('#section1 div', {
        y: 1600
      });
  }, [text]);
  return (
    <>
      <Borderline>
        <Scroll>
          <ScrollM>
            <div>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
              <h3>
                <span>&nbsp;AVAILABLE </span>
                <span>TO </span>
                <span> WORK&nbsp; </span>
              </h3>
            </div>
          </ScrollM>
        </Scroll>
      </Borderline>

      <div className="containerToolsIcons">
        <div
          style={{
            width: '100%',
            display: 'flex',

            justifyContent: 'center'
          }}
        >
          <JavaScriptLogo /> <ReactLogoLogo /> <FigmaLogo /> <ReduxLogo />{' '}
          <NotionLogo />
        </div>
        <div className="containerTextTools">
          <h4>
            SIMPLE AND POWERFULL TOLLS
            <br /> TO BUILD AMAZING WEB’S
          </h4>
        </div>
      </div>
    </>
  );
}
const scrollText = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-50%);
}
`;
const Borderline = styled.div`
  width: 100vw;

  position: absolute;
  top: 100%;
`;

const Scroll = styled.div`
  position: relative;
  width: 100vw;
  min-height: 80px;
  overflow: hidden;
  padding: 0.4%;
`;
const ScrollM = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  white-space: nowrap;
  transition: all 2s ease;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    animation: ${scrollText} 10s infinite linear;
    background-color: ${backgroundColor};
    border-radius: 15px 15px 15px 15px;
    width: 200vw;
    margin-top: 0.3%;
  }
  h3 {
    padding: 0;

    color: ${textColor};
    font-size: 2rem;
  }
`;
