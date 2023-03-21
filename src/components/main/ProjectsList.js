/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textColor, backgroundColor, textColorBringUp } from '../../styled';

import project1 from '../../assets/project1.jpg';
import project3 from '../../assets/project3.jpg';
import project5 from '../../assets/project5.png';
import { TextHeaderSection } from '../slideAnimation/TextHeaderSection';

gsap.registerPlugin(ScrollTrigger);

const ProyectListContainer = styled.div`
  display: flex;
  flex-direction: column;

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
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
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  border-bottom: solid 2px ${textColor};
  @media (max-width: 668px) {
    margin-top: 13rem;
    height: 100vh;
  }
 
  &:first-child {
    border-top: solid 2px ${textColor};
  }
  h2 {
    @media (max-width: 668px) {
      line-height: 80%;
      letter-spacing: -0.1em;
      font-size: 2.5rem;
    }
    p {
      @media (max-width: 668px) {
        font-size: 0.5rem;
      }
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
const Title = styled.h2`
  position: relative;

  height: 100%;

  text-align: center;
  font-size: 5rem;
  font-weight: 500;
  color: ${textColor};
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
  background-color: pink;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${textColor};
`;
const TextsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 3.5rem;
    font-weight: 500;
    text-align: center;
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
    title: 'Mediterranean food',
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
    <ProyectListContainer>
      {projects.map((project, index) => (
        <ProjectListHome
          className="project-list modal-background"
          onClick={() => handleProjectClick(project)}
          key={project.id}
          ref={(el) => (projectsRef.current[index] = el)}
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
            <div>
              <p>{project.number}</p>
              <h2>{project.title}</h2>
            </div>
            <p>{project.description} </p>
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
  );
}

export default ProjectList;
