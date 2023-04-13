/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSlide from '../content/TextSlide';
import ContactPage from '../pages/ContactPage';
import AboutMeHome from '../content/AboutMeHome';
import Footer from '../footer/Footer';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { TextAppears } from '../content/Presentation';
import ProjectList from '../main/ProjectsList';
import { ArrowdownHeader } from '../icons/Icons';
import TextFill from '../content/Ideate';
import Modal from '../pruebas/Modal';

function ArrowAnimationHeader() {
  const arrowRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      duration: 1,
      repeat: -1,
      y: '+=20',
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <ContainerArrow>
      <div ref={circleRef}>
        <ArrowdownHeader ref={arrowRef} />
      </div>
    </ContainerArrow>
  );
}
function HeaderContent() {
  const refs = {
    devs2: useRef(null),
    buttonDownload: useRef(null),
    arrowIcon: useRef(null)
  };

  useEffect(() => {
    const devs2 = refs.devs2.current.querySelectorAll('span');

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
          trigger: refs.devs2.current,
          start: 'top 80%',
          marks: true
        }
      }
    );

    gsap.fromTo(
      refs.buttonDownload.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: refs.buttonDownload.current,
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo(
      refs.arrowIcon.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: refs.arrowIcon.current,
          start: 'top 85%'
        }
      }
    );
  }, [refs.arrowIcon, refs.buttonDownload, refs.devs2]);

  return (
    <Containerheader>
      <ListStyled>
        <div className="devs2" ref={refs.devs2}>
          <h1>
            <span>HELLO,</span>
            <span> I &nbsp;DESIGN&nbsp; </span>
            <span>AND &nbsp;</span>
            <span>DEVELOP</span>
            <br />
            <span>WEB </span> <span>PAGES</span>
          </h1>
          <span className="based-in">
            <h4>Based in Madrid</h4>
          </span>
        </div>
        <div>
          <ButtonWrapper ref={refs.buttonDownload}>
            <ButtonDownloadContainer href="#" target="_blank">
              <span>DOWNLOAD CV</span>
              <span>DOWNLOAD CV</span>
            </ButtonDownloadContainer>
          </ButtonWrapper>
          <ArrowAnimationHeader />
        </div>
      </ListStyled>
    </Containerheader>
  );
}

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
    width: 80vw;
    justify-content: flex-end;
    margin-top: 2rem;
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
    @media screen and (max-width: 767px) {
      font-size: 6rem;
      line-height: 82.5px;
      letter-spacing: -0.05em;
      top: 0;
    }
  
  
  }
 
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
const ListStyled = styled.div`
  overflow: hidden;

  .devs2 {
    perspective: 5000px;
    position: relative;
    max-width: 100vw;

    padding: 0 4rem;
  }
  @media (max-width: 668px) and (max-width: 992px) {
    height: 50vh;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: -2.5rem;
  width: 100vw;
`;
const ButtonDownloadContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  transition-delay: 0.6s;
  overflow: hidden;
  border-radius: 25px;
  border: solid 2px ${textColor};
  margin: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${textColor};
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
    transition: all 0.6s ease;
    border: solid 2px ${textColor};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${backgroundColor};
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all 0.6s ease;
  }

  div {
    position: relative;
    top: 6px;
    width: 100%;
    height: 26px;
    text-transform: uppercase;
    overflow: hidden;
    border: solid 2px ${backgroundColor};
  }

  span {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease;

    &:first-child {
      color: ${backgroundColor};
      transform: translateY(60px);
    }

    &:last-child {
      transform: translateY(-20px);

      color: ${textColor};
      transform: translateY(0);
    }
  }

  &:hover {
    background: ${backgroundColor};
    transition: background 0.2s linear;
    transition-delay: 0.6s;

    &:after {
      border-radius: 0 0 50% 50%;
      transform: translateY(-100%) scaleY(0.5);
      transition-delay: 0;
    }

    &:before {
      border-radius: 0;
      transform: translateY(0) scaleY(1);
      transition-delay: 0.6;
    }

    span {
      &:first-child {
        transform: translateY(0);
      }

      &:last-child {
        transform: translateY(20px);
        opacity: 0;
      }
    }
  }
`;
const ContainerArrow = styled.div`
  width: 100vw;
  display: flex;
  top: -5rem;
  justify-content: center;
  positin: relative;
  align-items: center;
  align-items: flex-start;
  margin: 0;
`;

function Home() {
  return (
    <>
      <HeaderContent />

      {/* <Modal /> */}
      <ProjectList />
      <TextFill />
      <AboutMeHome />
      {/* <TextAppears /> */}

      {/* <TextSlide /> */}
      <ContactPage />
      <Footer />
    </>
  );
}
export default Home;
