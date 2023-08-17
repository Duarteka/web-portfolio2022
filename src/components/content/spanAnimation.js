import { gsap } from 'gsap';

export const spanAnimation = (devs2Ref, buttonDownloadRef, arrowIconRef) => {
  const devs2 = devs2Ref.current.querySelectorAll('span');
  gsap.fromTo(
    devs2,
    {
      opacity: 0,
      x: (i) => (i + 1) * 50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.4,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: devs2Ref.current,
        start: 'top 80%',
        marks: true
      }
    }
  );

  gsap.fromTo(
    buttonDownloadRef.current,
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: buttonDownloadRef.current,
        start: 'top 80%'
      }
    }
  );

  gsap.fromTo(
    arrowIconRef.current,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: arrowIconRef.current,
        start: 'top 85%'
      }
    }
  );
};
