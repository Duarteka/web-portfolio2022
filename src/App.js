/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector
} from 'react-redux';
import theme from 'styled-theming';

import { Route, Routes } from 'react-router-dom';

import { store } from './components/redux/store';

import Introduction from './components/Introduction';
import Proyects from './components/Proyects';
import SelectedWork from './components/SelectedWork';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import About from './components/About';

import BackgroundTexture from './assets/backgroundTexture.png';
import RectangleDarkMode, {
  RectangleLightMode
} from './components/RectangleDarkMode';
import DarkThemeProvider from './components/redux/DarkThemeProvider';
import { TOGGLE_DARKTHEME } from './components/redux/actions';

import Work from './components/Work';

import { AnimatedBackground } from './components/AnimatedBackground';
import { ProjectsPage } from './components/ProjectsPage';
import Home from './components/Home';
import Burger from './components/navigation/Navbar';
import { ContainerToggleTheme, MoonLight, TextureBackground } from './styles';
import Transition from './components/Transition';

export const backgroundColor = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});
export const textColor = theme('theme', {
  light: '#373737',
  dark: '#F9F5E7'
});

function BackgroundNoise() {
  return (
    <TextureBackground>
      {/* <AnimatedBackground /> */}
      <img src={BackgroundTexture} alt="" />
    </TextureBackground>
  );
}
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
      <button
        style={{
          border: 'none',
          textDecoration: 'none',
          backgroundColor: 'transparent'
        }}
        onClick={toggledarktheme}
        type="button"
      >
        <MoonLight />
      </button>
    </ContainerToggleTheme>
  );
}
// function Blurcircles() {
//   return (
//     <Slide>
//       <div>
//         <div className="blur1" />
//         <div className="blur2" />
//       </div>
//     </Slide>
//   );
// }

function App() {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );

  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Wrapper>
          <LightTheme />
          <BackgroundNoise />

          {/* <HeaderContent /> */}
          <Burger />
          {/* <Introduction /> */}
          {/* <SelectedWork />
    <Proyects /> */}
          {/* <Prueba /> */}
          {/* <Work /> */}
          {/* <About />
    <ContactPage /> */}
          {/* <Footer /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/seemore" element={<Proyects />} />
          </Routes>
        </Wrapper>
      </DarkThemeProvider>
    </ReduxProvider>
  );
}

export default App;
