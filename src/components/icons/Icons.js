/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { ArrowRightCircleFill } from '@styled-icons/bootstrap/ArrowRightCircleFill';
import { Moon } from '@styled-icons/entypo/Moon';
import { EmojiSmileUpsideDown } from '@styled-icons/bootstrap/EmojiSmileUpsideDown';
import { ArrowDown } from '@styled-icons/bootstrap';
import { textColor } from '../../styled';

export const ArrowDownIcon = styled(ArrowRightCircleFill)`
  height: 35px;
  margin-top: 5%;
  color: ${textColor};
  position: absolute;
`;

export const MoonLight = styled(Moon)`
  width: 2rem;
  z-index: 30;
  cursor: pointer;
  color: ${textColor};

  @media (max-width: 668px) {
    width: 2.5rem;

    transform: translate(-7rem, -4px);
  }
`;
export const SmileFace = styled(EmojiSmileUpsideDown)`
  width: 30rem;

  color: ${textColor};
  position: relative;

  @media (max-width: 668px) {
    width: 2.5rem;

    transform: translate(-7rem, -4px);
  }
`;

export const ArrowdownHeader = styled(ArrowDown)`
  width: 5rem;
  color: ${textColor};
  position: relative;
`;
