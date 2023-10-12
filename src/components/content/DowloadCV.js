/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'styled-theming';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';

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

const getTextColorOnHover = theme('theme', {
  light: '#F9F5E7'
});

export default function DowloadCV() {
  const overlay = useRef();

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

  return (
    <>
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

      {/* <DowloadCVBasedInResponsive>
        <DowloadCVButtonResponsive>
          <div className="downloadCVResponsive">
            <button onClick={onButtonClick}>
              <h3>Download CV</h3>
            </button>
          </div>
        </DowloadCVButtonResponsive>

        <EmailtoHeaderResponsive>
          <div className="emailHeaderResponsive">
            <a
              style={{ color: textColor }}
              href="mailto: duarte.karen21@gmail.com"
            >
              duarte.karen21@dev.com
            </a>
          </div>
        </EmailtoHeaderResponsive>
      </DowloadCVBasedInResponsive> */}
    </>
  );
}

const DowloadCVBasedIn = styled.div`
  display: flex;
  height: 100%;
  max-height: 20vh;
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
  text-transform: uppercase;
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

const DowloadCVButtonResponsive = styled.div``;

const DowloadCVBasedInResponsive = styled.div``;

const EmailtoHeaderResponsive = styled.div``;
