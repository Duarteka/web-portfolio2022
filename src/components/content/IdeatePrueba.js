/* eslint-disable react/no-array-index-key */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import AnimatedText from './TextFillAnimation';
import { sections } from '../utils/dataInfo';

gsap.registerPlugin(ScrollTrigger);

const DevelopProcessContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 13rem;
  }

  .containerAll {
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: solid 2px;
    border-top: solid 2px;
    background-color: ${backgroundColor};

    :first-child {
      border-top: solid 2px;
    }
  }

  .toolsaAndImage {
    display: flex;
    align-items: center;
    height: 100vh;
    border-right: solid 2px;
    max-width: 50%;
    overflow: hidden;
  }
  .animatedtextansdescrip {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%;
    margin-top: 5rem;
  }

  .imageContainer.firstImage img {
    width: 68%;
    //transform: translate(-20rem, 0);
  }

  .imageContainer.secondImage img {
    max-width: 85%;
  }
  .imageContainer.thirdImage img {
    max-width: 55%;
  }
  .imagesProcess {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 80%;
    background-size: cover;
    position: absolute;
    z-index: 1;
    // opacity: 80%;
    margin-top: 10rem;
  }

  @media (max-width: 843px) {
    .list h1 {
      letter-spacing: 3px;
    }
  }
`;

const TextLoop = styled.div`
  width: 100vh;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;

  h2 {
    margin: 0 5rem;
    padding: 2rem 9;
  }
  h3 {
    margin: 2rem 7rem;
  }
`;

export default function IdeatePrueba() {
  const wrapperRef = useRef(null);

  function getClassByIndex(index) {
    switch (index) {
      case 0:
        return 'firstImage';
      case 1:
        return 'secondImage';
      case 2:
        return 'thirdImage';
      default:
        return '';
    }
  }

  return (
    <>
      <HeaderTextForSection text1="Process" text2="&" text3="skills" />

      <div>
        <div ref={wrapperRef}>
          <DevelopProcessContainer>
            <ProgressBarFunct triggerRef={wrapperRef} />
            {sections.map((section, index) => (
              <div className="containerAll">
                <div className="toolsaAndImage">
                  <div className={`imageContainer ${getClassByIndex(index)}`}>
                    <div className="imagesProcess">
                      <img
                        key={section.id}
                        className="imageSection"
                        src={section.image}
                        alt=""
                      />
                    </div>
                    <TextLoop>
                      <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover
                        pauseOnClick
                        delay={0}
                        play
                        direction="left"
                      >
                        {section.textInfiniteh2.map((item) => (
                          <div key={item.id}>
                            <h2>{item.text}</h2>
                          </div>
                        ))}
                      </Marquee>
                      <Marquee
                        gradient={false}
                        speed={50}
                        pauseOnHover
                        pauseOnClick
                        delay={0}
                        play
                        direction="right"
                      >
                        {section.textInfiniteh3.map((item) => (
                          <div key={item.id}>
                            <h3>{item.text}</h3>
                          </div>
                        ))}
                      </Marquee>
                    </TextLoop>
                  </div>
                </div>
                <div className="animatedtextansdescrip">
                  <AnimatedText text={section.title} textColor={textColor} />
                  <p>{section.description}</p>
                </div>
              </div>
            ))}
          </DevelopProcessContainer>
        </div>
      </div>
    </>
  );
}
const ContainerHeaderTextForSection = styled.div`
  display: flex;
  flex-direction: flex;
  position: relative;
  justify-content: space-around;
  height: 30vh;
  align-items: center;

  h3 {
  }
`;
export function HeaderTextForSection({ text1, text2, text3 }) {
  return (
    <ContainerHeaderTextForSection>
      <h3>{text1}</h3>
      <h3>{text2}</h3>
      <h3>{text3}</h3>
    </ContainerHeaderTextForSection>
  );
}

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1; // Asegúrate de que el ProgressBar está sobre otros contenidos
`;
const ProgressBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
`;

const Progress = styled.div`
  width: 0;
  height: 100%;
  background: ${textColorBringUp};
`;

function ProgressBarFunct({ triggerRef }) {
  const progressRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;

    const st = gsap.to(progress, {
      width: '100%',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        smooth: 40
      }
    });
    return () => st.revert();
  }, [triggerRef]);

  return (
    <StickyContainer>
      <ProgressBar>
        <Progress ref={progressRef} />
      </ProgressBar>
    </StickyContainer>
  );
}
