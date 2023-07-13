/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';

import { gsap } from 'gsap';
import { backgroundColor, textColor, textColorBringUp } from '../../styled';
import { TOGGLE_DARKTHEME } from '../utils/redux/actions';
import { MoonLight } from '../icons/Icons';

// function Burger() {
//   const [open, setOpen] = useState(false);
//   const toggle = () => setOpen(!open);
//   const hide = () => setOpen(false);

//   return (
//     <>
//       <StyledBurger open={open} onClick={toggle}>
//         <Menus open={open} />
//         <Menus open={open} />
//         <Menus open={open} />
//       </StyledBurger>
//       {/* <RightNav open={open} hide={hide} /> */}
//     </>
//   );
// }

function Navbar(props) {
  const dispatch = useDispatch();
  const toggledarktheme = () => dispatch({ type: TOGGLE_DARKTHEME });

  const navRef = useRef(null);

  // const prevScrollY = useRef(0);

  const [showNav, setShowNav] = useState(true);
  const scrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const isScrollingUp = currentScrollY < scrollY.current;

      setShowNav(isScrollingUp || currentScrollY === 0);

      scrollY.current = currentScrollY;

      const navElement = navRef.current;

      if (showNav) {
        gsap.to(navElement, { y: 0, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(navElement, { y: '-100%', duration: 0.5, ease: 'power2.out' });
      }

      if (currentScrollY > 0) {
        gsap.to(navRef.current, { backdropFilter: 'blur(5px)', duration: 0.2 });
      } else {
        gsap.to(navRef.current, { backdropFilter: 'none', duration: 0.2 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNav]);

  // useEffect(() => {
  //   const navElement = navRef.current;

  //   const handleAnimation = () => {
  //     if (showNav) {
  //       gsap.to(navElement, { y: 0, duration: 0.5, ease: 'power2.out' });

  //       // Agregamos una verificación aquí para asegurarnos de que la página se ha desplazado
  //       // antes de aplicar el efecto de desenfoque.
  //       if (window.pageYOffset > 0) {
  //         gsap.to(navRef.current, {
  //           backdropFilter: 'blur(5px)',
  //           duration: 0.2
  //         });
  //       } else {
  //         gsap.to(navRef.current, { backdropFilter: 'none', duration: 0.2 });
  //       }
  //     } else {
  //       gsap.to(navElement, { y: '-100%', duration: 0.5, ease: 'power2.out' });
  //       gsap.to(navRef.current, { backdropFilter: 'none', duration: 0.2 });
  //     }
  //   };

  //   handleAnimation();
  // }, [showNav]);

  return (
    <Nav ref={navRef} className={showNav ? 'show' : 'hide'}>
      <Logo>
        <Link activeClass="active" to="header" spy smooth>
          Karen Duarte
        </Link>
      </Logo>

      <ul>
        <li>
          <Link to="work" spy smooth>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" spy smooth>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" spy smooth>
            Contact
          </Link>
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
    color: ${textColor};
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

const LogoContainer = styled.div`
  z-index: 9999;
  display: inline-flex;
  widht: auto;
  @media (max-width: 768px) {
  }
`;
