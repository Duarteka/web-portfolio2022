import React from 'react';

import rectangleDarkMode from '../assets/rectangleDarkMode.png';

import rectangleLightMode from '../assets/rectangleLightMode.png';

// const styleRectangle = {};
function RectangleDarkMode() {
  return (
    <div>
      <img
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifySelf: 'center',
          alignContent: 'center',
          marginLeft: '1rem',
          width: '98vw',
          marginTop: '-3.5%',
          height: '98vh',
          position: 'absolute'
        }}
        src={rectangleDarkMode}
        alt=""
      />
    </div>
  );
}

export function RectangleLightMode() {
  return (
    <div>
      <img
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifySelf: 'center',
          alignContent: 'center',
          marginLeft: '1rem',
          width: '98vw',
          marginTop: '-3.5%',
          height: '98vh',
          position: 'absolute'
        }}
        src={rectangleLightMode}
        alt=""
      />
    </div>
  );
}
export default RectangleDarkMode;
