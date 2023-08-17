/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-45px);
}

24% {
    opacity: 1;
}

40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px);
}

65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px);
}

82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px);
}

93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
}

25%,
55%,
75%,
87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
}

100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px);
}
}
`;
const AnimationWrapper = styled.div`
  opacity: 0; // Por defecto, el elemento estará oculto

  // Si el elemento está en vista, aplicar la animación
  ${(props) =>
    props.inView &&
    css`
      animation: ${fadeIn} 2s forwards;
    `}
`;
function AnimatedInViewComponent({ children }) {
  // Utiliza react-intersection-observer para determinar si el elemento está en vista
  const [ref, inView] = useInView({
    triggerOnce: true, // Para que la animación se aplique solo una vez
    threshold: 0.1 // Ajusta este valor según cuánto del elemento debe estar en vista para activar la animación
  });

  return (
    <AnimationWrapper ref={ref} inView={inView}>
      {children}
    </AnimationWrapper>
  );
}
export default AnimatedInViewComponent;
