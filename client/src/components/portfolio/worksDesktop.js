import React from 'react';

import Skills from './skills';

const WorksDesktop = (props) => {
    return (
        <div className='overlay-desktop'>
            <div className='overlay-desktop__img-holder'>
                <a href={props.works.demo}>
                    <img
                        className='img-ov img-fluid'
                        src={props.works.img}
                        alt='responsive devices  on larger devices'
                    />
                </a>
            </div>
            <div className='overlay-desktop__info'>
                <div className='info-section'>
                    <h3 className='info-section__title'>{props.works.name}</h3>
                    <ul className='links'>
                        <li className='git-ov'>
                            <a href={props.works.github}>GITHUB</a>
                        </li>
                        <li className='demo-ov'>
                            <a href={props.works.demo}>DEMO</a>
                        </li>
                    </ul>
                    <Skills works={props.works} />
                </div>
                <p className='info-ov'>{props.works.info}</p>
            </div>
        </div>
    );
};

export default WorksDesktop;
