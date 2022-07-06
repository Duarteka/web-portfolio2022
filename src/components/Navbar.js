import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
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
  // const [navLogo, setNavLogo] = useState(false);
  // const [setonScroll] = useState(0);

  // const listenerScrollEvent = () => {
  //   if (window.scrollY > 10) {
  //     setNavLogo(true);

  //     // eslint-disable-next-line no-unused-expressions
  //     window.scrollY < 0 ? setonScroll(1) : setNavLogo('KD');
  //   } else {
  //     setNavLogo(false);
  //   }
  // };

  // window.addEventListener('scroll', listenerScrollEvent);
  // useEffect(() => {
  //   window.addEventListener('scroll', listenerScrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', listenerScrollEvent);
  //   };
  // }, [setonScroll]);

  return (
    <Router>
      <Ul open={props.open}>
        <Logo>
          <LogoUl>Karen Duarte</LogoUl>
        </Logo>

        {navLinks.map((item) => (
          <NavLink
            style={({ isActive }) => (isActive ? {} : {})}
            key={item.id}
            to={item.path}
          >
            <Li>
              <a href={item.path}>{item.text}</a>
            </Li>
          </NavLink>
        ))}
      </Ul>
    </Router>
  );
}
export default Burger;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
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
  position: relative;

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
  height: 30px;
  margin-left: -5rem;
  margin-top: -2rem;

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
  margin: 10px 50px 0;
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

export const Logo = styled.p`
  width: 100%;
  height: 70px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 150px 20px 5%;
  }
`;

export const LogoUl = styled.p`
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
