/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function useInViewport(ref, options = {}) {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [changedIntersecting, setChangedIntersecting] = React.useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    setChangedIntersecting(isIntersecting !== entry.isIntersecting);
    setIntersecting(entry.isIntersecting);
  }, options);

  React.useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return { isIntersecting, changedIntersecting };
}
