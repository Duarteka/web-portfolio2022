import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1,
    displaceFactor: 0,
    tex: undefined,
    tex2: undefined,
    dis: undefined,
    time: 0,
    power: 0
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  `
    varying vec2 vUv;
    uniform float time;
    uniform float power;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D dis;
    uniform float displaceFactor;
    uniform float effectFactor;

    void main() {
      vec2 uv = vUv;

      vec4 displace = texture2D(dis, uv);
      vec2 displacedPosition = vec2(uv.x, uv.y + displaceFactor * (displace.r * effectFactor));
      vec2 displacedPosition2 = vec2(uv.x, uv.y - (1.0 - displaceFactor) * (displace.r * effectFactor));

      vec4 _texture = texture2D(tex, displacedPosition);
      vec4 _texture2 = texture2D(tex2, displacedPosition2);

      vec4 finalTexture = mix(_texture, _texture2, displaceFactor);
      gl_FragColor = finalTexture;


      // vec4 displace = texture2D(dis, uv.yx);
      // vec2 displacedUV = vec2(uv.x + power*sin(uv.y*20. + time/4.),uv.y);
      // vec2 displacedUV = vec2(uv.x + displaceFactor * power*(displace.r*effectFactor),uv.y);
      // vec2 displacedUV = vec2(uv.x, uv.y + displace*power);
      // vec2 displacedUV = vec2(uv.x, uv.y);
      // displacedUV.y = mix(uv.y, displace.r, power);
      // vec4 color = texture2D(tex, displacedUV);
      // gl_FragColor = color;
    }
  `
);

extend({ ImageFadeMaterial });
