import React from 'react';
import { useSpring, animated } from 'react-spring';

import { useIntersection } from '../utils/useIntersection';

export function Slide({ children }) {
  const [ref, entry] = useIntersection({ threshold: [0, 0.25, 0.5, 0.75, 1] });

  const props = useSpring({
    to: {
      opacity: entry.intersectionRatio > 0.24 ? 1 : 0,
      transform:
        entry.intersectionRatio > 0.24 ? 'translateX(0%)' : 'translateX(50px)'
    },
    from: { opacity: 0, transform: 'translateX(30px)' },
    config: { mass: 1, tension: 280, friction: 50 }
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}
