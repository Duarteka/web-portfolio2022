/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';

const DowloadCVBasedIn = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  width: 100vw;
  border-center: solid 2px;
  border-bottom: solid 2px;
  position: relative;
  justify-content: space-between;
  background-color: ${backgroundColor};

  .basedin {
    margin-right: 17rem;
    color: ${textColorBringUp};
  }

  .borderCenter {
    width: 2px;
    background-color: ${textColor};
    height: 30vh;
    transform: translate(50px, 0px);
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin-left: 17rem;
`;
const ButtonDownloadContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;

  transition-delay: 0.6s;
  overflow: hidden;
  border-radius: 25px;
  border: solid 2px ${textColor};
  margin: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${textColor};
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(0.5);
    transition: all 0.6s ease;
    border: solid 2px ${textColor};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${backgroundColor};
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all 0.6s ease;
  }

  span {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease;

    &:first-child {
      color: ${backgroundColor};
      transform: translateY(60px);
    }

    &:last-child {
      transform: translateY(-20px);

      color: ${textColor};
      transform: translateY(0);
    }
  }

  &:hover {
    background: ${backgroundColor};
    transition: background 0.2s linear;
    transition-delay: 0.6s;

    &:after {
      border-radius: 0 0 50% 50%;
      transform: translateY(-100%) scaleY(0.5);
      transition-delay: 0;
    }

    &:before {
      border-radius: 0;
      transform: translateY(0) scaleY(1);
      transition-delay: 0.6;
    }

    span {
      &:first-child {
        transform: translateY(0);
      }

      &:last-child {
        transform: translateY(20px);
        opacity: 0;
      }
    }
  }
`;
export default function DowloadCV() {
  return (
    <DowloadCVBasedIn>
      <div>
        <ButtonWrapper className="buttonWrapper">
          <div>
            <ButtonDownloadContainer href="#" target="_blank" className="boton">
              <span>DOWNLOAD CV</span>
              <span>DOWNLOAD CV</span>
            </ButtonDownloadContainer>
          </div>
        </ButtonWrapper>
      </div>
      <div className="borderCenter" />
      <div className="basedin">
        <span>
          <h4>Based in Madrid</h4>
        </span>
      </div>
    </DowloadCVBasedIn>
  );
}
