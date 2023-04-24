/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { textColor, backgroundColor, textColorBringUp } from '../../styled';

import project1 from '../../assets/project1.jpg';
import project3 from '../../assets/project3.jpg';
import project5 from '../../assets/project5.png';
import { TextHeaderSection } from '../slideAnimation/TextHeaderSection';
import BorderAnimation from '../pruebas/Modal';
import SplitScrollText from '../utils/SplitScrollText';

gsap.registerPlugin(ScrollTrigger);

const ProyectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100%;
  margin-bottom: 10em;
  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    flex-wrap: wrap;
  }
`;

const ProjectListHome = styled.div`
  min-height: 30vh;
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: solid 2px ${textColor};

  @media (max-width: 668px) {
    max-height: 30vh;
  }
  &:first-child {
    border-top: solid 2px ${textColor};
  }
`;
const SelectedProjectContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  filter: grayscale(100%);

  position: absolute;
  min-height: 40vh;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${textColor};
`;

const ModalBackground = styled.div`
  background-color: ${backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2em;
  cursor: pointer;
  color: ${textColor};
`;
const TextsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100vw;
  //padding: 0 3rem;
  align-items: center;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  h2 {
    padding: 5rem 2rem;
  }

  p:last-child {
    overflow: hidden;
    text-align: justify;
    width: 100%;
  }
  p:first-child {
    border-bottom: 2px solid ${textColorBringUp};
  }
  .projectName {
    display: flex;
    align-items: center;
  }
  .projDescriptionHome {
    margin-bottom: -3vw;
    font-weight: 400;
    max-width: 10%;

    @media (max-width: 668px) and (max-width: 992px) {
      max-width: 25%;
    }
  }
  @media (max-width: 668px) and (max-width: 992px) {
    padding: 0 1rem;
    width: 100vw;
  }
`;
export const AfewWordsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  h4 {
    font-weight: 200;
    opacity: 0.8;
  }
`;

const projects = [
  {
    id: 1,
    title: 'Chaos cosmos',
    image: project1,
    link: '/project1',
    description: 'development, ux',
    number: '01'
  },
  {
    id: 2,
    title: 'Mediterranean',
    image: project3,
    link: '/project2',
    description: ' design development, ux',
    number: '02'
  },
  {
    id: 3,
    title: 'Coffe Shop',
    image: project5,
    link: '/project3',
    description: 'development, ux',
    number: '03'
  },
  {
    id: 4,
    title: 'Design Portfolio',
    image: 'https://picsum.photos/id/40/1920/1080',
    link: '/project4',
    description: 'development, ux',
    number: '04'
  }
];

function ProjectList() {
  const projectsRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [bodyOverflow, setBodyOverflow] = useState(null);
  const modalcontainerRef = useRef(null);
  const projectListRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      gsap.fromTo(
        modalcontainerRef,
        {
          x: '100%',
          duration: 0.1
        },

        {
          duration: 0.2,
          x: '0%'
        }
      );
    }
  }, [showModal]);

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    setShowModal(true);
    setBodyOverflow(document.body.style.overflow);

    document.body.style.overflow = 'hidden';

    gsap.to('.project-list', {
      x: '-100%',
      duration: 1
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProject(null);

    document.body.style.overflow = bodyOverflow;

    gsap.to('.project-list', {
      x: '0%',
      duration: 1
    });
  };

  const handleMouseEnter = (index, id) => {
    const image = projectsRef.current[index].querySelector('img');
    gsap.to(`#${id}`, {
      color: '#D34C7F',
      duration: 0.5,
      yoyo: true
    });
    gsap.to(image, {
      duration: 0.7,
      opacity: 1,
      y: 0,
      scale: 1.2,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (index, id) => {
    const image = projectsRef.current[index].querySelector('img');
    gsap.to(`#${id}`, {
      color: '#333',
      duration: 0.5,
      yoyo: true
    });
    gsap.to(image, {
      duration: 0.7,
      opacity: 0,
      y: '100%',
      ease: 'power2.out',
      scale: 1
    });
  };

  return (
    <>
      <AfewWordsContainer>
        <h3>Work</h3>
        <h4>See all</h4>
      </AfewWordsContainer>

      <ProyectListContainer ref={projectListRef}>
        {projects.map((project, index) => (
          <ProjectListHome
            className="project-list modal-background"
            onClick={() => handleProjectClick(project)}
            key={project.id}
            ref={(el) => {
              projectsRef.current[index] = el;
            }}
            onMouseEnter={() =>
              handleMouseEnter(index, `textInside-${project.id}`)
            }
            onMouseLeave={() =>
              handleMouseLeave(index, `textInside-${project.id}`)
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              className="modal-image"
            />
            <TextsContainer id={`textInside-${project.id}`}>
              <div className="projectName">
                <p>{project.number}</p>
                <SplitScrollText text={project.title} />
              </div>

              <p className="projDescriptionHome">{project.description} </p>
            </TextsContainer>
          </ProjectListHome>
        ))}

        {currentProject ? (
          <SelectedProjectContainer ref={modalcontainerRef}>
            <ModalBackground>
              <CloseButton onClick={handleCloseModal}>X</CloseButton>
              <img src={currentProject.img} alt={currentProject.title} />
              <p>{currentProject.title}</p>
            </ModalBackground>
          </SelectedProjectContainer>
        ) : null}
      </ProyectListContainer>
    </>
  );
}

export default ProjectList;
