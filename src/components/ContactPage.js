import React from 'react';

const contacts = [
  {
    id: 1,
    contact: 'Discord',
    route: '#'
  },
  {
    id: 2,
    contact: 'Instagram',
    route: '#'
  },
  {
    id: 3,
    contact: 'Behance',
    route: '#'
  },
  {
    id: 4,
    contact: 'Github',
    route: '#'
  },
  {
    id: 5,
    contact: 'Email',
    route: '#'
  },
  {
    id: 6,
    contact: 'Linkedin',
    route: '#'
  },
  {
    id: 7,
    contact: 'WhatsApp',
    route: '#'
  }
];

export default function ContactPage() {
  return (
    <>
      <h1>Let s talk</h1>
      {contacts.map((item) => (
        <h3 key={item.id}>{item.contact}</h3>
      ))}
    </>
  );
}
