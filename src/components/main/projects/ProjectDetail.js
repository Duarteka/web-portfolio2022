/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../utils/dataInfo';
import {
  CloseButton,
  ModalBackground,
  SelectedProjectContainer
} from './stylesProjectList';

import BeeClose from '../../../assets/bee.webp';

import { useProjectLogic } from '../useProjectLogic';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const { bodyOverflow, setBodyOverflow, modalcontainerRef, scrollPosition } =
    useProjectLogic();

  const projectHandle = projects.find(
    (project) => project.name === String(name)
  );
  const handleMouseMove = (event) => {
    setButtonPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    // Limpiar en el desmontaje del componente
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setBodyOverflow(document.body.style.overflow);
    // document.body.style.overflow = 'hidden';

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
        {' '}
        <CloseButton
          onClick={handleCloseProject}
          style={{
            position: 'fixed',
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`
          }}
        >
          <div className="closeBoton">
            <img src={BeeClose} alt="Close" />
            <p>Close</p>
          </div>
        </CloseButton>
        <ModalBackground>
          <div className="imageModalOpenHeader">
            <img src={projectHandle.image} alt={projectHandle.title} />
          </div>
          <h1>{projectHandle.title}</h1>
          <p>{projectHandle.description}</p>
          <h4>{projectHandle.rol}</h4>
          {projectHandle.images.map((image, index) => (
            <img
              key={projectHandle.id}
              src={image}
              alt={`${projectHandle.title} ${index}`}
            />
          ))}
        </ModalBackground>
      </SelectedProjectContainer>
    </>
  );
}
