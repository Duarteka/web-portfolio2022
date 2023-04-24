import React from 'react';
// eslint-disable-next-line import/no-cycle
import styled from 'styled-components';

export default function Footer() {
  return (
    <footer>
      <ContainerFooter>
        <p>Design by Karen Duarte</p>
        <p> </p>
        <p>© 2023 </p>
      </ContainerFooter>
    </footer>
  );
}

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 600 !important;
  position: relative;

  p {
    margin: 0 5rem;
    margin-bottom: 5%;
  }
  @media (max-width: 668px) {
    max-width: 100vw;
    flex-direction: column;
    overflow: hidden;
    font-size: 1rem !important;
    height: 50vh;
  }

   {
    display: inline;
    background-color: blue;
    width: 100%;

    @media (max-width: 668px) {
      max-width: 100vw;
      flex-direction: column;
      overflow: hidden;
      font-size: 1rem !important;
    }
  }
`;
