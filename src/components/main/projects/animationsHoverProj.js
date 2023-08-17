import { gsap } from 'gsap';

export const animateHoverEnter = (element, textElementId) => {
  const image = element.querySelector('img');
  gsap.to(`#${textElementId}`, {
    color: '#D34C7F',
    duration: 0.5
  });
  gsap.to(image, {
    duration: 0.7,
    opacity: 1,
    y: 0,
    scale: 1.2,
    ease: 'power2.out'
  });
};

export const animateHoverLeave = (element, textElementId) => {
  const image = element.querySelector('img');
  gsap.to(`#${textElementId}`, {
    duration: 0.5,
    yoyo: true
  });
  gsap.to(image, {
    duration: 0.7,
    opacity: 0,
    y: '100%',
    ease: 'power2.out',
    scale: 1
  });
};
