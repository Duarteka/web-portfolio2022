/* eslint-disable no-unused-vars */
import { gsap } from 'gsap';

import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ParallaxContainer from '../pruebas/Modal';
import {
  backgroundColor,
  textColor,
  textColorBringUp,
  textColorBringUpReverse
} from '../../styled';

import AnimationApple from '../utils/AnimationApple';

import { HeaderTextForSection } from './Ideate';
import ContactPage from '../pages/ContactPage';
import { socialMidiaContact } from '../utils/dataInfo';
import HandPointingCloud from '../../assets/hand-pointing.webp';

const ContainerContactEmail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  position: relative;
  border-top: solid 2px ${backgroundColor};
  border-bottom: solid 2px ${backgroundColor};
  background-color: ${textColor};
`;
const EmailContact = styled.div`
  display: flex;
  width: 100%;
  .contactTextAndEmail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    width: 100%;
    height: 80vh;
    position: relative;
  }

  h4 {
    color: ${backgroundColor};
    border-bottom: solid 2px ${backgroundColor};
    width: 100%;
    font-family: 'Acier';
    padding: 0 2rem 4rem 10rem;
  }
  .email {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: -4rem;
  }
  .contactMe {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  h3 {
    color: ${backgroundColor};
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: ${backgroundColor};
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .email a:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;

    transform: scaleX(0);
    background-color: ${textColorBringUp};
    transition: transform 0.3s ease-in-out;
  }

  .email a:hover:before {
    transform: scaleX(1);
  }
`;

export const ContainerDescriptionAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200vh;
  border-bottom: solid 2px;
  border-top: solid 2px;
  position: relative;
  width: 100%;
  //margin: 40rem 0 7rem 0;
  background-color: ${backgroundColor};
  justify-content: center;

  p {
    font-size: 2vw;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-weight: 400;
    padding: 0 10vw;

    @media (max-width: 576px) {
      padding: 0;
      font-size: 4vw;
    }
  }

  .fonthightlight {
    font-family: 'Lemonada';
    font-size: 1.5vw;
    text-transform: lowercase;
    color: ${textColorBringUp};
  }
  .borderHightlight {
    border: solid 0.1em;
    font-size: 1.4vw;
    padding: 0 0.5vw;
  }
  .borderBottonhightlight {
    text-decoration: underline;
    font-size: 1.9vw;
  }
  .fonthighlight {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4vw;
  }

  span {
    color: ${textColor};

    img {
      max-width: 10vw;
      max-height: 5vh;
      margin-top: -1vw;
    }
  }
`;

const Containercircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 100%;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  background-color: ${textColor};
`;
const TextInsideCircle = styled.div`
  opacity: 0;
  color: ${backgroundColor};
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200vh;
  border-bottom: solid 2px;
  border-top: solid 2px;
  position: relative;
  width: 100%;
  //margin: 40rem 0 7rem 0;

  justify-content: center;

  p {
    font-size: 2vw;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-weight: 400;
    padding: 0 10vw;

    @media (max-width: 576px) {
      padding: 0;
      font-size: 4vw;
    }
  }
`;
gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector('.circleAnimation'),
        start: 'top 80%',
        end: '+=100%',
        scrub: true
      }
    });

    tl.fromTo(
      element.querySelector('#circle'),
      {
        scale: 1,
        y: 20
      },
      {
        y: 0,

        scale: 50,
        duration: 1,
        ease: 'none'
      }
    ).to(
      element.querySelector('#text'),
      {
        opacity: 1,
        y: -40,
        ease: 'power1.inOut'
      },
      '-=0.1' // Esto ajustará el offset para que la animación de texto comience 0.5s antes de que termine la animación del círculo
    );
  }, []);

  return (
    <>
      <HeaderTextForSection
        text1="A FELL WORDS ABOUT"
        text2="&"
        text3="LET’S TALK"
      />
      <div ref={ref}>
        <Containercircle className="circleAnimation">
          <ContentWrapper>
            <Circle id="circle" />
            <TextInsideCircle id="text">
              <p>
                I&apos;M KAREN, A WEB DESIGNER CURRENTLY SETTLED IN MADRID. I
                HAVE A PASSION FOR CREATING USER-FRIENDLY WEBSITES♥, WITH A
                FOCUS ON FRONTEND & UX/UI DESIGN. SO, HOW I CAN HELP YOUR TEAM?
                why me? WELL, LET&apos;S JUST SAY I&apos;M LIKE A CHAMELEON - I
                CAN ADAPT TO ANY STYLE THAT SUITS YOUR PROJECTS. MY GOAL IS TO
                CREATE DESIGNS THAT WILL MAKE YOU SAY : &quot;wow, that&apos;s
                exactly what i was thinking!&quot; (AND LET&apos;S BE HONEST,
                I&apos;LL PROBABLY DO A LITTLE HAPPY DANCE WHEN THAT HAPPENS ).
              </p>
            </TextInsideCircle>
          </ContentWrapper>
        </Containercircle>
      </div>

      <ContainerContactEmail>
        <AnimationApple />
        <EmailContact id="contact">
          <div className="contactTextAndEmail">
            <div className="contactMe">
              <h4>
                Contact me and let&rsquo;s <br />
                do something great!
              </h4>
            </div>
            <div className="email">
              <h3>
                <a
                  style={{ color: textColor }}
                  href="mailto: duarte.karen21@gmail.com"
                >
                  duarte.karen21@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </EmailContact>
      </ContainerContactEmail>
      <SocialMidiaContact>
        <div className="containerSocial">
          <div className="socialList">
            {socialMidiaContact.map((item) => (
              <list className="subTitle" key={item.id}>
                <Link to={item.route} target="_blank" rel="noreferrer">
                  {item.contact}
                </Link>{' '}
              </list>
            ))}
          </div>
          <div className="ciao">
            <h4>CIAO</h4>
          </div>
          <img src={HandPointingCloud} alt="go to top" className="goToTop" />
        </div>
      </SocialMidiaContact>
    </>
  );
}
const SocialMidiaContact = styled.div`
  background-color: ${textColor};
  height: 100%;
  position: relative;
  width: 100vw;
  border-bottom: 2px solid ${backgroundColor};

  .socialList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 50vw;
    gap: 2rem;
    align-self: center;
  }

  .containerSocial {
    display: flex;
    width: 100%;
  }
  .socialList,
  .ciao {
    flex: 1; // Esto hace que cada contenedor ocupe el 50% del espacio
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ciao {
    color: ${backgroundColor};
    border-left: 2px solid ${backgroundColor};
    position: relative;
    width: 50vw;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 15rem;
      font-family: 'Acier';
    }
  }

  a {
    color: ${backgroundColor};
    display: inline-block;
    align-self: center;
    font-size: 2.5rem;
  }
  img {
    position: absolute;
    top: 0;
    width: 15%;
    right: 0;
    object-fit: cover;
    transform: translate(1rem, -3rem);
  }
`;
export default SmoothScroll;
