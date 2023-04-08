/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const WordWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
`;

const Word = styled.span`
  display: block;
  opacity: 0;
  transform: translate3d(0, 30px, 0);
`;

const SplitText = React.forwardRef(({ text }, ref) => {
  const words = text.split(' ');

  const [tl] = React.useState(gsap.timeline({ paused: false }));

  const textItem = React.useRef([]);

  useEffect(() => {
    tl.TweenMax.staggerTo(
      textItem.current,
      1.5,
      {
        y: 0,
        opacity: 1,
        delay: 1.5
      },
      0.05
    );
  }, [tl.TweenMax]);

  return (
    <div>
      {words.map((word, i) => (
        <WordWrapper key={i}>
          <Word ref={(e) => (textItem.current[i] = e)}>
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </Word>
        </WordWrapper>
      ))}
    </div>
  );
});

export default React.memo(SplitText);
