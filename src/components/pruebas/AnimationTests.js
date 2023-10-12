import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);
const Container = styled.div`
  position: relative;
  height: 300vh; /* Ajusta según tus necesidades */
  max-height: 100%;
  background-color: #f0f0f0;

  .content {
    height: 100%;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #3498db;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
`;

const Text = styled.h2`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: -50%;
  top: 0;
  background-size: cover;
  background-position: center;

  img {
    width: 150%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function AnimationTests() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: true
      }
    });

    tl.to(circleRef.current, { scale: 3, borderRadius: '0%', duration: 3 })
      .to(textRef.current, { opacity: 1, duration: 6 }, '-=1.5')
      .to(containerRef.current, { x: '-50%', duration: 3 }, '-=4.5')
      .from(imageContainerRef.current, { x: '150%', duration: 3 }, '-=3');

    return () => tl.revert();
  }, []);
  return (
    <Container ref={containerRef}>
      <div className="content">
        <Circle ref={circleRef} />
        <Text ref={textRef}>Hello Animation!</Text>
        <ImageContainer ref={imageContainerRef}>
          <img
            src="https://fastly.picsum.photos/id/426/1200/1000.jpg?hmac=jQoiaoV6QMo6Ld17HZF8_ya6j90ehEvR8QhADV5TVC0"
            alt="mountain"
          />
        </ImageContainer>
      </div>
    </Container>
  );
}
