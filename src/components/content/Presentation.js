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

import WomanFace from '../../assets/womanFace.jpg';
import CloudNoise from '../../assets/geo.jpg';

import {
  backgroundColor,
  textColor,
  textColorBringUp,
  textColorBringUpReverse
} from '../../styled';
import '../utils/imageFadeMaterial';

import SmileFacePng from '../../assets/iconsmileyLight.png';
import SmileFacePngDark from '../../assets/iconSmileyDark.png';
import { useSelector } from 'react-redux';

gsap.registerPlugin(ScrollTrigger);

const SmileContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  widht: 100vw;
  height: 100rem;

  canvas img {
    border: solid red;
  }

  #circle img {
    position: fixed;
    top: 15rem;
  }
`;
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
    gsap
      .timeline({
        scrollTrigger: {
          id: 'box2',
          trigger: '#box',
          pin: true,
          scrub: 0.2,
          start: 'top top',
          end: '+=1001',
          markers: false
        }
      })
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
      .to(meshref.current.scale, {
        duration: 0.01,
        x: 2.5,
        y: 1.6,
        top: 10
      });
    gsap
      .timeline({
        scrollTrigger: {
          id: 'box2',
          trigger: '#box',
          pin: true,
          scrub: 0.2,
          start: 'top top',
          end: '+=1000',
          markers: false,

          onLeave: exitTimeline,
          onEnter: enterTimeline,
          onEnterBack: enterTimeline
        }
      })
      .to(camera.rotation, {
        duration: 2.01,
        z: 2 * Math.PI
      });
  }, [camera, camera.rotation]);

  const [texture, texture2, displacement] = useLoader(THREE.TextureLoader, [
    darkThemeEnabled ? SmileFacePngDark : SmileFacePng,
    WomanFace,
    CloudNoise
  ]);

  useFrame(() => {
    building.current.time += 0.1;
    building.current.displaceFactor = THREE.MathUtils.lerp(
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
    gsap.fromTo(
      ref1.current,
      {
        opacity: 0,
        // y: 50,
        ease: Power2,
        clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
      },
      {
        opacity: 1,
        // y: 0,
        duration: 0.7,
        delay: 1.5,
        ease: Power2,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      }
    );

    itemsRef.current.map((item) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          // y: 20,
          scale: 1.5,
          ease: Power2,
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
        },
        {
          // y: 0,
          duration: 0.7,
          autoAlpha: 1,
          scale: 1,
          ease: Power2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scrollTrigger: {
            trigger: item,
            start: 'top center+=100',

            markers: false
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
 
  margin-top: -20rem;

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