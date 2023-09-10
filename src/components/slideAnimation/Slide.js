/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSpring, animated, useTrail, a } from 'react-spring';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useIntersection } from '../utils/useIntersection';

const TrailMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrailText = styled(a.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const InnerDiv = styled(a.div)`
  overflow: hidden;
`;

export function Trail({ open, children, ...props }) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2500, friction: 500 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    height: inView ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <div ref={setRef} className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((xVal) => `translate3d(0,${xVal}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export function Slide({ children }) {
  const [ref, entry] = useIntersection({ threshold: [0, 0.25, 0.5, 0.75, 1] });

  const props = useSpring({
    to: {
      opacity: entry.intersectionRatio > 0.24 ? 1 : 0,
      transform:
        entry.intersectionRatio > 0.24 ? 'translateY(0%)' : 'translateY(50px)'
    },
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { mass: 1, tension: 280, friction: 50 }
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}
