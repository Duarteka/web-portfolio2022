import React from 'react';
import styled from 'styled-components';
import { socialMidiaContact } from '../dataInfo';
import { Slide } from './slideAnimation/Slide';

export default function ContactPage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          marginBottom: '0'
        }}
      >
        <Slide>
          <h1>Let &apos;s talk</h1>
        </Slide>
        <Slide>
          <p>
            Whether you want to hire me or you&apos;re just someone curious who
            wants to chat about design and technology I would love to meet you
          </p>
        </Slide>
      </div>
      <ContainerContact>
        {socialMidiaContact.map((item) => (
          <div key={item.id}>
            <h3>{item.contact}</h3>
            <h3>
              <a href={item.route}>{item.socialMidiaName}</a>
            </h3>
          </div>
        ))}
      </ContainerContact>
    </>
  );
}

const ContainerContact = styled.div`
  display: 'flex';
  flex-direction: column;
  padding: 0 8%;

  a {
    max-width: 40%;
  }

  h3 {
    font-size: 0.7rem;
    font-family: Lemonada;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    align-items: center;
    border-top: 1px solid;
    padding: 0.1rem;
  }
`;
