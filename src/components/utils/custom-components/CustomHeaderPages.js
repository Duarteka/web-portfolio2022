import { React } from 'react';

import styled from 'styled-components';

const TextHeaderPagesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 11vh;
  margin-left: 5rem;

  height: 40vh;

  h1 {
    font-size: 10em;
  }
  img {
    max-width: 100%;
    max-height: 80%;
    object-fit: cover;
  }
`;
export function TextHeaderPages({ texto, image }) {
  return (
    <TextHeaderPagesContainer>
      <h1>{texto}</h1>
      <img src={image} alt="" />
    </TextHeaderPagesContainer>
  );
}
