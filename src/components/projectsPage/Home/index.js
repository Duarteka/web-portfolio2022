/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import lerp from 'lerp';
import { useNavigate } from 'react-router-dom';
import HomeTitles from './CircleSlider/HomeTitles';
import CircleSlider from './CircleSlider/CircleSlider';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function ProjectsCar() {
  const history = useNavigate();
  const scroll = useRef();
  const shaderScroll = useRef(0);
  const distance = useRef(0);

  const scrolling = useCallback(() => {
    const rounded = Math.round(distance.current);
    const diff = rounded - distance.current;
    const goTo =
      distance.current + Math.sign(diff) * Math.abs(diff) ** 0.5 * 0.005;
    distance.current = clamp(goTo, 0, 5);
    shaderScroll.current = lerp(shaderScroll.current, 0, 0.025);
    requestAnimationFrame(() => scrolling());
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, [scrolling]);

  const onWheel = (e) => {
    distance.current += clamp(e.deltaY, -150, 150) * 0.0007;
    shaderScroll.current = clamp(e.deltaY, -25, 25);
    // console.log('aquiiiiiiiiii', distance.current);
    // window.scrollBy(0, -e.deltaY);
  };
  function onPan(event, info) {
    const delta = info.delta.x;
    return (
      (distance.current += delta * 0.003),
      (shaderScroll.current = clamp(delta * 4, -25, 25))
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="app"
      refs={scroll}
      onWheel={onWheel}
      onPan={onPan}
    >
      <HomeTitles distance={distance} />

      <CircleSlider
        distance={distance}
        shaderScroll={shaderScroll}
        history={history}
        ref={scroll}
      />
    </motion.div>
  );
}

export default ProjectsCar;
