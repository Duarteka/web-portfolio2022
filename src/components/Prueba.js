/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Prueba() {
  const section = useRef();
  const sectionContent = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const tl = useRef();

  const setupTimeline = () => {
    if (tl.current) tl.current.kill();
    console.log('sectionContent', sectionContent.current.offsetHeight);
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: 'center center',
        end: () => `+=${window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: { ease: 'none' }
    });
    tl.current.fromTo(
      text1.current,
      { y: section.current.offsetHeight, rotation: 1000, x: 0 },
      { y: 0, rotation: 0 }
    );
  };

  useEffect(() => {
    setupTimeline();
    return () => {
      if (tl.current) tl.current.kill();
    };
  }, []);

  return (
    <div className="App">
      <div className="placeholder">
        <h1>Content placeholder</h1>
      </div>
      <div className="slide" ref={section}>
        <div className="slide__image">
          <img src="https://www.fillmurray.com/640/360" alt="" />
        </div>
        <div className="slide__content" ref={sectionContent}>
          <h1 ref={text1}>Hello CodeSandbox</h1>
          <h2 ref={text2}>Start editing to see some magic happen!</h2>
        </div>
      </div>
      <div className="placeholder">
        <h2>Content placeholder</h2>
      </div>
      <div className="placeholder">
        <h2>Content placeholder</h2>
      </div>
    </div>
  );
}
