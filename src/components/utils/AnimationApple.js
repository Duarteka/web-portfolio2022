/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Ap01 from '../../assets/applePNG/ap01.png';
import Ap02 from '../../assets/applePNG/ap02.png';
import Ap03 from '../../assets/applePNG/ap03.png';
import Ap04 from '../../assets/applePNG/ap04.png';
import Ap05 from '../../assets/applePNG/ap05.png';
import Ap06 from '../../assets/applePNG/ap06.png';
import Ap07 from '../../assets/applePNG/ap07.png';
import Ap08 from '../../assets/applePNG/ap08.png';
import Ap09 from '../../assets/applePNG/ap09.png';
import { backgroundColor, textColor } from '../../styled';

gsap.registerPlugin(ScrollTrigger);

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: sticky;
  width: 100%;
  max-width: 50%;
  height: 80vh;
  max-height: 100vh;
  overflow: hidden;
  border-right: solid 2px ${backgroundColor};

  @media (max-width: 768px) {
    min-width: 100%;
    height: 60vh;

    background-color: ${textColor};
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  margin-top: 10rem;
  margin-left: -5rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-left: -8rem;
    background-color: ${textColor};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  opacity: 1;
  //transition: 0.1s ease-in;
  margin: 0 -5rem;

  img {
    background-size: cover;
    position: relative;
    max-width: 180%;
    max-height: 100%;
    height: auto;
  }
`;

export default function AnimationApple() {
  const imageRefs = useRef([]);
  const imageContainerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const images = imageRefs.current;
    const imageContainer = imageContainerRef.current;

    const timeline = gsap.timeline({ paused: true });

    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    images.forEach((image, index) => {
      const duration = 0.1;

      timeline
        .addLabel(`image-${index}`, `+=${(index + 0.5) / images.length}`)
        .to(image, {
          opacity: 1,
          duration,
          ease: 'power2.inOut'
        })
        .addLabel(`end-${index}`, `+=${duration}`)
        .to(
          image,
          {
            opacity: 0,
            duration,
            ease: 'power2.inOut',
            delay: 0.5
          },
          `+=${duration - 0.1}`
        );
    });

    timeline.to(images[images.length - 1], {
      opacity: 1,
      duration: 0.1
    });

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: imageContainer,
      start: 'top 50%',
      end: `bottom bottom-=80px`,
      scrub: true,
      animation: timeline
    });
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  const images = [Ap01, Ap02, Ap03, Ap04, Ap05, Ap06, Ap07, Ap08, Ap09];

  return (
    <ImageWrapper>
      <ImageContainer ref={imageContainerRef}>
        {images.map((image, index) => (
          <Image key={index}>
            <img
              className="myImage"
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image}
              alt=""
            />
          </Image>
        ))}
      </ImageContainer>
    </ImageWrapper>
  );
}
