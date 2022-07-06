import React from 'react';

const proyects = [
  {
    id: 1,
    title: 'Project One',
    rol: 'Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 2,
    title: 'Project Two',
    rol: 'UI, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 3,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 4,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 5,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 6,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  },
  {
    id: 7,
    title: 'Project Three',
    rol: 'UX, Design, Development',
    textButton: 'See more',
    path: '/#'
  }
];

export default function Proyects() {
  return (
    <>
      <div className="containerProjects">
        {proyects.map((item) =>
          item.id <= 5 ? (
            <div className="proyects" key={item.id}>
              <h3>{item.title}</h3>
              <h4>{item.rol}</h4>
              <a href={item.path}>
                <button type="button">{item.textButton}</button>
              </a>
            </div>
          ) : null
        )}
      </div>
      <div className="containerProjectsRow">
        {proyects.map((item) =>
          item.id > 5 ? (
            <div className="proyects" key={item.id}>
              <h3>{item.title}</h3>
              <h4>{item.rol}</h4>
              <a href={item.path}>
                <button type="button">{item.textButton}</button>
              </a>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
