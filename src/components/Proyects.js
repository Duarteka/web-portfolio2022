/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import styled, { createGlobalStyle } from 'styled-components';
import {
  PageTransition,
  TransitionState
} from '@steveeeie/react-page-transition';
import { Link, NavLink } from 'react-router-dom';
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
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/20dd57147138749.62bcc052b0b20.png'
  },
  {
    id: 2,
    title: 'Project Two',
    rol: 'UI, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d56dfe112501169.602019e77be29.jpg'
  },
  {
    id: 3,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/99664f118547609.608b089d9b007.png'
  },
  {
    id: 4,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/45afc895638623.5e9c5a9301956.jpg'
  },
  {
    id: 5,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2872d9140523787.6243359a27a38.gif'
  },
  {
    id: 6,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/61ef05146722353.62b52a6eeefa9.jpg'
  },
  {
    id: 7,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/85926a140365439.62409e834808e.png'
  }
];

const SampleCards = React.memo(() =>
  proyects.map((_e, i) => <SampleCard src={_e.image} key={`sampleCard-${i}`} />)
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
        </HorizontalScroll>{' '}
        <Link
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '11%'
          }}
          to="/seemore"
        >
          view alls
        </Link>
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

const SampleCard = styled.img`
  position: relative;
  height: 700px;
  width: 870px;
  background-color: blue;
  margin-right: 8px;
  margin-left: 8px;
  flex-shrink: 0;
`;
