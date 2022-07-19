import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});
function Work() {
  return (
    <ContainerBrand>
      <BrandKa>
        <h1>
          ready
          <br /> to <span>be</span>
          <br /> done
        </h1>
      </BrandKa>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',

          maxWidth: '50%'
        }}
      >
        <div style={{ display: 'flex' }}>
          <p>
            I take my work schedule and my productivity hours very seriously, I
            want to understand every aspect of the project I am working on.
            looking for an effective and logical way to implement.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '2rem',
                alignItems: 'center'
              }}
            >
              <h3>01.INTERACTION</h3>

              <p>
                Using information gathered, we ll propose a creative solution
                with script and visual frames. This is the concepting step.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '2rem',
                alignItems: 'center'
              }}
            >
              <h3>02.PERFORMANCE</h3>
              <p>
                We ll produce the hero animation with illustration, animation
                and audio. This is the creating step.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '2rem',
                alignItems: 'center'
              }}
            >
              <h3>03.TEAMWORK</h3>
              <p>
                We ll produce cutdowns and still assets in various formats for
                delivery. This is the delivery step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerBrand>
  );
}

export default Work;

const ContainerBrand = styled.div`
  margin-top: 10rem;
  display: flex;
  height: 120vh;

  justify-content: space-around;
  p {
    width: 60%;
  }
`;

const BrandKa = styled.div`
  display: flex;
  font-weight: 100;
  margin-left: 5%;
  -webkit-text-stroke: 1px ${textColor};
  color: transparent;
  font-size: 15rem;
  margin-top: -13rem;

  h1 {
    text-transform: lowercase;
    font-size: 15rem;
    line-height: 150px;
  }

  span {
    text-transform: lowercase;
    color: ${textColor};
  }
`;
