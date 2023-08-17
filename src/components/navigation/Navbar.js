/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { TOGGLE_DARKTHEME } from '../utils/redux/actions';
import { MoonLight } from '../icons/Icons';

function Navbar(props) {
  const dispatch = useDispatch();
  const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });
  const isSpecialComponentVisible = useSelector(
    (state) => state.preferences.isSpecialComponentVisible
  );

  const [isTop, setIsTop] = useState(true);

  const navRef = useRef(null);

  // const prevScrollY = useRef(0);

  const [showNav, setShowNav] = useState(true);
  const scrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const isScrollingUp = currentScrollY < (scrollY.current || 0);

      setShowNav(isScrollingUp || currentScrollY === 0);
      setIsTop(currentScrollY === 0);

      scrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNav]);

  useEffect(() => {
    const navElement = navRef.current;

    if (showNav) {
      gsap.to(navElement, { y: 0, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(navElement, { y: '-100%', duration: 0.5, ease: 'power2.out' });
    }

    if (scrollY.current > 0) {
      gsap.to(navRef.current, { backdropFilter: 'blur(5px)', duration: 0.2 });
    } else {
      gsap.to(navRef.current, { backdropFilter: 'none', duration: 0.2 });
    }
  }, [showNav]);

  return (
    <Nav
      ref={navRef}
      isTop={isTop}
      className={showNav ? 'show' : 'hide'}
      isSpecialComponentVisible={isSpecialComponentVisible}
    >
      <Logo>
        <Link to="/">Karen Duarte</Link>
      </Logo>

      <ul>
        <li>
          <Link to="/seemore">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link to="/" onClick={toggledarktheme}>
        <MoonLight />
      </Link>
    </Nav>
  );
}
export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 1.5rem;
  z-index: 20;
  cursor: pointer;
  position: fixed;
  top: 0;
  border-bottom: solid 2px
    ${(props) => (props.isTop ? textColor : backgroundColor)};
  background-color: ${(props) =>
    props.isTop ? backgroundColor : 'transparent'};
  transition: ease 0.1s;

  @media (max-width: 576px) {
    margin: 0;
    padding: 1;

    li {
      margin: 1rem 0;
    }

    ul {
      display: flex;
      justify-content: center;
      position: relative;
    }
    a {
      padding: 0 0.5rem !important;
    }
  }

  a {
    color: ${(props) =>
      props.isSpecialComponentVisible ? backgroundColor : textColor};
    padding: 0 2rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    width: 100%;
  }

  li {
    text-decoration: none;
    margin: 0.5rem 0;
  }
  img,
  svg {
    vertical-align: middle;
  }
`;

const Logo = styled.div`
  letter-spacing: -0.09em;
  width: 100%;
  display: flex;
  a {
    width: 100%;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;
