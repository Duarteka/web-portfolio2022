/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';

export const textColor = theme('theme', {
  light: '#D34C7F',
  dark: '#F9F586'
});
const ArrowDownIcon = styled(ArrowDown)`
  height: 90px;
  margin-top: 5%;
  color: ${textColor};
`;
export default function SelectedWork() {
  return (
    <>
      <div className="containerSelectedWork">
        <h1>
          <ArrowDownIcon /> Selected
          <br />
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Work
        </h1>
      </div>
      <div className="containerDescriptionProjects">
        <p>
          Think twice, design once. I work with you to make a design that not
          only looks impressive but performs. I will spend as much time as
          needed to refine a concept to ensure it s just right. My mission is to
          create an online presence for my clients that will withstand the test
          of time.
        </p>
      </div>
    </>
  );
}
