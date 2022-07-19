/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollTo);

const sliderData = [
  'https://images.unsplash.com/photo-1611660246350-e206e04bd966?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1611774017274-ec655f187ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
  'https://images.unsplash.com/photo-1611702700332-9af2ba35887c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1611764650125-5e4be2463de5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  'https://images.unsplash.com/photo-1611757790630-79892f4bce93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
];

export default function App() {
  const text = useRef({ value: 1 });

  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            trigger: '#section1',
            scrub: 1,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -150);
              gsap.set('#section1 h1', {
                skewX: skew
              });
            }
          }
        }
      })
      .from('#section1 svg', {
        y: 800
      })
      .from('#section1 h1', {
        y: 1600
      })
      .from('#section1 img', { scale: 1.6 });

    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            anticipatePin: 1,
            trigger: '#section2',
            scrub: 0.5,
            pin: true
          }
        }
      })
      .from('#section2 .clip', {
        width: 0,
        left: '100%'
      })
      .to('#section2 .bgimg', {
        width: 0
      });

    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            anticipatePin: 1,
            trigger: '#section4',
            scrub: 0.5,
            pin: true
          }
        }
      })
      .from('#section4 .clipSecond', {
        clipPath: 'inset(0 0 0 100%)'
      })
      .from('#section4 img', {
        scale: 1.2
      });

    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: '#section3',
            scrub: 2,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-20, 20);
              const skew = clamp(self.getVelocity() / -100);
              gsap.to('#section3 h1', { skewX: -skew });
            }
          }
        }
      })
      .fromTo(
        '#section3 h1:first-of-type',
        {
          xPercent: 100
        },
        { xPercent: -50 }
      )
      .fromTo(
        '#section3 h1:nth-of-type(2)',
        {
          xPercent: -100
        },
        { xPercent: 50 }
      );

    gsap
      .timeline({
        defaults: {
          scrollTrigger: {
            trigger: '#section5',
            scrub: 0.5,
            pin: true,
            onUpdate: (self) => {
              const clamp = gsap.utils.clamp(-2, 2);
              const skew = clamp(self.getVelocity() / -300);
              gsap.to('#section5 .sliderImg', { skewX: -skew });
            }
          }
        }
      })
      .to('#section5 .slider', {
        x: -(sliderData.length - 3) * (window.innerWidth / 3)
      })
      .to('#section5 .slider .sliderImg', {
        scale: 1.2
      });

    gsap
      .timeline({
        scrollTrigger: {
          pin: true,
          pinSpacing: false,
          trigger: '#imageTextSection'
        }
      })
      .from('#imageTextSection img', {
        scale: 1.2,
        scrollTrigger: {
          start: 'top 50%',
          end: 'bottom 50%',
          trigger: '#imageTextSection',
          scrub: 1,
          onUpdate: () => {
            setState(text.current.value);
          }
        }
      })
      .to(text.current, { value: 4, roundProps: 'value' })
      .to('#imageTextSection .textWrapper h1', {
        clipPath: 'inset(0% 0% 0% 0%)',
        stagger: 0.2,
        scrollTrigger: {
          start: 'top 50%',
          end: '50% 50%',
          trigger: '#imageTextSection',
          scrub: 1
        }
      })
      .call(() => console.log(text));
  }, [text]);
  const [state, setState] = useState(true);
  return (
    <div className="App">
      {/* <div className="buttonWrapper">
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: {
                y: '#section2'
              },
              duration: 1
            });
          }}
        >
          Scroll To second
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: {
                y: '#section3'
              },
              duration: 1
            });
          }}
        >
          Scroll To Third
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: {
                y: '#section4'
              },
              duration: 1
            });
          }}
        >
          Scroll To Fourth
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: {
                y: '#imageTextSection'
              },
              duration: 1
            });
          }}
        >
          Scroll To Fifth
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: {
                y: 0
              },
              duration: 1
            });
          }}
        >
          Scroll To top
        </button>
      </div> */}
      {/* <div id="section1" className="largeContent blue">
        <h1>Scrolling Text</h1>
        <h1>Other Text</h1>
        <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
        <svg
          className="rect1"
          viewBox="138.202 0 191.573 186.517"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="233.146" cy="94.382" r="85.106" />
        </svg>
        <svg
          className="rect2"
          viewBox="138.202 0 191.573 186.517"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="233.146" cy="94.382" r="85.106" />
        </svg>
      </div> */}
      {/* <div id="section2" className="largeContent">
        <img
          className="bgimg"
          src="https://images.unsplash.com/photo-1610899350339-373b0c3124fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        <div className="clip">
          <img src="https://images.unsplash.com/photo-1606760527743-2010b8f453f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80" />
        </div>
      </div> */}
      <div
        id="section3"
        onMouseMove={(e) => {
          const dim = document
            .querySelector('.hiddenSection')
            .getBoundingClientRect();
          const mouseY = e.clientY - dim.top;
          gsap.set('.hiddenSection', {
            clipPath: `circle(10% at ${e.clientX}px ${mouseY}px)`
          });
        }}
        className="largeContent"
      >
        <div className="hiddenSection">
          <h1>Sliding text</h1>
          <h1>HOVER HERE</h1>
        </div>
        <h1>Sliding text</h1>
        <h1>HOVER HERE</h1>
      </div>
      {/* <div id="section4" className="largeContent green">
        <div className="clipFirst">
          <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
        </div>
        <div className="clipSecond">
          <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
        </div>
      </div> */}
      {/* <div id="imageTextSection">
        <img
          src="https://images.unsplash.com/photo-1611708090873-34fb292b726c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="img"
        />
        <div className="textWrapper">
          <h1>Some text</h1>
          <h1>{state}</h1>
        </div>
      </div> */}
      <div id="section5" className="largeContent green">
        <div className="slider">
          {sliderData.map((item, index) => (
            <img className="sliderImg" src={item} alt="img" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
