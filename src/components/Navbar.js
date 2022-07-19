import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'styled-theming';

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});

const navLinks = [
  {
    id: 1,
    text: 'Projects',
    path: '/home'
  },
  {
    id: 2,
    text: 'About',
    path: '/about'
  },
  {
    id: 3,
    text: 'Contact',
    path: '/contact'
  }
];
export const backgroundColor = theme('theme', {
  dark: '#F9F5E7',
  light: '#373737'
});

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Menus open={open} />
        <Menus open={open} />
        <Menus open={open} />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
}

export function RightNav(props) {
  return (
    <Nav style={({ isActive }) => (isActive ? {} : {})}>
      <Ul open={props.open}>
        <Logo>
          <LogoUl>Karen Duarte</LogoUl>
        </Logo>

        {navLinks.map((item) => (
          <Li key={item.id}>
            <Link to={item.path}>{item.text}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
}
export default Burger;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
export const Menus = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: #000;
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
 
  align-items: center;
  position: absolute;
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
  color: "#ffff",
  background-color: #fff;
 
  
  &:after {
    display:block;
    content: '';
    border-bottom: solid 1.5px ${textColor};  
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

  @media (max-width: 1250px) {
    margin: 20px 150px 20px 5%;
  }
`;

export const LogoUl = styled.div`
  margin: 30px 600px 20px 15%;
  color: ${textColor};
  width: 100%;
  letter-spacing: -0.09em;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
  }
`;
