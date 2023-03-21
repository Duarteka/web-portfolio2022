/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useWindowSize from './useREsize';

export default function TextKaraoke({ textLineSplit }) {
  const textSectionRef = useRef(null);
  const textHiddenRef = useRef(null);
  const textRef = useRef(null);
  const { width, height } = useWindowSize();
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    function splitLines() {
      const textDOM = textRef.current;
      const text = textHiddenRef.current.textContent; // Copy text from <p class="text-hidden"> element
      let temp = '';
      let top = 0;

      const textWithSpan = text.replace(/\S+/g, '<span>$&</span>');

      textDOM.innerHTML = textWithSpan;

      for (let i = 0; i < textDOM.children.length; i++) {
        const span = textDOM.children[i];
        const rect = span.getBoundingClientRect().top;
        if (rect > top) {
          if (top === 0) {
            temp += '<span>';
          } else {
            temp += '</span><span>';
          }
          top = rect;
        }
        temp += `${span.textContent} `;
      }

      textDOM.innerHTML = temp;
    }

    function duplicateLines() {
      const textDOM = textRef.current;
      const textDOMCopy = textDOM.cloneNode(true);
      textDOM.innerHTML = '';
      for (let i = 0; i < textDOMCopy.children.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('text-wrapper');
        const text = textDOMCopy.children[i].cloneNode(true);
        text.classList.add('text');
        const textMask = textDOMCopy.children[i].cloneNode(true);
        textMask.classList.add('text-mask');
        wrapper.append(text);
        wrapper.append(textMask);
        textDOM.append(wrapper);
      }
    }
    splitLines();
    duplicateLines();
  }, [width, height]);

  useEffect(() => {
    const container = textSectionRef.current;
    const background = container.previousSibling;
    const line = gsap.utils.toArray('.text-mask');

    gsap.to(background, {
      opacity: 1, // Cambia la opacidad del fondo a 1
      duration: 1, // Duración de la animación
      ease: 'power1.out', // Ajusta la curva de animación
      scrollTrigger: {
        trigger: container,
        start: 'top center', // Inicia la animación cuando el centro del contenedor esté en la parte superior de la ventana gráfica
        end: 'bottom center', // Finaliza la animación cuando el centro del contenedor esté en la parte inferior de la ventana gráfica
        scrub: true // Activa el ajuste de la animación mientras se desplaza
      }
    });

    let tl = gsap.timeline(
      {
        scrollTrigger: {
          pinSpacing: true,
          trigger: container,
          start: 'top top',
          end: () => `+=${container.offsetHeight * 3}`,
          scrub: true,
          markers: true,
          pin: true
        }
      },
      1
    );
    for (let i = 0; i < line.length; i++) {
      tl.to(
        line[i],
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1 / line.length
        },
        (1 / line.length) * i
      );
    }

    return () => {
      tl = null;
    };
  }, []);

  return (
    <>
      <div className="text-bg" ref={bgRef} />
      <div className="text-section" ref={textSectionRef}>
        <p className="text-hidden" ref={textHiddenRef}>
          {textLineSplit}
        </p>
        <div className="text-reveal" ref={textRef} />
      </div>
    </>
  );
}
