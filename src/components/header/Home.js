/* eslint-disable no-unused-vars */
import React from 'react';

import TextSlide from '../content/TextSlide';
import ContactPage from '../pages/ContactPage';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import ProjectList from '../main/ProjectsList';
import TextFill from '../content/Ideate';
import HeaderContent from './Header';

function Home() {
  return (
    <>
      <HeaderContent />
      <ProjectList />
      <TextFill />
      <AboutMeHome />
      {/* <TextSlide /> */}
      <ContactPage />
      <Footer />
    </>
  );
}
export default Home;
