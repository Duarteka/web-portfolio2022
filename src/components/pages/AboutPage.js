/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HandUp from '../../assets/hand-pointing.webp';
import { Slide, Trail } from '../slideAnimation/Slide';
import { backgroundColor, textColor } from '../../styled';
import BlodeMe from '../../assets/blondeshort.webp';

function Headline() {
  return (
    <ContentContainer className="headline-container">
      <p>
        &quot;A design isn’t finished until somebody is using it... Design must
        be used, touched, heard, felt. Only then can you understand whether it’s
        good or bad. Only then can you appreciate and understand its true
        purpose.&quot; -
      </p>
    </ContentContainer>
  );
}

export default function About() {
  return (
    <>
      <AboutMeHeader className="aboutHeader">
        <Trail>
          <h1>who i&apos;am</h1>
        </Trail>
      </AboutMeHeader>

      <ContentContainer>
        <Quote>
          <p>
            &quot;A design isn’t finished until somebody is using it... Design
            must be used, touched, heard, felt. Only then can you understand
            whether it’s good or bad. Only then can you appreciate and
            understand its true purpose&quot;.-{' '}
            <p className="bottomQuote">
              about design process said by Brenda Laurel
            </p>
          </p>

          <img src={BlodeMe} alt="self of me" />
        </Quote>
        <PhotoContainer className="photome">
          <TextsAboutMe>
            <div>
              <h3>A STORY</h3>
              <p>
                FRONT-END DEVELOPER WITH A MULTICULTURAL BACKGROUND; BORN IN
                BRAZIL, RAISED IN CHILE, AND CURRENTLY LIVE IN MADRID. I HAVE A
                KEEN ATTENTION TO DETAIL AND A STRONG FOCUS ON UNDERSTANDING
                USER NEEDS TO SOLVE PROBLEMS EFFECTIVELY. MY SKILLS EXTEND TO
                ILLUSTRATION, AND WEBSITE DESIGN AND PROGRAMMING WEBSITE, WHERE
                I SPECIALIZE IN CREATING ENGAGING USER EXPERIENCES THROUGH THE
                USE OF MICRO-ANIMATIONS.
              </p>
            </div>
            <div>
              <h3>WHY AND HOW </h3>
              <p>
                THE REASON I STARTED CREATIVE CODING WAS BECAUSE I SAW SOME
                AMAZING WEBSITES AND FELT LIKE I WANTED TO DO THAT TOO, SO IN
                2022 I GRADUATED FROM MASTERS DEGREE IN WEB DESIGN AND
                DEVELOPMENT WITH HIGH MARKS IN CEI DESIGN SCHOOL. I AM NOW HARD
                AT WORK ON WEBGL AND SIMILAR LIBRARIES.
              </p>
            </div>
            <div>
              <h3>CREATIVE PROCESS</h3>
              <p>
                DISCOVER: LEARN AND UNDERSTAND ABOUT THE PROBLEM. ANALIZE:
                CREATE AND THINK ABOUT DIFFERENT IDEAS. CREATE: BUILD AND
                IMPROVE THE FINAL IDEA.
              </p>
            </div>
            <div>
              <h3>CONTACT</h3>
              <p>DUARTE.KAREN21@GMAIL.COM</p>
              <p>LINKEDIN</p>
            </div>
            <div className="intouch">
              <h3>LET’S DO SOMENTHING GREAT TOGETHER!</h3>
              <img src={HandUp} alt="go to top" className="handGoToTop" />
            </div>
          </TextsAboutMe>{' '}
        </PhotoContainer>
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  position: relative;

  height: 100%;
  width: 100vw;
  background-color: ${backgroundColor};

  .bottomQuote {
    font-size: 0.7rem !important;
    text-align: left;
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
  border: solid 2px;

  p {
    font-size: 2vw;
    line-height: 2;
    max-width: 70%;
    letter-spacing: 0.1em;
    font-weight: 400;
    text-align: left;
    text-transform: uppercase;
    align-self: center;
    padding: 0 3rem;
  }
  img {
    max-width: 50%;
    max-height: 10%;
    object-fit: cover;
  }
`;
const TextsAboutMe = styled.div`
  border-left: solid 2px;
  max-width: 50vw;

  div {
    border-bottom: solid 2px;
    padding: 5rem;
  }

  p {
    width: 100vw;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
