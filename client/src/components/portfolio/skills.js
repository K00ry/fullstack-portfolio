import React from 'react';

const Skills = (props) => {
    let skills = props.works.tech.map((skill, index) => (
        <li key={index} className='tech-title'>
            {skill}
        </li>
    ));

    return <ul className='info-section__tech-ov'>{skills}</ul>;
};

export default Skills;
