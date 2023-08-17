/* eslint-disable no-unused-vars */
import React from 'react';

import { useMediaQuery } from 'react-responsive';
import TextSlide from '../content/TextSlide';
import ContactPage from '../pages/ContactPage';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import ProjectList from '../main/projects/ProjectsList';
import IdeatePrueba from '../content/IdeatePrueba';
import HeaderContent from './Header';
import Process from '../content/Process';
import DowloadCV from '../content/DowloadCV';
import ProjectsCarrussel from '../main/projects/ProjectsCarrussel';
import HorizontalScroll from '../content/horizontal-scroll';

function Home() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <>
      <HeaderContent />
      <DowloadCV />
      {isDesktopOrLaptop && <ProjectsCarrussel />}
      {isTabletOrMobile && <ProjectList />}
      <IdeatePrueba />
      <AboutMeHome />

      {/* <Process /> */}
      {/* <TextSlide /> */}

      <Footer />
    </>
  );
}
export default Home;
