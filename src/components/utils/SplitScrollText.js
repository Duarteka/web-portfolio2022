/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Height } from 'styled-icons/material';

function ScrollTitle({ text }) {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <Container>
      <Title ref={ref} visible={visible}>
        {visible &&
          text.split('').map((char, index) => (
            <span key={index} style={{ '--i': index }}>
              {char}
            </span>
          ))}
      </Title>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.1s ease;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;

  span {
    opacity: 0;
    animation: fadeIn 0.2s ease forwards;
    animation-delay: calc(var(--i) * 0.1s);
    display: inline-block;
    transition: ease-in-out 0.1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default ScrollTitle;
