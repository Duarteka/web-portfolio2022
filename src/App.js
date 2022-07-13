/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';

import styled, { keyframes, createGlobalStyle } from 'styled-components';
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch
} from 'react-redux';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import theme from 'styled-theming';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Moon } from '@styled-icons/entypo/Moon';
import { Route, Routes } from 'react-router-dom';
import BackgroundTexture from './assets/backgroundTexture.png';

import { store } from './components/redux/store';

import HeaderContent from './components/HeaderContent';

import Burguer from './components/Navbar';
import Introduction from './components/Introduction';
import Proyects from './components/Proyects';
import SelectedWork from './components/SelectedWork';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import RectangleDarkMode, {
  RectangleLightMode
} from './components/RectangleDarkMode';
import DarkThemeProvider from './components/redux/DarkThemeProvider';
import { TOGGLE_DARKTHEME } from './components/redux/actions';
import { Slide } from './components/slideAnimation/Slide';
import Prueba from './components/Prueba';

const MoonLight = styled(Moon)`
  height: 30px;

  position: relative;
  margin-left: '30px';
`;

export const backgroundColor = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});
export const textColor = theme('theme', {
  light: '#373737',
  dark: '#F9F5E7'
});

const noise = keyframes`
0%, 100% { transform:translate(0, 0); }
10% { transform:translate(-5%, -10%); }
20% { transform:translate(-15%, 5%); }
30% { transform:translate(7%, -25%); }
40% { transform:translate(-5%, 25%); }
50% { transform:translate(-15%, 10%); }
60% { transform:translate(15%, 0%); }
70% { transform:translate(0%, 15%); }
80% { transform:translate(3%, 35%); }
90% { transform:translate(-10%, 10%);
`;
function BackgroundNoise() {
  return (
    <TextureBackground>
      <img src={BackgroundTexture} alt="" />
    </TextureBackground>
  );
}
const TextureBackground = styled.div`
  position: relative;
  z-indez: 10000;

  img {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    opacity: 0.95;
  }

  &:before {
    position: fixed;
    content: '';
    height: 300%;
    width: 300%;
    top: -100%;
    left: -50%;
    pointer-events: none;
    user-select: none;
    background-image: url('https://i.ibb.co/TPYtxRs/texture.png');
    opacity: 0.05;
    animation: ${noise} 8s steps(10) infinite;
  }
`;
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: ease 1.9s;
  color: ${textColor};
  background-color: ${backgroundColor};
`;
export function LightTheme() {
  const dispatch = useDispatch();
  const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });
  return (
    <ContainerToggleTheme>
      <MoonLight onClick={toggledarktheme} />
    </ContainerToggleTheme>
  );
}
function Blurcircles() {
  return (
    <Slide>
      <div>
        <div className="blur1" />
        <div className="blur2" />
      </div>
    </Slide>
  );
}

function App() {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );

  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Wrapper>
          <div>
            {darkThemeEnabled ? <RectangleDarkMode /> : <RectangleLightMode />}
          </div>
          <BackgroundNoise />
          <Burguer />
          <Blurcircles />
          <HeaderContent />
          <LightTheme />
          <Introduction />
          <SelectedWork />
          <Proyects />
          {/* <About /> */}
          {/* <AboutPage />  */}
          {/* <Contact />
          <ContactPage />
          <Footer /> */}
        </Wrapper>
      </DarkThemeProvider>
      <Routes>
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </ReduxProvider>
  );
}
const ContainerToggleTheme = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
  position: relative;
  height: 100vh;
`;
export default App;
