/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from 'styled-theming';
import { JsSquare } from '@styled-icons/fa-brands/JsSquare';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Figma } from '@styled-icons/simple-icons/Figma';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { Notion } from '@styled-icons/simple-icons/Notion';

import { Slide } from './slideAnimation/Slide';

export const backgroundColor = theme('theme', {
  light: '#373737',
  dark: '#F9F5E7'
});
export const textColor = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});
const JavaScriptLogo = styled(JsSquare)`
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;

const ReactLogoLogo = styled(ReactLogo)`
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const FigmaLogo = styled(Figma)`
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const ReduxLogo = styled(Redux)`
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
const NotionLogo = styled(Notion)`
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid;
  padding: 0.3%;
  margin: 0.2%;
`;
export default function Introduction() {
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

      <Slide>
        <div className="containerToolsIcons">
          <div style={{ width: '100vh' }}>
            <JavaScriptLogo /> <ReactLogoLogo /> <FigmaLogo /> <ReduxLogo />{' '}
            <NotionLogo />
          </div>
          <div className="containerTextTools">
            <h4>SIMPLE AND POWERFULL TOLLS TO BUILD AMAZING WEB’S</h4>
          </div>
        </div>
      </Slide>
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
  border: 1px solid ${backgroundColor};
  border-radius: 15px 15px 15px 15px;
`;

const Scroll = styled.div`
  position: relative;
  width: 100vw;
  min-height: 80px;
  overflow: hidden;
  padding: 0.4%;

  border-radius: 15px 15px 15px 15px;
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
