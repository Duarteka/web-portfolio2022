/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { socialMidiaContact } from '../utils/dataInfo';
import { textColor, textColorBringUp } from '../../styled';
import { Slide } from '../slideAnimation/Slide';
import {
  SubtitleHeaderSection,
  TextHeaderSection
} from '../slideAnimation/TextHeaderSection';

export default function ContactPage() {
  return (
    <ContainerContact>
      <div className="containerSocialmidia">
        {socialMidiaContact.map((item) => (
          <h2 key={item.id} className="socialNameTitle">
            {item.contact}
          </h2>
        ))}
        <span />
        {socialMidiaContact.map((item) => (
          <div>
            <p className="subTitle" key={item.id}>
              {item.socialMidiaName}
            </p>
          </div>
        ))}
      </div>
    </ContainerContact>
  );
}

const ContactEmail = styled.div`
  display: flex;
  width: 100vw;
  padding: 5rem 0;
  top: 0;

  align-items: center;

  h3 {
    margin-left: -30rem;
    backgrpund-color: green;
    border-bottom: solid 2px ${textColorBringUp};
    font-size: 3rem;
  }
`;
const ContainerContact = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;
  padding: 0 2rem;
  margin-top: -5rem;

  .containerSocialmidia {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  span {
    height: 2px;
    width: 100%;
    color: ${textColor};
    border-bottom: solid 2px;
  }
  .socialNameTitle {
    margin: 2rem 2rem;
  }

  .subTitle {
    align-items: center;
    margin: 2rem 5rem;
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
    color: ${textColor};
  }

  @media (max-width: 576px) {
    margin-top: -10rem;
    padding; 0;
   
    h2{
      font-size: 2.5rem;
    }

    .socialNameTitle {
      margin: 0;
    }
    .subTitle {
      margin: 0 1rem;
      width: 100%;
    }
  }
`;
