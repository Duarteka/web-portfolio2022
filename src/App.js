/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { store } from './components/utils/redux/store';
import ContactPage from './components/pages/ContactPage';
import About from './components/pages/AboutPage';
import BackgroundTexture from './assets/backgroundTexture.jpg';
import DarkThemeProvider from './components/utils/redux/DarkThemeProvider';
import Home from './components/header/Home';
import { backgroundColor, textColor, TextureBackground } from './styled';
import Navbar from './components/navigation/Navbar';

import Form1 from './assets/form1.webp';
import Form2 from './assets/form2.webp';
import Form3 from './assets/form3.webp';
import ProjectList from './components/main/ProjectsList';
import Footer from './components/footer/Footer';
import ProjectDetail from './components/main/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

function BackgroundNoise() {
  return (
    <TextureBackground>
      <img src={BackgroundTexture} alt="" />
    </TextureBackground>
  );
}
function App() {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Wrapper>
          <BackgroundNoise />
          <Navbar />

          <Shapes />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/seemore" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Wrapper>
      </DarkThemeProvider>
    </ReduxProvider>
  );
}
function Shapes() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const images = imageRefs.current;

    gsap.to(images[0], {
      rotation: 360,
      yoyo: true,
      scale: 2.5,
      repeat: -1,
      duration: 15,
      ease: 'linear',
      y: '-50%',
      x: '80%'
    });
    const initialAnim = gsap.to(images[1], {
      rotation: '-=360',
      duration: 3.5,

      repeat: -1,
      ease: 'power1.inOut',
      paused: true // Iniciamos la animación en pausa
    });
    setTimeout(() => initialAnim.play(), 100);
    gsap.to(images[1], {
      y: '-90%',
      x: '30%',
      scrollTrigger: {
        trigger: '#shape02',
        start: 'top 30%',
        end: 'bottom 90%',
        scrub: true,
        // Cuando se inicia el ScrollTrigger, pausamos la animación inicial.
        onEnter: () => initialAnim.pause()
      },
      ease: 'power1.inOut'
    });

    gsap.to(images[2], {
      rotation: 180,
      yoyo: true,
      repeat: -1,
      duration: 10,
      ease: 'bounce.out',
      x: '60%',
      y: '-80%'
    });

    gsap.to(images, {
      x: (i) => `${i * 20 + 50}%`,
      y: (i) => `${i * 30 + 60}%`,
      // Se configura ScrollTrigger para sincronizar la animación con la posición de scroll.
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }, []);

  return (
    <ShapesAnimation className="shapesAnimartion">
      <LargeContent id="section1">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={Form1}
          alt="form1"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src={Form2}
          alt="form2"
          className="shape02"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src={Form3}
          alt="form3"
        />
      </LargeContent>
    </ShapesAnimation>
  );
}

export default App;

const Wrapper = styled.div`
  color: ${(props) => props.theme.text};
  transition: ease 1.9s;
  color: ${textColor};
  background-color: ${backgroundColor};
  position: relative;

  body {
    color: ${backgroundColor};
  }

  @media (max-width: 668px) {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
const ShapesAnimation = styled.div`
  position: absolute;
  z-index: 0;
  img {
    position: fixed;
    height: 100vh;
    opacity: 30%;
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

  #section1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
