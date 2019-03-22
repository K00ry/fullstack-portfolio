import React from 'react';
import PropTypes from 'prop-types';

const Skills = props => {
  let skills = props.works.tech.map((skill,index) =>
    <li key= {index} className="tech-title">
      <img
          src={process.env.PUBLIC_URL + skill}
          // src={skill}
           alt="tech-logo" />
    </li>
  );

  return <ul className="tech-ov">{skills}</ul>;
};

Skills.propTypes = {
    // skills_info: PropTypes.object.isRequired,
    works:PropTypes.object.isRequired,

};

export default Skills;
