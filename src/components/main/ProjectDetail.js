/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

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
  const navigate = useNavigate();

  const { bodyOverflow, setBodyOverflow, modalcontainerRef, scrollPosition } =
    useProjectLogic();

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
      window.scrollTo(0, scrollPosition);
    };
  }, [modalcontainerRef, bodyOverflow, setBodyOverflow, scrollPosition]);

  const handleCloseProject = () => {
    gsap.to(modalcontainerRef.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power1.in',
      onComplete: () => {
        setTimeout(() => {
          document.body.style.overflow = bodyOverflow;
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollTo(0, scrollPosition);
          navigate(-1);
        }, 900);
      }
    });
  };

  return (
    <>
      <SelectedProjectContainer ref={modalcontainerRef}>
        <ModalBackground>
          <CloseButton onClick={handleCloseProject}>X</CloseButton>
          <img src={projectHandle.img} alt={projectHandle.title} />
          <p>{projectHandle.title}</p>
        </ModalBackground>
      </SelectedProjectContainer>
    </>
  );
}
