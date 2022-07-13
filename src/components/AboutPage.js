/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import theme from 'styled-theming';

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});

function AboutPage() {
  return (
    <div>
      <div>
        <h2> about</h2>
        <h1 style={{ fontFamily: 'Lemonada' }}>HI!</h1>
      </div>
      <p>
        amet, vitae lorem. malesuada cursus gravida hendrerit sit at nisl.
        lorem. sit urna. ex eget porta lorem. non sed odio Cras In nulla, eget
        turpis vel malesuada vel tincidunt non.
        <br />
        <br />
        malesuada Nullam hendrerit malesuada hendrerit id eget nisl.sapien
        lacus, Nullam lobortis, scelerisque diam hendrerit vitae viverra urna
      </p>

      <div>
        <h2>WHAT I AM PASSIONATE ABOUT</h2>
        <div>
          <h3>INDUSTRY</h3>
          <ul>
            <li>TECHNOLLOGY</li>
            <li>DESIGN</li>
            <li>WEBSITES</li>
            <li>ANIMATION</li>
          </ul>
        </div>
        <div>
          <h3>LIFE STYLE</h3>
          <ul>
            <li>FAMILY</li>
            <li>ASTHANGA YOGA </li>
            <li>VEGETARIAN GASTRONOMY</li>
            <li>NATURE / HEALTY</li>
          </ul>
        </div>
        <div>
          <h3>CULTURE</h3>
          <ul>
            <li>SCIFI</li>
            <li>LITERATURE</li>
            <li>POP ART</li>
            <li>COMICS</li>
          </ul>
        </div>
      </div>
      <div>
        <h2> TRY TO BE MY BEST VERSION</h2>

        <h3>
          Junior Frontend Developer, graduated in Graphic Design. Master in web
          design and development Specialized in UX-UI, I’m teamwork to obtain
          the best result in usability and aesthetics by implementing micro
          animations that interact with the user in a simple and direct
          environment.
        </h3>
      </div>
    </div>
  );
}
const ContainerAboutPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  margin-top: 3rem;
  height: 100vh;
  padding: 2%;
  widht: 100vh;
  poistion: relative;

  @media (max-width: 768px) {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContaineerInterests = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  ul {
    list-style-type: none;
  }
  div {
  }

  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ;
    color: ${textColor};
  }
`;
const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default AboutPage;
