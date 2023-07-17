import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { ArrowdownHeader } from '../icons/Icons';

gsap.registerPlugin(ScrollTrigger);

function ArrowAnimationHeader() {
  const arrowRef = useRef(null);

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
    <ContainerArrow className="containerArrow">
      <ArrowdownHeader ref={arrowRef} className="arrow" />
    </ContainerArrow>
  );
}
function HeaderContent() {
  const refs = {
    devs2: useRef(null),
    buttonDownload: useRef(null),
    arrowIcon: useRef(null)
  };

  useEffect(() => {
    const devs2 = refs.devs2.current.querySelectorAll('span');

    gsap.fromTo(
      devs2,
      {
        opacity: 0,
        x: (i) => (i + 1) * 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.4,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: refs.devs2.current,
          start: 'top 80%',
          marks: true
        }
      }
    );

    gsap.fromTo(
      refs.buttonDownload.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: refs.buttonDownload.current,
          start: 'top 80%'
        }
      }
    );

    gsap.fromTo(
      refs.arrowIcon.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(1)',
        scrollTrigger: {
          trigger: refs.arrowIcon.current,
          start: 'top 85%'
        }
      }
    );
  }, [refs.arrowIcon, refs.buttonDownload, refs.devs2]);

  return (
    <Containerheader className="containerHeader" id="header">
      <ListStyled>
        <div className="devs2" ref={refs.devs2}>
          <h1>
            <span>HELLO,</span>
            <span> I DESIGN&nbsp; </span>
            <br />
            <span>AND </span>
            <span>DEVELOP</span>
            <br />
            <span>WEB </span> <span>PAGES</span>
          </h1>
          <div>
            <span className="based-in">
              <h4>Based in Madrid</h4>
            </span>
          </div>
          <div />
        </div>
        <ButtonWrapper ref={refs.buttonDownload} className="buttonWrapper">
          <ButtonDownloadContainer href="#" target="_blank" className="boton">
            <span>DOWNLOAD CV</span>
            <span>DOWNLOAD CV</span>
          </ButtonDownloadContainer>
        </ButtonWrapper>
        <ArrowAnimationHeader />
      </ListStyled>
    </Containerheader>
  );
}

const Containerheader = styled.header`
  color: ${textColor};
  background-color: ${backgroundColor};
  border-bottom: solid 2px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: none;
  flex: 0 0 auto;
  margin-bottom: 5em;
  padding-top: 10vh;

  
 
  .based-in {
    color: ${textColorBringUp};
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
   
  }

  

  h4 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      align-self: center;
    }

    
  }

  h1 {
    @media screen and (max-width: 768px) {
      // font-size: 5rem;
      // line-height: 82.5px;
      // letter-spacing: -0.05em;
      // top: 0;
    }
  }
}`;

const ListStyled = styled.div`
  .devs2 {
    perspective: 50vw;
    position: relative;
    max-width: 100%;
    padding: 0 6vw;

    @media (max-width: 668px) {
      padding: 0 4vw;
    }
  }

  // @media (max-width: 668px) and (max-width: 992px) {
  //   flex-direction: column;
  // }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: 15%;
  width: 100%;
`;
const ButtonDownloadContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  transition-delay: 0.6s;
  overflow: hidden;
  border-radius: 25px;
  border: solid 2px ${textColor};
  margin: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${textColor};
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
    transition: all 0.6s ease;
    border: solid 2px ${textColor};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${backgroundColor};
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all 0.6s ease;
  }

  div {
    position: relative;
    top: 6px;
    width: 100%;
    height: 26px;
    text-transform: uppercase;
    overflow: hidden;
    border: solid 2px ${backgroundColor};
  }

  span {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease;

    &:first-child {
      color: ${backgroundColor};
      transform: translateY(60px);
    }

    &:last-child {
      transform: translateY(-20px);

      color: ${textColor};
      transform: translateY(0);
    }
  }

  &:hover {
    background: ${backgroundColor};
    transition: background 0.2s linear;
    transition-delay: 0.6s;

    &:after {
      border-radius: 0 0 50% 50%;
      transform: translateY(-100%) scaleY(0.5);
      transition-delay: 0;
    }

    &:before {
      border-radius: 0;
      transform: translateY(0) scaleY(1);
      transition-delay: 0.6;
    }

    span {
      &:first-child {
        transform: translateY(0);
      }

      &:last-child {
        transform: translateY(20px);
        opacity: 0;
      }
    }
  }
`;
const ContainerArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 3rem;

  @media (max-width: 576px) {
    .arrow {
      margin-top: 2rem;
    }
  }
`;
export default HeaderContent;
