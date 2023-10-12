// /* eslint-disable no-shadow */
// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable no-plusplus */
// /* eslint-disable no-unused-vars */
// import { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import styled from 'styled-components';

// gsap.registerPlugin(ScrollTrigger);

// const TextSection = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${(props) => props.bgColor || 'black'};
// `;

// const TextHidden = styled.p`
//   display: none;
// `;

// const TextReveal = styled.div`
//   line-height: 1.5;
//   font-size: ${(props) => props.fontSize || '2rem'};
//   width: 80vw;
//   color: ${(props) => props.textColor || 'white'};
// `;

// export function TextKaraoke({
//   text,
//   fontSize,
//   textColor,
//   bgColor,
//   usePinning = true
// }) {
//   const textSectionRef = useRef(null);
//   const textHiddenRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//   }, []);

//   useEffect(() => {
//     function splitLines() {
//       if (!textRef.current || !textHiddenRef.current) return; // Asegurarse de que las refs no sean null

//       const text = textHiddenRef.current.textContent;
//       const words = text.split(/\s+/); // Separar el texto en palabras
//       const lines = [];
//       let line = [];

//       words.forEach((word) => {
//         const testLine = [...line, word].join(' '); // Añadir la siguiente palabra a la línea
//         const testElement = document.createElement('div');
//         testElement.style.display = 'inline-block';
//         testElement.textContent = testLine;
//         textRef.current.appendChild(testElement);

//         const exceedsWidth =
//           testElement.offsetWidth > textRef.current.offsetWidth;
//         textRef.current.removeChild(testElement);

//         if (exceedsWidth && line.length > 0) {
//           lines.push(line.join(' ')); // Si excede el ancho, guardar la línea actual
//           line = [word]; // Empezar una nueva línea con la palabra actual
//         } else {
//           line.push(word); // Si no excede el ancho, añadir la palabra a la línea actual
//         }
//       });

//       lines.push(line.join(' ')); // Añadir la última línea

//       const formattedText = lines
//         .map((line) => `<span>${line}</span>`)
//         .join(' ');
//       textRef.current.innerHTML = formattedText;
//     }

//     function duplicateLines() {
//       const textDOM = textRef.current;
//       const textDOMCopy = textDOM.cloneNode(true);
//       textDOM.innerHTML = '';
//       for (let i = 0; i < textDOMCopy.children.length; i++) {
//         const wrapper = document.createElement('div');
//         wrapper.classList.add('text-wrapper');
//         const text = textDOMCopy.children[i].cloneNode(true);
//         text.classList.add('text');
//         const textMask = textDOMCopy.children[i].cloneNode(true);
//         textMask.classList.add('text-mask');
//         wrapper.append(text);
//         wrapper.append(textMask);
//         textDOM.append(wrapper);
//       }
//     }

//     if (textRef.current && textHiddenRef.current) {
//       splitLines();
//       duplicateLines();
//     }
//   }, [textRef, textHiddenRef]);

//   useEffect(() => {
//     if (!textRef.current || !textHiddenRef.current) return;

//     const text = textHiddenRef.current.textContent;
//     textRef.current.innerHTML = text
//       .split(' ')
//       .map((word) => `<span>${word}</span>`)
//       .join(' ');

//     gsap.to(textRef.current.children, {
//       clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: textSectionRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true,
//         markers: true,
//         pin: usePinning
//       }
//     });
//   }, [textRef, textHiddenRef]);

//   return (
//     <TextSection ref={textSectionRef} bgColor={bgColor}>
//       <TextHidden ref={textHiddenRef}>{text}</TextHidden>
//       <TextReveal ref={textRef} fontSize={fontSize} textColor={textColor} />
//     </TextSection>
//   );
// }
