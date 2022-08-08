/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { navLinks } from '../../dataInfo';
import { TOGGLE_DARKTHEME } from '../redux/actions';

import {
  ContainerToggleTheme,
  Li,
  Logo,
  LogoUl,
  Menus,
  MoonLight,
  Nav,
  StyledBurger,
  TextureBackground,
  Ul
} from '../../styles';
import { AnimatedBackground } from '../AnimatedBackground';

// function LightTheme() {
//   const dispatch = useDispatch();
//   const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });
//   return (
//     <ContainerToggleTheme>
//       <MoonLight onClick={toggledarktheme} />
//     </ContainerToggleTheme>
//   );
// }

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
          <LogoUl>
            <Link to="/">Karen Duarte </Link>
          </LogoUl>
        </Logo>

        {navLinks.map((item) => (
          <Li key={item.id}>
            <Link to={item.path}>{item.text}</Link>
          </Li>
        ))}
      </Ul>
      {/* <LightTheme /> */}
    </Nav>
  );
}
export default Burger;
