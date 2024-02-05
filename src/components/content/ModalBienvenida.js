/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { gsap } from 'gsap';
import I18n from 'i18n-react';
import { useTranslation } from 'react-i18next';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import '../../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../utils/redux/actions';

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
  background-color: ${textColor};
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

  @media (max-width: 768px) {
    max-width: 90%;
    height: auto;
    h5 {
      margin-top: 2em;
    }
  }
  h5 {
    line-height: 35px;
    margin-top: 7em;
    padding: 0 2rem;
  }
  @media (max-width: 480px) {
    padding: 10px;
    h5 {
      margin-top: 1em;
      padding: 0 1rem;
      line-height: 25px;
    }
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
  // margin-top: 10px;
  padding: 10px 35px;
  border: none;
  background-color: ${textColor};
  color: ${backgroundColor};
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 0.3s;
  //transform: translate(45em, 5em);
  text-transform: uppercase;

  &:hover {
    background-color: ${textColorBringUp};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 10%;
  justify-content: flex-end;
`;

export default function ModalBienvenida({ onClose }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const modalRef = useRef(null);

  const isModalOpen = useSelector((state) => state.preferences.isModalOpen);
  console.log('Estado del modal:', isModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log('Cerrando modal');
    dispatch(toggleModal(false));
  };

  useEffect(() => {
    console.log('Ejecutando useEffect del modal, isModalOpen:', isModalOpen);
    const tl = gsap.timeline();
    tl.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    return () => tl.kill();
  }, []);

  if (!isModalOpen) {
    console.log('No renderizando modal porque isModalOpen es false');
    return null;
  }
  console.log('Renderizando modal');

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
        <ButtonContainer isModalOpen={handleClose}>
          <CloseButton onClick={handleClose}>Let&apos;s go</CloseButton>
        </ButtonContainer>
      </MessageBox>
    </MessageContainer>
  );
}
