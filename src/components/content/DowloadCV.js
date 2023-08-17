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

const ButtonWrapper = styled.div`
  width: 100%;
  margin-left: 17rem;
`;
const ButtonDownloadContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;

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

  span {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 52px;
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
      ease: 'power2.inOut',
      color: 'yellow'
    });

    setIsMouseOver(true);

    console.log(onMouseEnter, 'sale');
  };

  const onMouseLeave = () => {
    gsap
      .timeline()
      .to(overlay.current, {
        x: '-100%',
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(overlay.current, {
        opacity: 0,
        duration: 0.1
      })
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
        }
      });

    console.log(onMouseLeave, 'sale');
  };

  return (
    <DowloadCVBasedIn>
      <DowloadCVButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="downloadCV">
          <div className="colorFilled" ref={overlay} />
          <h3
            className={isMouseOver ? 'textColorOnHover' : ''}
            style={{ color: isMouseOver ? textColorOnHover : textColorInitial }}
          >
            <span>Download CV</span>
          </h3>
        </div>
      </DowloadCVButton>
      <div className="borderCenter" />
      <EmailtoHeader>
        <div className="emailHeader">
          <h3>duarte.karen@dev.com</h3>
        </div>
      </EmailtoHeader>
    </DowloadCVBasedIn>
  );
}

const DowloadCVBasedIn = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  border-bottom: solid 2px;
  position: relative;
  background-color: ${backgroundColor};

  @media (max-width: 668px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 668px) {
    flex-direction: column;
  }

  .borderCenter {
    display: flex;
    width: 2px;
    background-color: ${textColor};
    height: auto;
  }
  .colorFilled {
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

  h3 {
    position: absolute;
  }
  transition: color 0.3s ease;

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
