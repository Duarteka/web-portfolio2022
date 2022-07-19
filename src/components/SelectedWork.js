/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});
const ArrowDownIcon = styled(ArrowDown)`
  height: 90px;
  margin-top: 5%;
  color: ${textColor};
`;
const sliderData = [
  'https://images.unsplash.com/photo-1611660246350-e206e04bd966?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1611774017274-ec655f187ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
  'https://images.unsplash.com/photo-1611702700332-9af2ba35887c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1611764650125-5e4be2463de5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  'https://images.unsplash.com/photo-1611757790630-79892f4bce93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
];
gsap.registerPlugin(ScrollTrigger, ScrollTo);
export default function SelectedWork() {
  const [state, setState] = useState(true);
  const text = useRef({ value: 1 });
  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: '#section3',
            scrub: 2,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -100);
              gsap.to('#section3 h1', { skewX: -skew });
            }
          }
        }
      })
      .fromTo(
        '#section3 h1:first-of-type',
        {
          xPercent: 100
        },
        { xPercent: -50 }
      )
      .fromTo(
        '#section3 h1:nth-of-type(2)',
        {
          xPercent: -100
        },
        { xPercent: 50 }
      );
  }, [text]);

  return (
    <>
      <div
        id="section3"
        // onMouseMove={(e) => {
        //   const dim = document
        //     .querySelector('.hiddenSection')
        //     .getBoundingClientRect();
        //   const mouseY = e.clientY - dim.top;
        //   gsap.set('.hiddenSection', {
        //     clipPath: `circle(10% at ${e.clientX}px ${mouseY}px)`
        //   });
        // }}
        className="largeContent"
      >
        <div className="hiddenSection">
          <h1>Selected </h1> <h1> Projects</h1>
        </div>
        <h1>Selected </h1> <h1> Projects</h1>
      </div>
      <div className="containerDescriptionProjects">
        <p>
          Think twice, design once. I work with you to make a design that not
          only looks impressive but performs. I will spend as much time as
          needed to refine a concept to ensure it s just right. My mission is to
          create an online presence for my clients that will withstand the test
          of time.
        </p>
      </div>
    </>
  );
}
