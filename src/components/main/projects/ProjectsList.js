/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import SplitScrollText from '../../utils/SplitScrollText';
import { projects } from '../../utils/dataInfo';
import {
  AfewWordsContainer,
  ImageList,
  ProjectListHome,
  ProyectListContainer,
  TextsContainer
} from './stylesProjectList';
import ProjectDetail from './ProjectDetail';
import HandPointing from '../../../assets/handpointing.webp';
import { animateHoverEnter, animateHoverLeave } from './animationsHoverProj';
import useModal from './useModal';

gsap.registerPlugin(ScrollTrigger);

function ProjectList({ children }) {
  const projectsRef = useRef([]);

  const { modalOpen, openModal, closeModal } = useModal();

  // ANIMACIÓN HOVER  IMAGENES Y TEXTO :
  const handleMouseEnter = (index, id) => {
    animateHoverEnter(projectsRef.current[index], `textInside-${id}`);
  };

  const handleMouseLeave = (index, id) => {
    animateHoverLeave(projectsRef.current[index], `textInside-${id}`);
  };

  return (
    <>
      <AfewWordsContainer>
        <h3>TAKE A LOOK AT MY WORK</h3>
      </AfewWordsContainer>
      <ProyectListContainer
        // ref={projectListRef}
        className="projectListContainer"
      >
        {projects.map((project, index) => (
          <ProjectListHome
            className="project-list modal-background"
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
            <Link
              to={`/project/${project.name}`}
              key={project.name}
              onClick={() => openModal(project.name)}
            >
              <ImageList
                src={project.image}
                alt={project.title}
                className="modal-image"
              />
              <TextsContainer id={`textInside-${project.id}`}>
                <div className="projectName">
                  <p>{project.number}</p>
                  <SplitScrollText text={project.title} />
                </div>

                <p className="projDescriptionHome">{project.rol} </p>
                <p className="description">{project.description}</p>
              </TextsContainer>
            </Link>
          </ProjectListHome>
        ))}

        {modalOpen && <ProjectDetail closeModal={closeModal} />}
      </ProyectListContainer>{' '}
      <Link to="/seemore">
        <SeeMorecontainer>
          <div className="handPointing">
            <img src={HandPointing} alt="hand pointing click to see more" />
            <p>see all</p>
          </div>
        </SeeMorecontainer>
      </Link>
    </>
  );
}

export default ProjectList;
const SeeMorecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  position: relative;
  width: 100vw;

  .handPointing {
    display: flex;

    align-items: center;
  }

  img {
    width: auto;
    max-width: 35%;
    height: auto;
    position: relative;
  }
`;
