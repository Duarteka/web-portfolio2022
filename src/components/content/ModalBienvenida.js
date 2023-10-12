/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { gsap } from 'gsap';
import I18n from 'i18n-react';
import { useTranslation } from 'react-i18next';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import '../../i18n';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  
  100% {
    opacity: 1;
  }
`;

const MessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 0.3s forwards;
`;

const MessageBox = styled.div`
  padding: 20px;
  background-color: ${backgroundColor};
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  height: 700px;
  text-align: left;
  align-self: center;
  justify-self: center;

  h5 {
    line-height: 35px;
    margin-top: 7em;
    padding: 0 2rem;
  }
`;
const LanguageButton = styled.button`
  padding: 10px 35px;
  margin: 5px;
  border: none;
  background-color: ${textColor};
  color: ${backgroundColor};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 35px;
  border: none;
  background-color: ${textColor};
  color: ${backgroundColor};
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 0.3s;
  transform: translate(45em, 5em);
  text-transform: uppercase;

  &:hover {
    background-color: ${textColorBringUp};
  }
`;

export default function ModalBienvenida({ onClose }) {
  const modalRef = useRef(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    return () => tl.kill();
  }, []);
  return (
    <MessageContainer ref={modalRef}>
      <MessageBox>
        <LanguageButton onClick={() => changeLanguage('es')}>
          ESP
        </LanguageButton>
        <LanguageButton onClick={() => changeLanguage('en')}>
          ENG
        </LanguageButton>

        <h5>{t('message')}</h5>

        {/* <h5>
          Hello web explorer! 🚀 It seems you&apos;ve landed on my portfolio
          while I&apos;m still sprinkling some magic touches 🎩✨. If you spot
          any trick not performing perfectly, or an animation that seems to have
          a mind of its own, don&apos;t be alarmed! <br />
          I&apos;m in the midst of taming those cheeky bugs. 🐞 I invite you to
          return soon to enjoy the full show.
          <br /> In the meantime, feel free to roam around, but watch out for
          the rough edges!
          <br /> Thanks for your patience and for being part of this journey 🌈.{' '}
          <br /> See you soon! 😊
        </h5> */}
        <CloseButton onClick={onClose}>Let&apos;s go</CloseButton>
      </MessageBox>
    </MessageContainer>
  );
}
