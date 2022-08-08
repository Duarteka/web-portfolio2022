/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import theme from 'styled-theming';
import '../index.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';

import { SkillsInfo, Containerheader, TextureBackground } from '../styles';
import { AnimatedBackground } from './AnimatedBackground';
import RectangleDarkMode, { RectangleLightMode } from './RectangleDarkMode';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

// eslint-disable-next-line no-unused-vars

function HeaderContent() {
  return (
    <Containerheader>
      <h1>
        Front
        <span>end </span>
        <br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Developer
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '-8rem'
        }}
      >
        <h4>
          <span>and</span>
          graphic Designer
        </h4>
      </div>

      <SkillsInfo>
        <p>
          JUNIOR FULLSTACK DEVELOPER ESPECIALIZED IN FRONTEND &
          MULTIDISCIPLINARY DESIGNER <br /> UI & UX
        </p>
        <p>Based in Madrid</p>
      </SkillsInfo>
    </Containerheader>
  );
}

function Home() {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  return (
    <>
      {/* <div style={{ position: 'relative' }}>
        {darkThemeEnabled ? <RectangleDarkMode /> : <RectangleLightMode />}
      </div> */}

      <HeaderContent />
    </>
  );
}
export default Home;
