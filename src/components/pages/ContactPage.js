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
    <ContactContainer>
      <TextHeaderSection title="contact" id="contact" />
      <ContactEmail>
        <SubtitleHeaderSection subtitle="BY NOW I KNOW YOU WANNA MEET ME, DON’T BE SHY, SEND ME A MESSAGE." />
        <h3>duarte.karen21@gmail.com</h3>
      </ContactEmail>
      {/* <Slide>
        <p>BY NOW I KNOW YOU WANNA MEET ME, DON’T BE SHY, SEND ME A MESSAGE.</p>
      </Slide> */}

      <ContainerContact>
        {socialMidiaContact.map((item) => (
          <div key={item.id}>
            <h2>{item.contact}</h2>
            <h2>
              <a href={item.route}>{item.socialMidiaName}</a>
            </h2>
          </div>
        ))}
      </ContainerContact>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  heigth: 100vh;
  position: relative;

  @media (max-width: 668px) {
    max-width: 100vw;
    overflow: hidden;
    font-size: 1rem !important;
  }
`;
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
  display: flex;

  flex-direction: column;
  padding: 0 5%;

  a {
    max-width: 40%;
    text-decoration: none;
    color: ${textColor};
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${textColorBringUp};
    margin-top: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    align-items: center;
    border-top: 1px solid;
  }
  div:last-child {
    border-bottom: 1px solid;
    padding-bottom: 2rem;
  }
`;
