import React from 'react';
// eslint-disable-next-line import/no-cycle
import styled from 'styled-components';

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
  height: 100%;
  justify-content: center;
  align-items: baseline;
  align-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-weight: 600 !important;
  position: relative;
  height: 20vh;

  @media (max-width: 576px) {

    max-height: 15vh;

    p {
      font-size: 0.7rem;
    }
  
  }


  p {
    margin: 0 5rem;
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
