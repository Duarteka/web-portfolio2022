import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const CursorStyled = styled.div`
  position: fixed;
  background-color: #e6a1af;
  opacity: 90%;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: multiply;

  .hiddenSection {
    height: 100vh;
    border-top: solid 1px black;
    overflow: hidden;
    cursor: none;
  }
`;

export default function CursorInAnimation() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const mouseListener = (e) => {
    setCursorPos({
      x: e.clientX - 10,
      y: e.clientY - 10
    });
  };

  const scaleCursorIn = () => {
    gsap.to('.cursor', {
      scale: 18,
      duration: 0.7
    });
    gsap.to('.hiddenSection', {
      duration: 0.7
    });
  };

  const scaleCursorOut = () => {
    gsap.to('.cursor', {
      scale: 1,
      duration: 0.7
    });
    gsap.to('.hiddenSection', {
      duration: 0.7
    });
  };

  useEffect(() => {
    const button = document.querySelector('.hiddenSection');

    window.addEventListener('mousemove', mouseListener);
    button.addEventListener('mouseenter', scaleCursorIn);
    button.addEventListener('mouseleave', scaleCursorOut);

    return () => {
      window.removeEventListener('mousemove', mouseListener);
      button.removeEventListener('mouseenter', scaleCursorIn);
      button.removeEventListener('mouseleave', scaleCursorOut);
    };
  }, []);

  return (
    <CursorStyled
      className="cursor hiddenSection "
      style={{
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`
      }}
    />
  );
}
