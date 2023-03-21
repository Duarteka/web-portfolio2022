/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { TOGGLE_DARKTHEME } from '../utils/redux/actions';
import { MoonLight } from '../icons/Icons';

function Burger() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const hide = () => setOpen(false);

  return (
    <>
      <StyledBurger open={open} onClick={toggle}>
        <Menus open={open} />
        <Menus open={open} />
        <Menus open={open} />
      </StyledBurger>
      <RightNav open={open} hide={hide} />
    </>
  );
}

export function RightNav(props) {
  const dispatch = useDispatch();
  const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <Nav>
          <LogoContainer>
            <Logo>
              <Link onClick={props.hide} to="/">
                Karen Duarte{' '}
              </Link>
            </Logo>
          </LogoContainer>
          <Link to="/" onClick={toggledarktheme}>
            <MoonLight />
          </Link>

          <Ul open={props.open}>
            <Li onClick={props.hide}> </Li>
            <Li>
              <Link to="/seemore">Projects</Link>
            </Li>
            <Li>
              <Link to="/about">About</Link>
            </Li>
            <Li>
              <Link to="/contact">Contact</Link>
            </Li>
          </Ul>
        </Nav>
      </div>
    </div>
  );
}
export default Burger;

const Nav = styled.nav`
  display: flex;
  align-content: center;
  max-width: 95vw;
  height: 14vh;
  top: 0;
  align-content: center;
  z-index: 20;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 2rem;

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${textColor};
    padding: 0 15px;
    white-space: nowrap;
    line-height: 1;
    height: 3rem;
    display: inline-flex;
    padding: 0 1rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }

  @media (max-width: 668px) {
    max-width: 100vw;
    display: flex;
  }
`;

const Ul = styled.ul`
  list-style: none;
  text-transform: uppercase;
  -ms-flex-align: center;
  margin: 0;
  padding: 1rem 0;
  justify-content: flex-end;

  img,
  svg {
    vertical-align: middle;
  }
  @media (max-width: 668px) {
    flex-flow: column nowrap;
    position: fixed !important;
    align-items: center;

    z-index: 10;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(110%)'};
    top: -16px;
    overflow-y: hidden;
    margin: 0;
    height: 230vh;
    width: 110vw;
    transition: transform 0.3s ease-in-out;
    font-size: 3rem;

    justify-content: center;
    &:after {
      content: '';
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
      z-index: 0;
      backdrop-filter: blur(70px);
    }
    a {
      font-size: 3rem;
      z-index: 30;
    }
  }
`;
const Li = styled.li`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
}
  &:after {
    display:block;
    content: '';
    border-bottom: solid 1.5px ${textColorBringUp};  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    margin-right: 5%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  
  @media (max-width: 668px) {
    display:block;
    margin-top: 10rem;
    
  }
`;

const StyledBurger = styled.div`
  position: fixed;
  top: 2.1rem;
  transform: translate(1rem, 0px);
  z-index: 200;
  cursor: pointer;
  min-height: 4.8vh;
  display: none;

  @media (max-width: 668px) {
    display: flex;
    justify-self: center;
    justify-content: space-around;
    flex-flow: column nowrap;
    min-height: 3vh;
    top: 2.3rem;
    margin: 0;
    right: 70px;
  }
`;

const Menus = styled.div`
  min-width: 2rem;
  min-height: 0.25rem;
  margin: 2%;
  background-color: ${textColor};
  border-radius: 10px;

  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 3rem;
  z-index: 20001;
  flex-direction: column;

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

const Logo = styled.div`
  letter-spacing: -0.09em;
}

@media (max-width: 668px) {}
`;

const LogoContainer = styled.div`
  z-index: 9999;
  display: inline-flex;
  widht: auto;
  @media (max-width: 768px) {
  }
`;
