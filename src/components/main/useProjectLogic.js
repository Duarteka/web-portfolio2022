/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const useProjectLogic = () => {
  const modalcontainerRef = useRef(null);
  const [bodyOverflow, setBodyOverflow] = useState(null);

  const handleCloseModal = () => {
    gsap.to(modalcontainerRef.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power1.in'
    });
  };

  const openModal = () => {
    setBodyOverflow(document.body.style.overflow);
    document.body.style.overflow = 'hidden';
    gsap.fromTo(
      modalcontainerRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.5, ease: 'power1.out' }
    );
  };

  return {
    modalcontainerRef,
    handleCloseModal,
    openModal,
    bodyOverflow,
    setBodyOverflow
  };
};
