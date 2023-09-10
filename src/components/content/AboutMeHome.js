/* eslint-disable no-unused-vars */
import { gsap } from 'gsap';

import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { backgroundColor, textColor, textColorBringUp } from '../../styled';

import AnimationApple from '../utils/AnimationApple';
import { HeaderTextForSection } from './Ideate';
import { socialMidiaContact } from '../utils/dataInfo';
import { Trail } from '../slideAnimation/Slide';

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
  height: 250vh;

  position: relative;
  width: 100%;

  //margin: 40rem 0 7rem 0;

  justify-content: center;

  p {
    font-size: 1.5vw;
    line-height: 2;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 0 10vw;
    text-align: left;
    transition: ease-in 2s;

    @media (max-width: 576px) {
      font-size: 4vw;
    }
  }
`;

const ContainerContactEmail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  position: relative;
  margin-top: 10rem;
  border-top: solid 2px ${backgroundColor};
  border-bottom: solid 2px ${backgroundColor};
  background-color: ${textColor};

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
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
    border-top: solid 2px ${backgroundColor};
    //margin-top: -4rem;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .contactMe {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      flex-direction: column;
    }

    margin-right: 5rem;
    h4 {
      font-size: 3rem;
      line-height: 100px;
    }
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

function SmoothScroll() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const refChangeColorNav = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Almacenamos el valor actual de la referencia en una variable local
    const currentRef = refChangeColorNav.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aquí se detecta si el componente está visible en la pantalla
        if (entry.isIntersecting) {
          // Si el componente es visible, cambia el estado a true
          dispatch({ type: 'TOGGLE_SPECIAL_COMPONENT', payload: true });
        } else {
          // Si el componente no es visible, cambia el estado a false
          dispatch({ type: 'TOGGLE_SPECIAL_COMPONENT', payload: false });
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [dispatch]);

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
        y: '20%'
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
        y: -100,
        ease: 'power1.inOut'
      },
      '-=0.5' // Esto ajustará el offset para que la animación de texto comience 0.5s antes de que termine la animación del círculo
    );
    return () => tl.revert();
  }, []);

  return (
    <div>
      <HeaderTextForSection text1="A QUICK INTRODUCTION ABOUT MYSELF" />

      <div ref={ref}>
        <Containercircle className="circleAnimation">
          <ContentWrapper>
            <Circle id="circle" />
            <TextInsideCircle id="text">
              <p>
                I&apos;M KAREN, A WEB DESIGNER WITH HAVE A PASSION FOR CREATING
                USER-FRIENDLY WEBSITES♥, I AM SPECIALIZED IN ON FRONTEND & UX/UI
                DESIGN. <br />
                SO, HOW I CAN HELP YOUR TEAM? why me? WELL,
                <br /> LET&apos;S JUST SAY I&apos;M LIKE A CHAMELEON, I CAN
                ADAPT TO ANY STYLE THAT SUITS YOUR PROJECTS. MY GOAL IS TO
                CREATE DESIGNS THAT WILL MAKE YOU SAY:
                <br /> &quot;wow, that&apos;s exactly what i was thinking!&quot;
                <br />
                (AND LET&apos;S BE HONEST, I&apos;LL PROBABLY DO A LITTLE HAPPY
                DANCE WHEN THAT HAPPENS).
              </p>
            </TextInsideCircle>
          </ContentWrapper>
        </Containercircle>
      </div>
      {!isMobile ? (
        <>
          <ContainerContactEmail ref={refChangeColorNav}>
            <AnimationApple />
            <EmailContact id="contact">
              <div className="contactTextAndEmail">
                <div className="contactMe">
                  <Trail>
                    <h4>Contact me and let&rsquo;s </h4>
                    <Trail>
                      <h4>do something great!</h4>
                    </Trail>
                  </Trail>
                </div>
                <div className="email">
                  <h5>
                    <a
                      style={{ color: textColor }}
                      href="mailto: duarte.karen21@gmail.com"
                    >
                      duarte.karen21@gmail.com
                    </a>
                  </h5>
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
              {/* THAUK */}
              <div className="ciao">
                <h4>Tchau</h4>
              </div>
            </div>
          </SocialMidiaContact>
        </>
      ) : (
        <ContainerContactEmailRESPONSIVE ref={refChangeColorNav}>
          <div className="contactAndEmailRESPONSIVE">
            <Trail>
              <h4>
                Contact me and <br />
                let&rsquo;s{' '}
              </h4>
              <Trail>
                <h4>do something great!</h4>
              </Trail>
            </Trail>
            <div className="email">
              <a href="mailto: duarte.karen21@gmail.com">
                <h5> duarte.karen21@gmail.com </h5>
              </a>
            </div>
            <AnimationApple />
          </div>

          <SocialMidiaContactRESPONSIVE>
            <div className="socialListRESPONSIVE">
              {socialMidiaContact.map((item) => (
                <list className="subTitle" key={item.id}>
                  <Link to={item.route} target="_blank" rel="noreferrer">
                    {item.contact}
                  </Link>
                </list>
              ))}
            </div>
            <div className="ciaoRESPONSIVE">
              <h4>Tchau</h4>
            </div>
          </SocialMidiaContactRESPONSIVE>
        </ContainerContactEmailRESPONSIVE>
      )}
    </div>
  );
}

export default SmoothScroll;

const ContainerContactEmailRESPONSIVE = styled.div`
  display: flex;
  flex-direction: column;
  color: ${backgroundColor};
  position: relative;

  .contactAndEmailRESPONSIVE {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border-top: solid 2px;
  }

  h4 {
    font-family: 'Acier';
    font-size: 2.2rem;
    text-align: left;
    align-self: center;
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

const SocialMidiaContactRESPONSIVE = styled.div`
  height: 100%;
  .socialListRESPONSIVE,
  .ciaoRESPONSIVE {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    align-self: center;
    height: 100%;
    margin-top: -5rem;
    background-color: ${textColor};
  }

  .socialListRESPONSIVE {
    margin-top: -8rem;
  }

  a {
    color: ${backgroundColor};
    display: inline-block;
    align-self: center;
  }
  .ciaoRESPONSIVE {
    height: 50vh;
    h4 {
      font-size: 7rem;
    }
  }
`;
