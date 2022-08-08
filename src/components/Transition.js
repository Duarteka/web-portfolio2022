import React, { useRef, useEffect } from 'react';

import { Power4 } from 'gsap';

function Transition({ timeline }) {
  const trans = useRef(null);

  useEffect(() => {
    timeline.to(trans.current, {
      duration: 6,
      y: 2500,
      ease: Power4.easeOut
    });
  });
  return (
    <div>
      <div className="transition-effect" ref={trans} />
    </div>
  );
}

export default Transition;
