import styled from 'styled-components';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';

// project list HOME --------------------------

export const ProyectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100%;s
  margin-bottom: 10em;

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    flex-wrap: wrap;
  }
`;

export const ProjectListHome = styled.div`
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
export const SelectedProjectContainer = styled.div`
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
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
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
  min-height: 40vh;
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: ${textColor};
// `;

export const ModalBackground = styled.div`
  background-color: ${backgroundColor};
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

export const CloseButton = styled.div`
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

export const AfewWordsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 15rem 5rem 1rem;

  a {
    color: ${textColor};
  }

  h4 {
    font-weight: 200;
    opacity: 0.8;
  }
  @media (max-width: 576px) {
    padding: 0;
    margin-top: 10rem;
  }
`;

// project list SEE MORE--------------------------

export const ProyectListcontainerSeeMore = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 5rem;

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
`;
export const ProjectListHomeSeeMore = styled.div`
  min-height: 50vh;
`;