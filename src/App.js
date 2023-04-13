/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useMove } from '@use-gesture/react';
// import { gsap } from 'gsap';
import styled from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { a, useSpring, config } from '@react-spring/web';
import { Route, Routes } from 'react-router-dom';
import { store } from './components/utils/redux/store';
import ContactPage from './components/pages/ContactPage';
import About from './components/pages/AboutPage';
import BackgroundTexture from './assets/backgroundTexture.png';
import DarkThemeProvider from './components/utils/redux/DarkThemeProvider';
import Home from './components/header/Home';
import { backgroundColor, textColor, TextureBackground } from './styled';
import Burger from './components/navigation/Navbar';
import ProjectsCar from './components/projectsPage/Home';
import TextFill from './components/content/Ideate';

function BackgroundNoise() {
  return (
    <TextureBackground>
      <img src={BackgroundTexture} alt="" />
    </TextureBackground>
  );
}

function App() {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       defaults: {
  //         scrollTrigger: {
  //           trigger: '#section1',
  //           scrub: 1,
  //           onUpdate: (self) => {
  //             const clamp = gsap.utils.clamp(-20, 20);
  //             const skew = clamp(self.getVelocity() / -150);
  //             gsap.set('#section1 h1', {
  //               skewX: skew
  //             });
  //           }
  //         }
  //       }
  //     })
  //     .from('#section1 svg', {
  //       y: 200
  //     })
  //     .from('#section1 h1', {
  //       y: 1200
  //     });
  // }, []);
  const [cursorStyles, cursorApi] = useSpring(() => ({
    left: 0,
    top: 0,
    config: config.stiff
  }));
  const mouseMove = useMove(({ values: [left, top], down }) => {
    cursorApi.start({
      left: left - 25,
      top: top - 25,
      scale: down ? 1.4 : 1
    });
  });

  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Wrapper>
          {/* <div {...mouseMove()}>
            <a.div className="cursor" style={cursorStyles} /> */}
          <BackgroundNoise />
          <Burger />
          <ShapesAnimation>
            <ShapeOne />
          </ShapesAnimation>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/seemore" element={<ProjectsCar />} />
          </Routes>
          {/* </div> */}
        </Wrapper>
      </DarkThemeProvider>
    </ReduxProvider>
  );
}
function ShapeOne() {
  return (
    <LargeContent id="section1">
      <svg
        width="1379"
        height="1020"
        viewBox="0 0 1379 1020"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.76" filter="url(#filter0_f_1039_36)">
          <path
            d="M25 361.244C25 239.742 123.497 141.244 245 141.244H1137.08C1187.34 141.244 1228.08 181.986 1228.08 232.244V415.85C1228.08 665.763 970.324 832.519 742.37 730.078L496.013 619.368L160.245 853.889C103.238 893.706 25 852.92 25 783.384V361.244Z"
            fill="#DE84A1"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1039_36"
            x="-125"
            y="-8.75586"
            width="1503.08"
            height="1028.29"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_1039_36"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="826"
        height="733"
        viewBox="0 0 826 733"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.76" filter="url(#filter0_f_1039_39)">
          <path
            d="M150.567 251.579C150.567 216.044 200.997 209.155 210.528 243.388C215.826 262.42 237.527 271.489 254.792 261.887L415.099 172.728C531.799 107.822 675.283 192.203 675.283 325.738V377.15C675.283 490.544 583.359 582.468 469.965 582.468H217.205C180.402 582.468 150.567 552.633 150.567 515.83V251.579Z"
            fill="#BFE4D1"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1039_39"
            x="0.567383"
            y="0.402344"
            width="824.716"
            height="732.065"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_1039_39"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="743"
        height="1019"
        viewBox="0 0 743 1019"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.76" filter="url(#filter0_f_1039_37)">
          <path
            d="M288.408 550.882C343.353 469.072 376.575 373.824 384.25 276.095L386.878 242.644C394.731 142.65 523.306 114.233 556.575 205.138L598.603 319.981C663.992 498.653 577.801 709.926 406.09 791.872L263.734 859.808C185.882 896.961 117.724 805.016 167.823 730.423L288.408 550.882Z"
            fill="#FDF41B"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1039_37"
            x="0.68457"
            y="0.199219"
            width="769.789"
            height="1018.13"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_1039_37"
            />
          </filter>
        </defs>
      </svg>
    </LargeContent>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: ease 1.9s;
  color: ${textColor};
  background-color: ${backgroundColor};
  position: relative;

  @media (max-width: 668px) {
    max-width: 100vw;
  }
`;
const ShapesAnimation = styled.div`
  position: absolute;
  z-index: 0;
  svg {
    position: fixed;
    height: 100vh;
  }
`;

const LargeContent = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;

  #section1 {
    position: relative;
    overflow: hidden;
    height: auto;
  }
  @media (max-width: 668px) {
    max-width: 100vw;

    overflow: hidden;
  }
  div {
    z-index: 2;
    left: 70%;
    top: 20%;
    transform: translate(-50%, -50%);
  }
  #section1 h1:first-of-type {
    left: 20%;
    top: 40%;
  }
  svg {
    opacity: 0.4;
  }
  .shape-two {
    transform: translate(50rem, -66rem);
  }

  .shape-three {
    transform: translate(13rem, -104rem);
  }

  #section1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
