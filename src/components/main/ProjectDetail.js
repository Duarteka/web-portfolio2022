/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../utils/dataInfo';
import {
  CloseButton,
  ModalBackground,
  SelectedProjectContainer
} from './stylesProjectList';

import { useProjectLogic } from './useProjectLogic';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams();
  const { bodyOverflow, setBodyOverflow, modalcontainerRef, handleCloseModal } =
    useProjectLogic();
  const navigate = useNavigate();
  const projectHandle = projects.find((project) => project.id === Number(id));

  useEffect(() => {
    setBodyOverflow(document.body.style.overflow);
    document.body.style.overflow = 'hidden';
    gsap.fromTo(
      modalcontainerRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.5, ease: 'power1.out' }
    );

    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, [modalcontainerRef, bodyOverflow, setBodyOverflow]);

  const handleCloseProject = () => {
    handleCloseModal();
    setTimeout(() => {
      navigate('/'); // Navega de vuelta a la ruta principal
    }, 1000);
  };

  return (
    <SelectedProjectContainer ref={modalcontainerRef}>
      <ModalBackground>
        <CloseButton onClick={handleCloseProject}>X</CloseButton>
        <img src={projectHandle.img} alt={projectHandle.title} />
        <p>{projectHandle.title}</p>
      </ModalBackground>
    </SelectedProjectContainer>
  );
}
