/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;

// const TextWrapper = styled.span`
//   display: inline-block;
//   white-space: nowrap;
//   margin-right: -50%;
//   padding-right: 100vw;
//   letter-spacing: -1px;
//   animation: slide 5s linear infinite;
// `;

// const Text1 = styled(motion.span)`
//   display: inline-block;
//   white-space: nowrap;
//   margin-right: 50%;
//   padding-right: 100vw;
//   letter-spacing: -1px;
//   animation: slide1 8s linear infinite;

//   @keyframes slide1 {
//     0% {
//       transform: translateX(10%);
//       animation-delay: 20s;
//     }
//     100% {
//       transform: translateX(0%);
//     }
//   }
// `;

// const Text2 = styled(motion.span)`
//   display: inline-block;
//   white-space: nowrap;
//   margin-right: -100%;
//   padding-right: 100vw;
//   letter-spacing: -1px;
//   animation: slide2 8s linear infinite;

//   @keyframes slide2 {
//     0% {
//       transform: translateX(-50%);
//     }
//     100% {
//       transform: translateX(0%);
//     }
//   }
// `;

function InfiniteTextFrame({ text }) {
  // const text = `${h1}${h2}`.replace(/\s/g, '');

  return (
    <Marquee
      gradient={false}
      speed={80}
      pauseOnHover
      pauseOnClick
      delay={0}
      play
      direction="left"
    >
      <h1>{text}</h1>
    </Marquee>
  );
}

export default InfiniteTextFrame;
