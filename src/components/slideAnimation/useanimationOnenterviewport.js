import gsap from 'gsap';
import React from 'react';
import useInViewport from './useInViewport';

const useAnimationOnEnterViewport = ({
  onEnter,
  onLeave,
  ioOptions,
  onlyOnce
}) => {
  const containerRef = React.useRef();
  const elementRef = React.useRef();
  const { isIntersecting, changedIntersecting } = useInViewport(
    containerRef,
    ioOptions || {}
  );

  const [hasRun, setHasRun] = React.useState(false);

  React.useEffect(() => {
    console.log('useEffect');
    if (hasRun && onlyOnce) {
      console.log('Already run');
      return;
    }
    if (isIntersecting && changedIntersecting && onEnter) {
      gsap.to(elementRef.current, onEnter);
      setHasRun(true);
    }
    if (isIntersecting && changedIntersecting && onLeave) {
      gsap.to(elementRef.current, onLeave);
      setHasRun(true);
    }
  }, [
    changedIntersecting,
    onEnter,
    onLeave,
    isIntersecting,
    hasRun,
    elementRef,
    onlyOnce
  ]);

  return [containerRef, elementRef];
};

export default useAnimationOnEnterViewport;
