import React from 'react';

import Skills from './skills';

const WorksDesktop = props => {
  return (
    <div id="overlay-desktop">
      <div className="img-holder">
        <img
          className="img-ov img-fluid"
          src={props.works.img}
          alt="responsive devices  on larger devices"
        />
      </div>
      <div className="title-tech-ov">
        <h1 className="title-ov">{props.works.name}</h1>
        <ul className="links">
          <li className="git-ov">
            <a href={props.works.github}>GITHUB</a>
          </li>
          <li className="demo-ov">
            <a href={props.works.demo}>DEMO</a>
          </li>
        </ul>
        <Skills works={props.works} />
      </div>
      <p className="info-ov">{props.works.info}</p>
    </div>
  );
};



export default WorksDesktop;
