/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line import/no-cycle
import styled from 'styled-components';

import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import HandPointingCloud from '../../assets/hand-pointing.webp';
import AnimatedInViewComponent from '../content/BlinkAnimation';

export default function Footer({ footerBackgroundColor }) {
  return (
    <footer>
      <ContainerFooter backgroundColor={footerBackgroundColor}>
        <p>
          Design and <br />
          developed by{' '}
          <strong>
            <span className="karenduarteFooter">Karen Duarte</span>
          </strong>
        </p>
        <p> </p>
        <p>© 2023 </p>{' '}
        <AnimatedInViewComponent>
          <a href="#">
            <img src={HandPointingCloud} alt="go to top" className="goToTop" />
          </a>
        </AnimatedInViewComponent>
      </ContainerFooter>
    </footer>
  );
}
const ContainerFooter = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundColor || textColor};
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-weight: 600 !important;
  height: 22vh;

  footer{
    border-top: solid 2px;
  }



  .karenduarteFooter{
    color: ${textColorBringUp};
    font-weight: 200;
  }

  img {
    position: absolute;
    top: 0;
    width: 10%;
    right: 0;
    object-fit: cover;
    transform: translate(-1rem,-8rem);
  }

  p {
    margin: 0 5rem;
    color: ${backgroundColor};
  }
  @media (max-width: 576px) {
    max-height: 15vh;
    position: relative;
    p {
      font-size: 0.7rem;
    }

    img {
      position: absolute;
      top: 0;
      width: 20%;
      right: 0;
      object-fit: cover;
      z-index: 
      height: 100%;
      transform: translate(-2rem,-4rem);
     
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
      border-top: solid 2px ${backgroundColor};
    }
  }
`;
