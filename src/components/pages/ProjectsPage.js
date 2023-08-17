/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HandUp from '../../assets/hand-pointing.webp';
import {
  ImageList,
  ProjectListHomeSeeMore,
  ProyectListcontainerSeeMore,
  TextsContainerSeeMore
} from '../main/projects/stylesProjectList';
import ProjectDetail from '../main/projects/ProjectDetail';
import useModal from '../main/projects/useModal';
import {
  animateHoverEnter,
  animateHoverLeave
} from '../main/projects/animationsHoverProj';
import { projects } from '../utils/dataInfo';
import SplitScrollText from '../utils/SplitScrollText';
import { TextHeaderPages } from '../utils/custom-components/CustomHeaderPages';

export function ProjectsPage() {
  const projectsRef = useRef([]);

  const { modalOpen, openModal, closeModal } = useModal();

  const handleMouseEnter = (index, id) => {
    animateHoverEnter(projectsRef.current[index], `textInside-${id}`);
  };

  const handleMouseLeave = (index, id) => {
    animateHoverLeave(projectsRef.current[index], `textInside-${id}`);
  };
  return (
    <>
      <TextHeaderPages texto="ALL PROJECTS(6)" />
      <ProyectListcontainerSeeMore className="projectListContainer">
        {projects.map((project, index) => (
          <ProjectListHomeSeeMore
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
              key={project.id}
              onClick={() => openModal(project.name)}
            >
              <ImageList
                src={project.image}
                alt={project.title}
                className="modal-image"
              />
              <TextsContainerSeeMore id={`textInside-${project.id}`}>
                <div className="projectName">
                  <p>{project.number}</p>
                  <SplitScrollText text={project.title} />
                </div>

                <p className="projDescriptionHome">{project.rol} </p>
                <p className="description">{project.description}</p>
              </TextsContainerSeeMore>
            </Link>
          </ProjectListHomeSeeMore>
        ))}
        {modalOpen && <ProjectDetail closeModal={closeModal} />}
      </ProyectListcontainerSeeMore>
      <TextHeaderPages texto="Lets talk" image={HandUp} />
    </>
  );
}
