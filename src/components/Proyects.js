/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import styled, { createGlobalStyle } from 'styled-components';
import HorizontalScroll from './horizontalscroll';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    
  }
`;

const Main = styled.main``;

const proyects = [
  {
    id: 1,
    title: 'Project One',
    rol: 'Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 2,
    title: 'Project Two',
    rol: 'UI, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 3,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 4,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 5,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 6,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 7,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  }
];

const SampleCards = React.memo(() =>
  Array(6)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

export default function Proyects() {
  return (
    <>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <h2> Proyects </h2>
            <SampleCards />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>

      {/* <div className="containerProjects">
        {proyects.map((item) =>
          item.id <= 5 ? (
            <div className="proyects" key={item.id}>
              <h3>{item.title}</h3>
              <h4>{item.rol}</h4>
              <a href={item.path}>
                <button type="button">{item.textButton}</button>
              </a>
            </div>
          ) : null
        )}
      </div>
      <div className="containerProjectsRow">
        {proyects.map((item) =>
          item.id > 5 ? (
            <div className="proyects" key={item.id}>
              <h3>{item.title}</h3>
              <h4>{item.rol}</h4>
              <a href={item.path}>
                <button type="button">{item.textButton}</button>
              </a>
            </div>
          ) : null
        )}
      </div> */}
    </>
  );
}

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardsContainer = styled.div`
  position: relative;

  padding: 0 0 0 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 400px;
  width: 800px;
  background-color: blue;
  margin-right: 8px;
  margin-left: 8px;
  flex-shrink: 0;
`;
