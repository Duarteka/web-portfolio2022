/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch, useSelector } from 'react-redux';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import MoonFAce from '../../assets/moon.webp';
import DowloadCV from '../content/DowloadCV';
import { TOGGLE_DARKTHEME } from '../utils/redux/actions';

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('DuarteCVFrontendDev.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'DuarteCVFrontendDev.pdf';
      alink.click();
    });
  });
};

gsap.registerPlugin(ScrollTrigger);

function HeaderContent() {
  const containerRef = useRef(null);
  const moonHeaderRef = useRef(null);
  const overlay = useRef();

  const isModalOpen = useSelector((state) => state.preferences.isModalOpen);

  const dispatch = useDispatch();
  const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });

  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );

  const [isMouseOver, setIsMouseOver] = useState();
  useLayoutEffect(() => {
    gsap.set(overlay.current, { x: '100%' });
  }, []);

  const textColorOnHover = darkThemeEnabled ? '#373737' : '#F9F5E7';
  const textColorInitial = darkThemeEnabled ? '#F9F5E7' : '#373737';

  // animacion dowload CV
  const onMouseEnter = () => {
    gsap.to(overlay.current, {
      x: 0,
      duration: 0.3,
      ease: 'power2.easeIn'
    });

    setIsMouseOver(true);

    // console.log(onMouseEnter, 'entra');
  };

  const onMouseLeave = () => {
    gsap
      .timeline()
      .to(overlay.current, {
        x: '-100%',
        duration: 0.3,
        ease: 'power2.easeOut'
      })
      // .to(overlay.current, {
      //   opacity: 0,
      //   duration: 10
      // })
      .to(overlay.current, {
        x: '100%',
        duration: 0,
        delay: 0.1
      })
      .to(overlay.current, {
        opacity: 1,
        duration: 0,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsMouseOver(false); // Restaurar el estado del mouse después de la animación
          // console.log(onMouseEnter, 'sale');
        }
      });
  };
  // animacion modal pagina inicial
  useEffect(() => {
    if (!isModalOpen) {
      const spansAnimationSlide = containerRef.current.children; // Obtener los hijos del contenedor (los elementos <span>)
      gsap.fromTo(
        spansAnimationSlide,
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
            start: 'top 80%',
            marks: true
          }
        }
      );
    }
  }, [isModalOpen]);
  // animacion luna en moviviento
  useEffect(() => {
    gsap.to(moonHeaderRef.current.querySelector('img'), {
      y: 200,
      scrollTrigger: {
        trigger: moonHeaderRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const clamp = gsap.utils.clamp(-10, 10);
          const skew = clamp(self.getVelocity() / -150);
          gsap.set(moonHeaderRef.current, {
            skewX: skew
          });
        }
      }
    });
  }, []);
  return (
    <Containerheader className="containerHeader" id="header">
      <ListStyled className="sectionHeroSpanAnimation">
        <div
          className="spansAnimationSlide headerSectionsText "
          ref={containerRef}
        >
          <h1>
            <span>HI,&#160;I DESIGN </span>
          </h1>
          <h1>
            <span>AND DEVELoP</span>
          </h1>

          <span className="moonHeader" ref={moonHeaderRef}>
            <img src={MoonFAce} alt="moonface" />
          </span>

          <h1>
            <span>WEB </span> <span>PAGES</span>
          </h1>

          <p className="basedinMadrid">based in madrid</p>
        </div>
      </ListStyled>
      <DowloadCVBasedIn>
        <DowloadCVButton
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="downloadCV">
            <div className="colorFilled" ref={overlay} />
            <button onClick={onButtonClick}>
              <h3
                className={isMouseOver ? 'textColorOnHover' : ''}
                style={{
                  color: isMouseOver ? textColorOnHover : textColorInitial
                }}
              >
                Download CV
              </h3>
            </button>
          </div>
        </DowloadCVButton>
        <div className="borderCenter" />
        <EmailtoHeader>
          <div className="emailHeader">
            <h5>
              <a
                style={{ color: textColor }}
                href="mailto: duarte.karen21@gmail.com"
              >
                hi_frontend@duarteka.eu
              </a>
            </h5>
          </div>
        </EmailtoHeader>
      </DowloadCVBasedIn>
    </Containerheader>
  );
}

const Containerheader = styled.header`
  color: ${textColor};
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  max-height: 100%;
  position: relative;
  min-width: 100%;
  padding-top: 5rem;
  text-transform: uppercase;

  .sectionHeroSpanAnimation {
    margin-top: 10vh;

    h1 {
      font-size: 15em;
    }
  }

  .basedinMadrid {
    color: ${textColorBringUp};
    margin-left: 3rem;
  }
`;

const ListStyled = styled.div`
  max-height: 100%;
  img {
    position: absolute;
    max-width: 18%;
    left: 77%;
    top: -3%;
  }
  @media (max-width: 843px) {
    img {
      left: 64%;
      top: 4%;
      max-width: 25%;
    }
  }
  .moonHeader {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
  }
  .devs2 {
    perspective: 50vw;
    max-width: 100%;
    padding: 0 3vw;
  }
`;
const DowloadCVBasedIn = styled.div`
  display: flex;
  height: 100%;
  max-height: 25vh;
  width: 100vw;
  border-bottom: solid 2px;
  border-top: solid 2px;
  position: relative;
  background-color: ${backgroundColor};

  .borderCenter {
    display: flex;
    width: 2px;
    background-color: ${textColor};
    height: auto;
  }
  .colorFilled {
    display: flex;
    background-color: ${textColor};
    width: 100%;
    height: 100%;
    max-height: auto;
    position: absolute;
    border-radius: 30px;
    top: 0;
    left: 0;
  }
`;

const DowloadCVButton = styled.div`
  width: calc(50vw - 1px); // Para compensar el borde central de 2px
  position: relative;
  transition: color 0.3s ease;

  h3 {
    position: relative;
    text-transform: uppercase;
  }

  @media (max-width: 668px) and (max-width: 992px) {
    h3 {
      //color: ${backgroundColor}!important;
    }
  }

  .downloadCV {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5rem 0;
    height: 100%;
    overflow: hidden;
  }
`;

const EmailtoHeader = styled.div`
  width: calc(50vw - 1px); // De nuevo, compensamos el borde central

  .emailHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    height: 100%;
    width: 100%;
    color: ${textColorBringUp};
  }
`;

export default HeaderContent;
