/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplitScrollText from '../utils/SplitScrollText';
import { projects } from '../utils/dataInfo';
import {
  AfewWordsContainer,
  CloseButton,
  ImageList,
  ModalBackground,
  ProjectListHome,
  ProyectListContainer,
  SelectedProjectContainer,
  TextsContainer
} from './stylesProjectList';
import { useProjectLogic } from './useProjectLogic';

gsap.registerPlugin(ScrollTrigger);

function ProjectList({ children }) {
  const projectsRef = useRef([]);
  const { modalcontainerRef } = useProjectLogic();

  // ANIMACIÓN HOVER  IMAGENES Y TEXTO :
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
      <AfewWordsContainer id="work">
        <h3>Work</h3>
        <h4>
          <Link to="/seemore"> See all</Link>
        </h4>
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
            <Link to={`/project/${project.id}`} key={project.id}>
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
      </ProyectListContainer>
    </>
  );
}

export default ProjectList;
