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
          width: '97vw',
          height: '100vh',
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
          width: '97vw',
          height: '100vh',
          position: 'absolute'
        }}
        src={rectangleLightMode}
        alt=""
      />
    </div>
  );
}
export default RectangleDarkMode;
