/* eslint-disable import/no-extraneous-dependencies */

import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';

import theme from 'styled-theming';

export const textColorBringUp = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});
export const textColorBringUpReverse = theme('theme', {
  light: '#F9F586',
  dark: '#D34C7F'
});

export const backgroundColor = theme('theme', {
  dark: '#373737',
  light: '#F9F5E7'
});
export const textColor = theme('theme', {
  light: '#373737',
  dark: '#F9F5E7'
});

// ---------- BACKGROUND NOISE ---------- //
const noise = keyframes`
0% {
  transform: translate(0%, -50%);
}
10% {
  transform: translate(-5%, 5%);
}
20% {
  transform: translate(-15%, -15%);
}
30% {
  transform: translate(7%, 2%);
}
40% {
  transform: translate(-5%, -5%);
}
50% {
  transform: translate(-15%, 15%);
}
60% {
  transform: translate(3%, -7%);
}
70% {
  transform: translate(5%, 5%);
}
80% {
  transform: translate(-15%, -15%);
}
90% {
  transform: translate(-10%, 10%);
}
100% {
  transform: translate(0%, -50%);
}
`;
export const TextureBackground = styled.div`
  position: absolute;

  img {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    opacity: 0.95;
  }

  &:before {
    position: fixed;
    content: '';
    height: 300%;
    width: 300%;
    top: -100%;
    left: -50%;
    pointer-events: none;
    user-select: none;
    background-image: url('https://i.ibb.co/p3nbZvS/background-Texture.jpg');
    opacity: 0.07;
    animation: ${noise} 8s steps(10) infinite;
  }
`;

// ---------- THEME ---------- //

// ---------- HEADER CONTENT ---------- //

export const animateHeadingTwo = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.heading-two',
      start: 'top 70%'
    }
  });

  tl.from('.heading-two', {
    yPercent: 200,
    duration: 0.8
  });
};
export const animateHeaderElements = (target) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.headings-section',
      start: 'top 99%',
      scrub: 1
    }
  });

  tl.to(target, {
    yPercent: -100,
    duration: 0.4
  });
};
