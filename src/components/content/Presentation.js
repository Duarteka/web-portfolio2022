/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useRef, useEffect, useState, Suspense } from 'react';
import theme from 'styled-theming';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';
import styled from 'styled-components';

import WomanFace from '../../assets/womanFace.webp';
import CloudNoise from '../../assets/geo.webp';

import { backgroundColor, textColorBringUp } from '../../styled';
import '../utils/imageFadeMaterial';

import SmileFacePng from '../../assets/iconsmileyLight.webp';
import SmileFacePngDark from '../../assets/iconsmileyLight.png';
import { useSelector } from 'react-redux';
import { TextureLoader, MathUtils } from 'three';

gsap.registerPlugin(ScrollTrigger);

export const textColorProcess = theme('theme', {
  light: '#F9F5E7',
  dark: '#373737'
});

export const textColorBringUpProcess = theme('theme', {
  light: '#F9F586',
  dark: '#D34C7F'
});

function Building() {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const building = useRef();
  const meshref = useRef();
  const [scrolled, setScrolled] = useState(false);
  const camera = useThree((state) => state.camera);

  const exitTimeline = () => {
    setScrolled(true);
  };

  const enterTimeline = () => {
    setScrolled(false);
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        id: 'box2',
        trigger: '#box',
        pin: true,
        scrub: 0.2,
        start: 'top top',
        end: '+=1001',
        markers: false
      }
    });
    timeline
      .to(meshref.current.scale, {
        duration: 1,
        x: 1.4,
        y: 1.4
      })
      .to(meshref.current.scale, {
        duration: 1,
        x: 1.0,
        y: 1.0
      })
      .to(
        meshref.current.scale,
        {
          duration: 0.01,
          x: 2.5,
          y: 1.6,
          top: 10
        },
        '+=0.2'
      );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        id: 'box2',
        trigger: '#box',
        pin: true,
        scrub: 0.2,
        start: 'bottom bottom',
        end: '+=1001',
        markers: false,
        onLeave: exitTimeline,
        onEnter: enterTimeline,
        onEnterBack: enterTimeline
      }
    });
    timeline2
      .to(
        meshref.current.scale,
        {
          duration: 1,
          x: 1.4,
          y: 1.4
        },
        '+=0.2'
      )
      .to(
        meshref.current.scale,
        {
          duration: 1,
          x: 1.0,
          y: 1.0
        },
        '+=0.2'
      )
      .to(
        meshref.current.scale,
        {
          duration: 0.01,
          x: 2.5,
          y: 1.6,
          top: 10
        },
        '+=0.2'
      );

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        id: 'box3',
        trigger: '#box',
        pin: true,
        scrub: 0.2,
        start: 'bottom bottom',
        end: '+=1500',
        markers: false,
        onLeave: exitTimeline,
        onEnter: enterTimeline,
        onEnterBack: enterTimeline
      }
    });
    timeline3.to(
      camera.rotation,
      {
        duration: 2.01,
        z: 2 * Math.PI
      },
      '+=0.2'
    );
  }, [camera.rotation]);

  const [texture, texture2, displacement] = useLoader(TextureLoader, [
    darkThemeEnabled ? SmileFacePngDark : SmileFacePng,
    WomanFace,
    CloudNoise
  ]);

  useFrame(() => {
    building.current.time += 0.1;
    building.current.displaceFactor = MathUtils.lerp(
      building.current.displaceFactor,
      scrolled ? 1 : 0,
      0.1
    );
  });

  return (
    <mesh ref={meshref}>
      <planeBufferGeometry args={[6, 6]} />
      <imageFadeMaterial
        ref={building}
        tex={texture}
        tex2={texture2}
        dis={displacement}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
function RenderImage() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight intensity={0.9} />
      <Suspense fallback={null}>
        <Building />
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
export function TextAppears() {
  const ref1 = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: 'Power2.inOut',
        clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
      },
      scrollTrigger: {
        trigger: ref1.current,
        end: '+=100%',
        scrub: true,
        start: 'top 80%'
      }
    });

    timeline
      .fromTo(
        ref1.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1.5,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
      )
      .fromTo(
        itemsRef.current,
        { opacity: 0, scale: 1.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
      );

    itemsRef.current.map((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          scale: 1.5,
          ease: 'Power2.inOut',
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'Power2.inOut',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',
            scrub: true
          }
        }
      );
    });
  }, [ref1, itemsRef]);

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  return (
    <>
      <SmileContainer id="box">
        <ContainerImagesFade id="imageblur">
          <RenderImage />
        </ContainerImagesFade>
      </SmileContainer>
      <BrandKa ref={ref1}>
        <h1 ref={addToRefs}>
          l m your next creat<span>i</span>ve developer
        </h1>
      </BrandKa>
    </>
  );
}

const SmileContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100rem;

  canvas img {
    border: solid red;
  }

  #circle img {
    position: fixed;
    top: 10rem;
  }
`;
const ContainerImagesFade = styled.div`
  width: 100%;
  height: 50%;

  @media (max-width: 668px) {
    max-width: 100vw;
  }
`;

const BrandKa = styled.div`
  display: flex;
  flex-wrap: nowrap
  align-items: center;
  justify-content: center
  align-content: stretch;
  height: 100vh;
  position: relative;
  padding:  5rem;
  width: 100vw;
  color: ${backgroundColor};
 
 

  @media (max-width: 668px) {
    padding: 0 3rem;
  }

  h1 {
    text-transform: lowercase;
    font-size: 15rem;
    line-height: 150px;
    height: 100vh;
    width: 130%;
    
    

    @media (max-width: 668px) {
      font-size: 5rem;
      line-height: 60px;
      height: 50vh;
      width: 130%;
      padding-top: 10%;
      padding-bottom: 35%;
    }
  }
  &:nth-child(odd) {
    margin-left: random(400) - 100px;
  }

  &:nth-child(even) {
    margin-right: random(400) - 100px;
  }

  span {
    text-transform: lowercase;
    color: ${textColorBringUp};
    font-weight: 400;
    font-family: 'Lemonada';
    font-size: 12rem;
    
    @media (max-width: 668px) {
      font-size: 5rem;
      padding-right: 10rem;
    }
  }
`;
