import React from 'react';
// eslint-disable-next-line import/no-cycle
import styled from 'styled-components';
import { backgroundColor, textColor } from '../../styled';

export default function Footer() {
  return (
    <footer>
      <ContainerFooter>
        <p>
          Design by <strong>Karen Duarte</strong>
        </p>
        <p> </p>
        <p>© 2023 </p>
      </ContainerFooter>
    </footer>
  );
}
const ContainerFooter = styled.div`
  display: flex;
  background-color: ${textColor};
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-weight: 600 !important;
  height: 10vh;

  p {
    margin: 0 5rem;
    color: ${backgroundColor}
  }
  @media (max-width: 576px) {
    max-height: 15vh;
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 668px) {
    max-width: 100vw;
    flex-direction: column;
    overflow: hidden;
    font-size: 1rem !important;
    height: 50vh;
  }
    @media (max-width: 668px) {
      max-width: 100vw;
      flex-direction: column;
      overflow: hidden;
      font-size: 1rem !important;
    }
  }
`;
