/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'styled-theming';
import '../index.css';
import { useTrail, a } from 'react-spring';
import Burguer from './Navbar';
import { Slide } from './slideAnimation/Slide';

export const backgroundColor = theme('theme', {
  dark: '#F9F5E7',
  light: '#373737'
});
const socialMidia = [
  {
    id: 1,
    text: 'linkedin',
    path: '/https://www.linkedin.com/in/duarte-karen/'
  },
  {
    id: 2,
    text: 'instagram',
    path: '/about'
  },
  {
    id: 3,
    text: 'github',
    path: '/contact'
  },
  {
    id: 4,
    text: 'medium',
    path: '/contact'
  }
];

// eslint-disable-next-line no-unused-vars
function Trail({ open, children }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 250 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    height: open ? 100 : 0,
    from: { opacity: 0, x: 40, height: '100vh' }
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

function HeaderContent() {
  const [open, set] = useState(true);
  return (
    <>
      <Burguer />
      <Containerheader onClick={() => set((state) => !state)}>
        <h1>
          Front
          <span>end </span>
          <br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Developer
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '-8rem'
          }}
        >
          <h4>
            <span>and</span>
            graphic Designer
          </h4>
        </div>
        <AboutmeContent>
          <p>
            JUNIOR FULLSTACK DEVELOPER ESPECIALIZED IN FRONTEND &
            MULTIDISCIPLINARY DESIGNER UI & UX
          </p>
          <p>Based in Madrid</p>
        </AboutmeContent>
      </Containerheader>
    </>
  );
}

const Containerheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  margin-top: 3rem;
  height: 100vh;
  position: absolute;

  @media (max-width: 768px) {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    align-self: center;
    font-size: 11rem;
    line-height: 130px;
    letter-spacing: -0.1em;

    @media (max-width: 768px) {
      font-size: 4.5rem;
      line-height: 35px;
      letter-spacing: -0.1em;
      margin-top: 4%;
      padding: 2%;
    }
  }
  h1 span {
    font-family: 'Lemonada';
    font-weight: 100;
    margin-left: -3%;
    text-transform: lowercase;
  }
  h4 {
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 9rem;
      align-self: center;
      margin-right: 15%;
    }
  }
  h4 span {
    font-family: 'Lemonada';
    font-size: 2rem;
    margin-left: -3%;
    text-transform: lowercase;
  }
`;

const AboutmeContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;

  p {
    max-width: 24%;
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    p {
      max-width: 45%;

      margin-right: 7%;
    }
  }
`;
const ContainerSocialmidia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    min-width: 100vw;
  }
  a {
    text-decoration: none;
    margin: 5px;
    color: ${backgroundColor};
  }
`;

export default HeaderContent;
