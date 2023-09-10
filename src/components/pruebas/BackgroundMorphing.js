/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { Curtains, Plane } from 'react-curtains';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const vertexShader = `
  precision mediump float;
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  varying vec2 vTextureCoord;
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform float time;
  void main(void) {
    float frequency = 0.2;
    float amplitude = 0.2;
    vec2 pos = vTextureCoord;
    pos.y += sin(pos.x * frequency + time) * amplitude;
    gl_FragColor = vec4(pos.x, pos.y, 0.0, 1.0);
  }
`;

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundMorphing() {
  // const animationTime = 0.0; // Declare variable for animation time

  // Plane event: when our plane is ready
  const onPlaneReady = (plane) => {
    // add our time uniform
    plane.uniforms.time = { value: 0 };
  };

  // Plane event: called at each request animation frame
  const onPlaneRender = (plane) => {
    // update our time uniform value
    plane.uniforms.time.value += 0.1;
  };

  return (
    <div id="canvas-container">
      <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
        <Plane
          className="plane"
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          widthSegments={20}
          heightSegments={20}
          onReady={onPlaneReady}
          onRender={onPlaneRender}
        >
          {/* You can insert any content here, like an img tag */}
        </Plane>
      </Curtains>
    </div>
  );
}
