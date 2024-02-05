/* eslint-disable no-unused-vars */
import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import TextSlide from '../content/TextSlide';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import IdeatePrueba from '../content/IdeatePrueba';
import HeaderContent from './Header';
import ProjectsCarrussel from '../main/projects/ProjectsCarrussel';

import AboutDesign from '../content/AboutDesign';
import { backgroundColor, textColor } from '../../styled';

function Home() {
  // const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  // const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  const darkThemeEnabledFooter = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const footerBackgroundColor = darkThemeEnabledFooter
    ? backgroundColor
    : textColor;

  return (
    <>
      <HeaderContent />

      {/* {isDesktopOrLaptop && <ProjectsCarrussel />}
      {isTabletOrMobile && <ProjectList />} */}
      {/* <BackgroundMorphing /> */}
      <ProjectsCarrussel />
      <AboutDesign />

      <IdeatePrueba />
      <AboutMeHome />

      {/* <Process /> */}
      {/* <TextSlide /> */}

      <Footer footerBackgroundColor={footerBackgroundColor} />
    </>
  );
}
export default Home;
