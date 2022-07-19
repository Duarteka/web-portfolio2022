import styled from 'styled-components';

import React from 'react';
import { RectangleLightMode } from './RectangleDarkMode';

export default function About() {
  return (
    <AboutContainer>
      <RectangleLightMode />
      <h1>About</h1>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
