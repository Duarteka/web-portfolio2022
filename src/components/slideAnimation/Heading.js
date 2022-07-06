import React from 'react';
import { useSpring, animated } from 'react-spring';

import { useIntersection } from '../useIntersection';

export function Heading({ children, as }) {
  const [ref, entry] = useIntersection({ threshold: 1 });

  const props = useSpring({
    to: {
      opacity: entry.intersectionRatio > 0.9 ? 1 : 0,
      transform:
        entry.intersectionRatio > 0.9 ? 'translateX(0%)' : 'translateX(30px)'
    },
    from: { opacity: 0, transform: 'translateX(30px)' }
  });

  switch (as) {
    case 'h2':
      return (
        <animated.h2 ref={ref} style={props}>
          {children}
        </animated.h2>
      );
    default:
      return (
        <animated.h1 ref={ref} style={props}>
          {children}
        </animated.h1>
      );
  }
}
