/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/all';
import seeAllRotateWhite from '../../assets/seeAllRotateWhite.png';
import workHome from '../../assets/workHome.jpg';
import SeeAllRotate from '../../assets/seeAllRotate.png';
import { textColor } from '../../styled';
import {
  SubtitleHeaderSection,
  TextHeaderSection
} from '../slideAnimation/TextHeaderSection';

import { ArrowDownIcon } from '../icons/Icons';

// import Proyect1 from '../assets/project1.jpg';
// import Proyect2 from '../assets/project2.jpg';

// import Proyect3 from '../assets/proyect1.jpg';

gsap.registerPlugin(ScrollTrigger);

// const projectData = [
//   {
//     id: 1,
//     name: 'Project One',
//     link: '#',
//     info: 'someting',
//     image: '../assets/project1.jpg'
//   },
//   {
//     id: 2,
//     name: 'Project Two',
//     link: '#',
//     info: 'someting',
//     image: '../assets/project1.jpg'
//   },
//   {
//     id: 4,
//     name: 'Project Three',
//     link: '#',
//     info: 'someting',
//     image: '../assets/project1.jpg'
//   },
//   {
//     id: 5,
//     name: 'Project Fourth',
//     link: '#',
//     info: 'someting',
//     image: '../assets/project1.jpg'
//   }
// ];
function Menu() {
  const ref = useRef();
  const button = useRef();
  const imgBg = useRef();
  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power2'
    }
  });
  const toggleDirection = () => {
    tl.reversed(!tl.reversed());
  };
  // Initialize
  useEffect(() => {
    gsap.set(ref.current.children[0].children, {
      y: '-100vh'
    });
    console.log(ref.children.current[2], 'hola hola hola hola');

    gsap.set(ref.current.children[2].children, {
      opacity: 0
    });

    gsap.set(button.current, {
      opacity: 1
    });

    gsap.set(imgBg.current.children, {
      autoAlpha: 0
    });
  }, []);

  // Animate
  useEffect(() => {
    tl.to(ref.current.children[0].children, {
      y: 0,
      stagger: 0.2,
      duration: 0.75
    })
      .to(ref.current.children[2].children, {
        opacity: 1,
        stagger: 0.1
      })
      .reversed(true);

    tl.reversed() ? tl.play() : tl.reverse();
  });

  const onHover = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 1
    });
  };
  const onLeave = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 0
    });
  };
  return (
    <ContainerWorkHola>
      <div className="menu" ref={ref}>
        <div className="menu-background">
          <div className="image-bg" ref={imgBg}>
            {projectData.map((index) => (
              <div className="number">
                <a href={index.link}>
                  <img src={index.image} alt="hola" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div />
        <ul className="nav-list">
          {projectData.map((index) => (
            <li>{index.name}</li>
          ))}
          {/* <li onMouseEnter={() => onHover(0)} onMouseLeave={() => onLeave(0)}>
            About
          </li>
          <li onMouseEnter={() => onHover(1)} onMouseLeave={() => onLeave(1)}>
            Services
          </li>
          <li onMouseEnter={() => onHover(2)} onMouseLeave={() => onLeave(2)}>
            Works
          </li>
          <li onMouseEnter={() => onHover(3)} onMouseLeave={() => onLeave(3)}>
            Careers
          </li> */}
        </ul>
      </div>
    </ContainerWorkHola>
  );
}

export default function Work() {
  // const darkThemeEnabled = useSelector(
  //   (state) => state.preferences.darkThemeEnabled
  // );

  // const q = useRef(gsap.utils.selector());
  // const tl = useRef();
  // const buttonRef = useRef(null);

  // const [visible, setVisible] = useState(false);

  // const [cursorX, setCursorX] = useState(1274.0);
  // const [cursorY, setCursorY] = useState(2496.0);
  // const [storeScroll, setStoreScroll] = useState(0.0);

  // useEffect(() => {
  //   tl.current = gsap
  //     .timeline({
  //       paused: true,
  //       default: {
  //         duration: 0.1,
  //         ease: 'Power1.in',
  //         reversed: false
  //       }
  //     })
  //     .add('mouseEnterAnim')
  //     .to(q.current('.search-icon'), {
  //       scale: 1,
  //       autoAlpha: 1
  //     });
  //   const cursor = document.querySelector('.cursor-inner');
  //   const cursor2 = document.querySelector('.cursor-inner');

  //   if (visible) {
  //     cursor.style.top = `${cursorY}px `;
  //     cursor.style.left = `${cursorX}px`;
  //   } else if (cursor) {
  //     // cursor.style.top = `2496px`;
  //     // cursor.style.left = `1274px`;
  //   }
  //   window.addEventListener('mousemove', (e) => {
  //     if (visible) {
  //       setCursorX(e.pageX);
  //       setCursorY(e.pageY);
  //     }
  //   });
  //   window.addEventListener('scroll', (e) => {
  //     if (visible) {
  //       setCursorY(cursorY + window.scrollY - storeScroll);
  //     }
  //     setStoreScroll(window.scrollY);
  //   });
  //   console.log(cursorX, cursorY);
  // }, [cursorX, cursorY, storeScroll, visible]);

  // const onMouseEnterHandler = () => {
  //   twitterTween.current.play();
  // };
  // const onMouseLeaveHandler = () => {
  //   twitterTween.current.reverse();
  // };
  const ref = useRef();
  const imgBg = useRef();

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power2'
    }
  });
  useEffect(() => {
    tl.to(ref.current.children[0].children, {
      y: 0,
      stagger: 0.2,
      duration: 0.75
    })
      .to(ref.current.children[2].children, {
        opacity: 1,
        stagger: 0.1
      })
      .reversed(false);

    tl.reversed() ? tl.play() : tl.reverse();
  }, [tl]);

  const onHover = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 1
    });
  };
  const onLeave = (i) => {
    gsap.to(imgBg.current.children[i], {
      duration: 1,
      autoAlpha: 0
    });
  };
  return (
    <>
      <TextHeaderSection title="work" id="work" />
      <SubtitleHeaderSection subtitle="here are some projects worth seeing" />
      <Containerwork ref={ref}>
        <img src={workHome} alt="" />
        <div className="layer" />
        <div className="image-bg" ref={imgBg}>
          <div className="number">
            <img src={Proyect1} alt="copenhagen" />
          </div>
          <div className="number">
            <img src={Proyect2} alt="copenhagen" />
          </div>
          <div className="number">
            <img src={Proyect3} alt="copenhagen" />
          </div>
          <div className="number">
            <img src={Proyect1} alt="copenhagen" />
          </div>
        </div>

        <div>
          <ul>
            <li onMouseEnter={() => onHover(0)} onMouseLeave={() => onLeave(0)}>
              Project one
            </li>
            <li onMouseEnter={() => onHover(1)} onMouseLeave={() => onLeave(0)}>
              Project two
            </li>
            <li onMouseEnter={() => onHover(2)} onMouseLeave={() => onLeave(0)}>
              Project three
            </li>
            <li onMouseEnter={() => onHover(3)} onMouseLeave={() => onLeave(0)}>
              Project four
            </li>
          </ul>
        </div>
      </Containerwork>

      {/* <ProjectHome
        className="cursor-outer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <img src={workHome} alt="" />
        <div>
          <h2>spaguetti</h2>
          <p>UX/UI · DEVELOPMENT · ART DIRECTION · DESIGN</p>
        </div>
        <Circle className="cursor-inner cursor-outer search-icon ">
          <Link
            to="/seemore"
            // onMouseEnter={onMouseEnterHandler}
            // onMouseLeave={onMouseLeaveHandler}
          >
            {darkThemeEnabled ? (
              <img src={seeAllRotateWhite} alt="" />
            ) : (
              <img src={SeeAllRotate} alt="" />
            )}
          </Link>
        </Circle>
      </ProjectHome> */}
    </>
  );
}
const Containerwork = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 2.5rem;
  width: 100vw;
  height: 100vh;
  position: relative;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
  }
  li {
    list-style-type: none;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 2rem 0;
    border-top: solid 1px;
    width: 100vw;
  }
  ul {
  }
  li:last-child {
    border-bottom: solid 1px;
    padding-bottom: 5rem !important;
  }
  img {
    position: relative;
    min-width: 100%;
    max-height: 110vh;
    cursor: none;
  }
  .image-bg {
    width: 100%;
    height: 100%;
  }
  .number {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: grey;
    font-size: 650px;
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ContainerWorkHola = styled.div`
  .container {
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
  }

  .section {
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .menu {
    position: absolute;

    z-index: 900;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-background {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .layer {
    width: 100%;
    height: 100%;

    position: absolute;
  }

  .image-bg {
    width: 100%;
    height: 100%;
  }
  .number {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: grey;
    font-size: 650px;
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-button {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 5rem;
    top: 5rem;
    z-index: 999;
  }

  .nav-list {
    list-style-type: none;
    font-size: 64px;
    text-align: left;
    font-weight: 700;
    z-index: 997;
  }
`;
const Circle = styled.div`
cursor: pointer;
  .cursor-inner {
    
    pointer-events: none;
  }
  .cursor-outer {
    transition: all 0.08s ease-out;
  }
  img{
    max-width:5%;
    max-height:5%;
   
   
  }
 
}
`;

const ProjectHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: blue;
  @media (max-width: 668px) {
    max-width: 100vw;
    overflow: hidden;
    font-size: 1rem !important;
  }

  div {
    position: absolute;
  }
  h2 {
    font-family: 'Lemonada';
    font-weight: 100;
    font-size: 8rem;
    text-transform: lowercase;
    letter-spacing: -0.2em;
  }

  img {
    position: relative;
    min-width: 95%;
    max-height: 90vh;
    cursor: none;
  }
  .image-project hover {
  }
`;
