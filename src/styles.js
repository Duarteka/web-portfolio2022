/* eslint-disable import/no-extraneous-dependencies */

import styled, { keyframes } from 'styled-components';
import { Moon } from '@styled-icons/entypo/Moon';
import theme from 'styled-theming';

export const textColorBringUp = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});

export const backgroundColor = theme('theme', {
  dark: '#F9F5E7',
  light: '#373737'
});

// ---------- BACKGROUND NOISE ---------- //
const noise = keyframes`
0%, 100% { transform:translate(0, 0); }
10% { transform:translate(-5%, -10%); }
20% { transform:translate(-15%, 5%); }
30% { transform:translate(7%, -25%); }
40% { transform:translate(-5%, 25%); }
50% { transform:translate(-15%, 10%); }
60% { transform:translate(15%, 0%); }
70% { transform:translate(0%, 15%); }
80% { transform:translate(3%, 35%); }
90% { transform:translate(-10%, 10%);
`;
export const TextureBackground = styled.div`
  position: relative;

  img {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    opacity: 0.95;
  }

  &:before {
    position: fixed;
    content: '';
    height: 300%;
    width: 300%;
    top: -100%;
    left: -50%;
    pointer-events: none;
    user-select: none;
    background-image: url('https://i.ibb.co/TPYtxRs/texture.png');
    opacity: 0.05;
    animation: ${noise} 8s steps(10) infinite;
  }
`;

// ---------- THEME ---------- //
export const ContainerToggleTheme = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  cursor: pointer;
  top: 0;
  width: 100%;

  z-index: 20000;
`;

// ---------- HEADER CONTENT ---------- //

export const Containerheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-transform: uppercase;
  margin-top: 3rem;
  height: 100vh;
  width: 100vw;

  top: 0;

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
    margin-top: -1%;

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

export const SkillsInfo = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    max-width: 35%;
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    p {
      max-width: 45%;

      margin-right: 7%;
    }
  }
`;
export const MoonLight = styled(Moon)`
  width: 10%;
  color: ${backgroundColor};
  padding: 1%;
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
export const Menus = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: ${backgroundColor};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 3rem;

  &:nth-child(1) {
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    transform: ${(props) =>
      props.open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position:  ${(props) => (props.open ? 'fixed' : 'absolute')};
  align-items: center;
  z-index: 10000; 
  
  top: 0;

  @media (max-width: 678px) {
    width: 100vw;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  margin-top: 0px;
  min-width: 100vw;
  height: 10px;
  margin-left: -5rem;
  margin-top: -1rem;

  text-transform: uppercase;

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${backgroundColor};
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #1f1c3a;
    position: fixed;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(110%)'};
    top: -16px;
    overflow-y: hidden;
    height: 110vh;
    width: 115vw;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: center;
    a {
      font-size: 5rem;
    }
  }
`;
export const Li = styled.li`
  outline: none;
  position: relative;
  margin: 100px 50px 0;
  padding: 5px;
  align-content: flex-end;
  textDecoration: "none",
  textTransform: "uppercase",
  
 
  
  &:after {
    display:block;
    content: '';
    border-bottom: solid 1.5px ${textColorBringUp};  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  

  @media (max-width: 768px) {
    color: #000;
    margin-right: 34px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 0px;
  margin-top: 1%;
  color: ${textColorBringUp};

  @media (max-width: 1250px) {
    margin: 20px 150px 20px 5%;
  }
`;

export const LogoUl = styled.div`
  margin: 30px 600px 20px 15%;
  color: ${textColorBringUp};
  width: 100%;
  letter-spacing: -0.09em;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
  }
`;
