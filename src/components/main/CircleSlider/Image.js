/* eslint-disable camelcase */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import '../../shaders/wobble';

const { innerWidth: width } = window;
const multiplier = {
  x: width < 900 ? 6 : 6,
  y: 0,
  z: width < 900 ? -6 : -6,
  w: width < 900 ? 4 : 4,
  h: width < 900 ? 2.25 : 2.25
};
const radian_interval = (2.0 * Math.PI) / 6;

export default function Image({ img, index, distance, shaderScroll, history }) {
  const mesh = useRef();
  const wack = useRef();
  const texture = useLoader(THREE.TextureLoader, img);

  useFrame(({ clock }) => {
    wack.current.time = clock.elapsedTime;
    const slideDistance = Math.sin(
      radian_interval * (index + distance.current + 0.5)
    );
    wack.current.distanceFromCenter = 1 + slideDistance;
    mesh.current.position.set(
      multiplier.z *
        Math.cos(radian_interval * (index + distance.current + 0.5)),
      0,
      multiplier.x *
        Math.sin(radian_interval * (index + distance.current + 0.5))
    );
    wack.current.speed = shaderScroll.current;
  });

  const handleOnClick = () => history.push('/project');

  return (
    <mesh ref={mesh} scale={[1, 1, 1]} onClick={handleOnClick}>
      <planeBufferGeometry
        attach="geometry"
        args={[multiplier.w, multiplier.h, 100, 100]}
      />
      <wobbleImage
        ref={wack}
        attach="material"
        texture1={texture}
        toneMapped={false}
        // wireframe={true}
        style={{ backgroundColor: 'red', height: '100vh' }}
      />
    </mesh>
  );
}
