/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextSlide } from '../content/TextSlide';

import ContactPage from '../pages/ContactPage';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import { textColor, textColorBringUp } from '../../styled';
import { TextAppears } from '../content/Presentation';
import Process from '../content/Process';
import { ArrowdownHeader, ArrowDownIcon } from '../icons/Icons';
import ProjectList from '../main/ProjectsList';
import Modal from '../pruebas/Modal';
import ArrowIconAnimation from './ArrowIconAnimation';

const ListStyled = styled.div`
  overflow: hidden;
  .devs2 {
    perspective: 5000px;
    position: relative;
  }
`;

gsap.registerPlugin(ScrollTrigger);

function HeaderContent() {
  const devs2Ref = React.useRef(null);

  useEffect(() => {
    const devs2 = devs2Ref.current.querySelectorAll('span');

    gsap.fromTo(
      devs2,
      {
        opacity: 0,
        x: (i) => (i + 1) * 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.4,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: devs2Ref.current,
          start: 'top 80%',
          marks: true
        }
      }
    );
  }, []);

  return (
    <>
      <Containerheader>
        <ListStyled>
          <div className="section" />
          <div className="devs2" ref={devs2Ref}>
            <h1>
              <span>HELLO,</span> <br />
              <span> I &nbsp;DESIGN&nbsp; </span>
              <span>AND&nbsp; &nbsp;</span>
              <span>DEVELOP</span>
              <br />
              <span>WEB&nbsp; </span> <span>PAGES</span>
            </h1>
            <span className="based-in">
              <h4>Based in Madrid</h4>
            </span>
          </div>
        </ListStyled>
        {/* <h1>
          Front
          <span>end</span>
          <br /> &nbsp; &nbsp;Developer
        </h1> */}

        {/* <ContainerGraphicDes>
        <h4>
          <span>and</span>
          graphic Designer
        </h4>
      </ContainerGraphicDes> 
        <SkillsInfo>
          <p>web designer</p>
          <p>ESPECIALIZED IN FRONTEND</p>
          <p> & </p>
          <p>UI / UX</p>
         
        </SkillsInfo> */}
      </Containerheader>

      {/* <BorderLine>
        <div className="line" />
      </BorderLine> */}
      {/* <BasedOn>
        <p>based on madrid</p>
        <ArrowdownHeader />
      </BasedOn> */}
    </>
  );
}

const ContainerGraphicDes = styled.div`
  width: 100vw;
  display: flex;
  padding: 1.2rem 0;
  justify-content: center;

  span {
    color: ${textColorBringUp};
  }

  @media (max-width: 668px) {
    padding: 0;
    display: flex;
    width: 95vw;
    height: 10vh;
  }
`;
const Containerheader = styled.header`
  color: ${textColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  align-self: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: none;
  min-height: 100vh;
  flex: 0 0 auto;

  .based-in{
    color: ${textColorBringUp};
    display: flex;
    widht: 100vw;
    justify-content: flex-end;
    transform-translate: (2rem, 3rem);
    margin-top: -2rem;
    margin-right: 8rem;
  }
  @media (max-width: 668px) {
   padding: 2rem;
   height: 40vh;
  }
  h4 {
    @media (max-width: 668px) {
      font-size: 1rem;
      align-self: center;
    }
  }
  h1 {
    align-self: center;
    font-size: 12rem;
    line-height: 165px;
    letter-spacing: -0.10em;
    font-weight: 700;
  
    @media screen and (max-width: 767px) {
      font-size: 6rem;
      line-height: 82.5px;
      letter-spacing: -0.05em;
    }
  
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 8rem;
      line-height: 110px;
      letter-spacing: -0.075em;
    }
  
    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      font-size: 10rem;
      line-height: 137.5px;
      letter-spacing: -0.085em;
    }
  
    @media screen and (min-width: 1280px) {
      font-size: 12rem;
      line-height: 165px;
      letter-spacing: -0.10em;
    }
  }
  // h1 span {
  //   font-family: 'Lemonada';
  //   font-weight: 100;
  //   margin-left: -3%;
  //   text-transform: lowercase;

  //   color: ${textColorBringUp}
  // }
}
  h4 span {
    font-family: 'Lemonada';
    font-size: 2rem;
    text-transform: lowercase;
  }
`;

export const SkillsInfo = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around !important;
  top: 5rem;
  color: ${textColorBringUp};

  p {
    padding: 0 7rem;
    font-weight: 400;
  }

  @media (max-width: 668px) {
    top: -20rem;
    padding: 0;
  }

  h4 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.3rem;
  }
  @media (max-width: 668px) {
    p {
      width: 100vw;
      text-align: center;
      padding: 0;
    }
    @media (max-width: 668px) {
      flex-direction: column;
      align-items: center;
      display: flex;
      top: 2rem;
    }
  }
`;

const BorderLine = styled.div`
  width: 100vw;
  display: flex;
  margin-top: -7rem;
  justify-content: center;
  position: relative;

  @media (max-width: 668px) {
    top: 11.5rem;
  }

  .line {
    background: ${textColor};
    height: 1.1px;
    width: 30rem;

    @media (max-width: 668px) {
      top: 15rem;
    }
  }
`;

const BasedOn = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  p {
    font-size: 1.3rem;
  }
`;

function Home() {
  return (
    <>
      <HeaderContent />
      <ArrowIconAnimation />
      {/* <Modal /> */}
      <ProjectList />
      <AboutMeHome />
      <TextAppears />
      {/* <Process /> */}
      <TextSlide />
      <ContactPage />
      <Footer />
    </>
  );
}
export default Home;
