/* eslint-disable no-unused-vars */
import React from 'react';

import TextSlide from '../content/TextSlide';
import ContactPage from '../pages/ContactPage';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import ProjectList from '../main/ProjectsList';
import IdeatePrueba from '../content/IdeatePrueba';
import HeaderContent from './Header';
import Process from '../content/Process';
import DowloadCV from '../content/DowloadCV';

function Home() {
  return (
    <>
      <HeaderContent />
      <DowloadCV />
      <ProjectList />
      <IdeatePrueba />
      <AboutMeHome />
      {/* <Process /> */}
      {/* <TextSlide /> */}

      <Footer />
    </>
  );
}
export default Home;
