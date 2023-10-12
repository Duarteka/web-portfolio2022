/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Triller } from 'styled-icons/simple-icons';
import { useInView } from 'react-intersection-observer';
import HandUp from '../../assets/hand-pointing.webp';
import { Slide, Trail } from '../slideAnimation/Slide';
import { backgroundColor, textColor } from '../../styled';
import BlodeMe from '../../assets/blondeshort.jpg';
import KarenFinal from '../../assets/KarenFINAL-8.jpg';

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
      <AboutMeHeader className="aboutHeader">
        <Trail>
          <h1>who i&apos;am</h1>
        </Trail>
      </AboutMeHeader>

      <AboutContainer className="aboutContainer">
        <Quote className="quoteAndPhoto">
          <div className="quoteText">
            <Trail>
              <p>
                &quot;A design isn’t finished until somebody is using it...
                Design must be used, touched, heard, felt. Only then can you
                understand whether it’s good or bad. Only then can you
                appreciate and understand its true purpose&quot;.-
              </p>
            </Trail>
            <Trail>
              <p className="bottomQuote">
                about design process said by <strong>Brenda Laurel</strong>
              </p>
            </Trail>
          </div>

          <FadeIn className="photome" ref={ref} inView={inView}>
            <img src={KarenFinal} alt="me" />
          </FadeIn>
        </Quote>
        <PhotoContainer>
          <TextsAboutMe>
            <div className="borderDiv">
              <Trail>
                <h3>A STORY</h3>
              </Trail>
              <Trail>
                <p>
                  FRONT-END DEVELOPER WITH A MULTICULTURAL BACKGROUND; BORN IN
                  BRAZIL, RAISED IN CHILE, AND CURRENTLY LIVE IN MADRID. I HAVE
                  A KEEN ATTENTION TO DETAIL AND A STRONG FOCUS ON UNDERSTANDING
                  USER NEEDS TO SOLVE PROBLEMS EFFECTIVELY. MY SKILLS EXTEND TO
                  ILLUSTRATION, AND WEBSITE DESIGN AND PROGRAMMING WEBSITE,
                  WHERE I SPECIALIZE IN CREATING ENGAGING USER EXPERIENCES
                  THROUGH THE USE OF MICRO-ANIMATIONS.
                </p>
              </Trail>
            </div>
            <div className="borderDiv">
              <Trail>
                <h3>WHY AND HOW </h3>
              </Trail>
              <Trail>
                <p>
                  THE REASON I STARTED CREATIVE CODING WAS BECAUSE I SAW SOME
                  AMAZING WEBSITES AND FELT LIKE I WANTED TO DO THAT TOO, SO IN
                  2022 I GRADUATED FROM MASTERS DEGREE IN WEB DESIGN AND
                  DEVELOPMENT WITH HIGH MARKS IN CEI DESIGN SCHOOL. I AM NOW
                  HARD AT WORK ON WEBGL AND SIMILAR LIBRARIES.
                </p>
              </Trail>
            </div>
            <div className="borderDiv">
              <Trail>
                <h3>CREATIVE PROCESS</h3>
              </Trail>
              <Trail>
                <p>
                  <strong>DISCOVER:</strong> LEARN AND UNDERSTAND ABOUT THE
                  PROBLEM.
                  <br />
                  <strong>ANALIZE:</strong> CREATE AND THINK ABOUT DIFFERENT
                  IDEAS. <br />
                  <strong>CREATE:</strong> BUILD AND IMPROVE THE FINAL IDEA.
                  <br />
                </p>
              </Trail>
            </div>
            <div className="borderDiv">
              <Trail>
                <h3>CONTACT</h3>
              </Trail>
              <Trail>
                <p>DUARTE.KAREN21@GMAIL.COM</p>
              </Trail>
              <Trail>
                <p>LINKEDIN</p>
              </Trail>
            </div>
            <div className="intouch">
              <Trail>
                <h3>HIRE ME :)</h3>
              </Trail>
              <img src={HandUp} alt="go to top" className="handGoToTop" />
            </div>
          </TextsAboutMe>
        </PhotoContainer>
      </AboutContainer>
    </>
  );
}
const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media screen and (max-width: 668px) {
    align-items: center;
  }
`;
const AboutContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  background-color: ${backgroundColor};

  .bottomQuote {
    font-size: 0.7rem !important;
    text-align: left;
    margin-top: 2em;
  }
  .intouch {
    display: flex;
  }

  .handGoToTop {
    max-width: 30%;
    align-self: center;
  }
`;
const AboutMeHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;
  padding-top: 10vh;
  padding-right: 5rem;
  height: 40vh;

  h1 {
    font-size: 10em;
    font-size: 7.5rem;
    height: 110vh;
  }
`;
const Quote = styled.div`
  display: flex;
  width: 100vw;
  border: solid 2px;

  .quoteText,
  .photome {
    flex: 1;
  }
  .containerQuoteAndPhoto {
    display: flex;
    justify-content: center;
  }

  .quoteText {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;

    p {
      margin-left: 2rem;
      max-width: 90%;
    }
  }
  .quoteText p {
    //font-size: 2vw;
    line-height: 1.6;
    // max-width: 70%;
    align-self: flex-start;
    justify-self: center;
    //padding: 0 5rem;
    width: 100%;
  }
  .photome {
    max-widht: 50vw;
    filter: grayscale(80%);
  }
  img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
  }
  .bottomQuote {
    padding: 0;
  }
  @media screen and (max-width: 668px) {
    flex-direction: column-reverse;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .quoteText {
      width: 100vw;
      align-self: center;
      margin: 4rem 5rem 5rem 8rem;

      p {
        line-height: 1.3;
        margin: 0;
      }
    }
  }
`;
const TextsAboutMe = styled.div`
  @media screen and (max-width: 668px) {
    max-width: 100vw;
  }
  border-left: solid 2px;
  max-width: 50vw;

  .borderDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: solid 2px;
    height: 400px;

    p {
      padding: 0 3rem;
      font-size: 1em;
    }
    h3 {
      padding: 0 3rem;
    }

    @media screen and (max-width: 668px) {
      padding: 0;
    }
    p {
      padding: 0 2rem;
    }
    h3 {
      padding: 0 2rem;
    }
  }
`;
