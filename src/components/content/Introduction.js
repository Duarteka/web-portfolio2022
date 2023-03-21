/* eslint-disable no-unused-vars */
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
import { textColorBringUp } from '../styles/styles';

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
  return (
    <ContainerToolsIcons>
      <div>
        <JavaScriptLogo /> <ReactLogoLogo /> <FigmaLogo /> <ReduxLogo />{' '}
        <NotionLogo />
      </div>
      <ContainerTextTools>
        <h4>
          AND POWERFULL TOLLS
          <br /> TO BUILD AMAZING WEB’S
        </h4>
      </ContainerTextTools>
    </ContainerToolsIcons>
  );
}
const ContainerTextTools = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerToolsIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -35%;
  margin-left: 30%;
  width: 100%;
`;
