import React from 'react';
// eslint-disable-next-line import/no-cycle
import styled from 'styled-components';

export default function Footer() {
  return (
    <footer>
      <ContainerFooter>
        <p>Design by</p>
        <p>Karen Duarte </p>
        <p>
          Web Developer
          <br /> UX Designer <br />
          Graphic Designer
        </p>
        <p>© 2022 Privacy policy</p>
      </ContainerFooter>
    </footer>
  );
}

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  width: 100%;

  footer {
    display: inline;
    background-color: blue;
    width: 100%;
  }
`;
