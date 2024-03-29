/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { backgroundColor, textColor, textColorBringUp } from '../../../styled';

// project list HOME --------------------------

export const ProyectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    text-decoration: none;
    color: ${textColor};
  }
`;

export const ProjectListHome = styled.div`
  background-color: ${backgroundColor};
  min-height: 30vh; // puedes ajustar esto al tamaño deseado
  display: flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px ${textColor};

  @media (max-width: 668px) {
    max-height: 30vh;
  }
  &:first-child {
    border-top: solid 2px ${textColor};
  }
`;
export const SelectedProjectContainer = styled.div`
  position: sticky;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
`;
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  padding: 0 3rem;
  align-items: center;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  .description {
    display: none;
  }

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
    max-width: 100%;

    @media (max-width: 668px) and (max-width: 992px) {
      max-width: 25%;
    }
  }
  @media (max-width: 668px) and (max-width: 992px) {
    padding: 0 1rem;
    width: 100vw;
  }
`;

export const ImageList = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  filter: grayscale(100%);
  position: absolute;
`;

export const ModalBackground = styled.div`
  // background-color: ${backgroundColor};
  height: auto;
  width: 100vw;

  h1 {
    font-size: 10rem;
  }
  .imageModalOpenHeader {
    width: 100vw;
    height: 400px;
    overflow: hidden;
  }

  .imageModalOpenHeader img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .commingSoon {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${backgroundColor};
    border: solid 2px ${textColorBringUp};

    h1 {
      color: ${textColorBringUp};
    }
  }
`;

export const CloseButton = styled.div`
  top: 5%;
  right: 15%;
  background-color: transparent;
  color: ${backgroundColor};

  font-size: 2em;
  cursor: pointer;
  position: fixed;

  p {
    border: solid 1px;
    width: 100%;
    height: 100%;
    background-color: ${textColor};
    position: sticky;
  }
  img {
    width: 80px;
  }

  .closeBoton {
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const AfewWordsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  height: 30vh;

  h4 {
    font-family: 'Acier';
    font-size: 4em;
  }

  img {
    max-width: 12%;
    flex: 1%;
    margin-left: 65rem;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;

// project list SEE MORE--------------------------

export const ProyectListcontainerSeeMore = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 2rem 10rem;
  background-color: ${backgroundColor};
  position: relative;
  border-bottom: solid 2px;
  border-top: solid 2px;

  .project-list {
    height: 100%;
    padding: 0 5rem;
    border: solid 1px;

    img {
      display: none;
    }
  }
`;

export const TextsContainerSeeMore = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  height: 100%;
  width: 100%;
  color: ${textColor};
`;
export const ProjectListHomeSeeMore = styled.div`
  min-height: 50vh;
`;
