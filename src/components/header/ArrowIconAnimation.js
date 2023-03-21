/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowdownHeader } from '../icons/Icons';
import { textColor } from '../../styled';

const ContainerArrow = styled.div`
  width: 100vw;
  display: flex;
  height: 30vh;
  justify-content: center;

  align-items: center;
  align-items: flex-start;
`;
const CircleWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Circle = styled.svg`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  stroke: ${textColor};
  stroke-width: 3;
  stroke-dasharray: 0 600;
  stroke-linecap: round;
  fill: none;
  transition: stroke-dasharray 1s ease-in-out;
  opacity: 0;
  &:hover {
    stroke-dasharray: 600 0;
    opacity: 1;
  }
`;
function CircleIcon() {
  const arrowRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      duration: 1,
      repeat: -1,
      y: '+=20',
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <ContainerArrow>
      <div ref={circleRef} style={{}}>
        <CircleWrapper>
          <Circle viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </Circle>
          <ArrowdownHeader ref={arrowRef} />
        </CircleWrapper>
      </div>
    </ContainerArrow>
  );
}

export default CircleIcon;
