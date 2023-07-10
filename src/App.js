/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
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
          <ShapesAnimation>
            <ShapeOne />
          </ShapesAnimation>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/seemore" element={<ProjectList />} />
          </Routes>
        </Wrapper>
      </DarkThemeProvider>
    </ReduxProvider>
  );
}
function ShapeOne() {
  return (
    <LargeContent id="section1">
      <img src={Form1} alt="form1" />
      <img src={Form2} alt="form2" />
      <img src={Form3} alt="form3" />
    </LargeContent>
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
    opacity: 50%;
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
