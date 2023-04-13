/* eslint-disable no-unused-vars */
import { gsap } from 'gsap';

import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import ParallaxContainer from '../pruebas/Modal';
import {
  backgroundColor,
  textColor,
  textColorBringUp,
  textColorBringUpReverse
} from '../../styled';

import GifDanceImage from '../../assets/dancegif.gif';

export const ContainerDescriptionAbout = styled.div`
  height: 100vh;
  position: relative;

  .containertextinner {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    color: ${textColor};
  }
  .textaboutMe {
    margin-left: 25%;
    width: 100%;

    p {
      font-size: 1.5rem;
      line-height: 1.5;
      letter-spacing: 0.05em;
      font-weight: 400;
    }
  }

  .fonthightlight {
    font-family: 'Lemonada';
    font-size: 1.5rem;
    text-transform: lowercase;
    color: ${textColorBringUp};
  }
  .borderHightlight {
    border: solid 2px;
    font-size: 1.4rem;
  }
  .borderBottonhightlight {
    text-decoration: underline;
    font-size: 1.9rem;
  }
  .fonthighlight {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }

  span {
    color: ${textColor};

    img {
      max-width: 10%;
      max-height: 5%;
      margin-top: -1.5rem;
    }
  }
`;

const HeaderAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem 5rem 1rem 1rem;
  border-bottom: solid 1px;
  width: 100%;

  span {
  }
`;
gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  // const sectionRef = useRef(null);
  // const bgColor = {
  //   from: '#373737',
  //   to: '#373737'
  // };

  // useEffect(() => {
  //   const section = sectionRef.current;

  //   if (section) {
  //     const colorTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: section,
  //         scrub: 1,
  //         start: 'top 10%',
  //         end: 'top 20%',
  //         pin: true,
  //         pinSpacing: false
  //       }
  //     });
  //     colorTl.to(section, {
  //       opacity: 1,
  //       backgroundColor: gsap.utils.interpolate(bgColor.from, bgColor.to),
  //       duration: 1,
  //       pin: true,
  //       pinSpacing: false
  //     });
  //     colorTl.to('p', { opacity: 1 });
  //   }
  // }, [bgColor.from, bgColor.to, sectionRef]);

  return (
    <ContainerDescriptionAbout>
      <HeaderAbout>
        <h3>lets talk</h3>
        <h3>&</h3>
        <h3>a fell words</h3>
        <span />
      </HeaderAbout>

      <div className="containertextinner">
        <h3>duarte.karen21@gmail.com</h3>
        <div className="textaboutMe">
          <p>
            <span className="fonthightlight">Hey there!</span> I&apos;m Karen, a
            web designer, currently settled in Madrid. I have a a passion for
            creating user-friendly websites
            <span className="fonthightlight">♥</span>, with a focus on{' '}
            <span className="borderHightlight">
              frontend <span className="fonthighlight">&</span> UX/UI design.
            </span>
            <br />
            SO,{' '}
            <span className="borderBottonhightlight">
              how I can help your team?
            </span>{' '}
            <span className="fonthightlight">Why me?</span> Well, let&apos;s
            just say I&apos;m like a{' '}
            <span className="fonthighlight">
              <i>chameleon</i>
            </span>
            - I CAN ADAPT TO ANY STYLE THAT SUITS YOUR PROJECTS. MY GOAL IS TO
            CREATE DESIGNS THAT WILL MAKE YOU SAY{' '}
            <span className="fonthightlight">
              &quot;WOW, THAT&apos;S EXACTLY WHAT I WAS THINKING!&quot;
            </span>
            (And let&apos;s be honest, I&apos;ll probably do a little happy
            dance when that happens
            <span>
              {' '}
              <img src={GifDanceImage} alt="happy dance" autoPlay loop />
            </span>
            ).
          </p>
        </div>
      </div>

      {/* <p>
          So go ahead and hire me, and let&apos;s work together to create
          something great!
        </p> */}
    </ContainerDescriptionAbout>
  );
}

export default SmoothScroll;
