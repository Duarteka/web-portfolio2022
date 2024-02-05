/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';

import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { Trail } from '../slideAnimation/Slide';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import KarenFinal from '../../assets/KarenFINAL2-9.jpg';
import Footer from '../footer/Footer';

const enterImage = keyframes`
0% {
  animation-timing-function: ease-in;
  opacity: 1;
  transform: translateY(-45px);
}

24% {
  opacity: 1;
}

`;

const FadeIn = styled.div`
  opacity: 1; // Por defecto, el elemento estará oculto

  // Si el elemento está en vista, aplicar la animación
  ${(props) =>
    props.inView &&
    css`
      animation: ${enterImage} 2s forwards;
    `}
`;

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <AboutContainer className="aboutContainer" isMainPage={false}>
        <p className="available">available to work</p>
        <h4>Karen Duarte.</h4>
        <TextIntro>
          <div className="text1">
            <h4>
              I AM A FRONT-END DEVELOPER WITH A MULTICULTURAL
              <br /> BACKGROUND; BORN IN BRAZIL, RAISED IN CHILE, AND <br />{' '}
              CURRENTLY LIVE IN MADRID. I HAVE A KEEN <br />
              ATTENTION TO DETAIL AND A STRONG FOCUS <br /> ON UNDERSTANDING
              USER NEEDS
              <br /> TO SOLVE PROBLEMS EFFECTIVELY.
            </h4>
          </div>
          <div className="text2">
            <p>
              MY SKILLS EXTEND TO ILLUSTRATION, AND WEBSITE DESIGN AND
              PROGRAMMING WEBSITE, WHERE I SPECIALIZE IN CREATING ENGAGING USER
              EXPERIENCES THROUGH THE USE OF MICRO-ANIMATIONS.
            </p>
          </div>
        </TextIntro>

        <ImageMeContainer>
          <img src={KarenFinal} alt="me" />
        </ImageMeContainer>

        <p>
          THE REASON I STARTED CREATIVE CODING WAS BECAUSE I SAW SOME AMAZING
          WEBSITES AND FELT LIKE I WANTED TO DO THAT TOO, SO IN 2022 I GRADUATED
          FROM MASTERS DEGREE IN WEB DESIGN AND DEVELOPMENT WITH HIGH MARKS IN
          CEI DESIGN SCHOOL. I AM NOW HARD AT WORK ON WEBGL AND SIMILAR
          LIBRARIES.
        </p>
        <div>
          <Trail>
            <h3 className="title">CONTACT</h3>
          </Trail>
          <Trail>
            <p>DUARTE.KAREN21@GMAIL.COM</p>
          </Trail>
          <Trail>
            <p>LINKEDIN</p>
          </Trail>
          <Trail>
            <p>BEHANCE</p>
          </Trail>
        </div>
        {/* <div className="intouch">
              <Trail>
                <h3>HIRE ME :)</h3>
              </Trail>
              <img src={HandUp} alt="go to top" className="handGoToTop" />
            </div> */}
      </AboutContainer>
      <Footer footerBackgroundColor={backgroundColor} />
    </>
  );
}
const AboutContainer = styled.div`
  padding-right: 20rem;
  padding-left: 20rem;
  padding-top: 30vh;
  position: relative;
  height: 100%;
  width: 100vw;
  background-color: ${backgroundColor};

  .handGoToTop {
    max-width: 30%;
    align-self: center;
  }

  .available {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: 'Acier';
    font-size: 0.8rem;
    margin-bottom: 5rem;
    color: ${textColorBringUp};
  }
`;
const TextIntro = styled.div`
  display: flex;
  padding 2rem 0;
  font-weight: 200; 

  .text1 {
    max-width: 100%;

    h4{
      line-height: 33px;
    }

  }
  .text2 {
    font-size:0.6rem;
    max-width: 40%;
    margin-top: 15%;
    margin-left: 4%;
   
  }
`;

const ImageMeContainer = styled.div`
  widht: 100%;
  filter: grayscale(80%);

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-height: 90%;
    object-fit: cover;
    border-radius: 40px;
  }
`;
