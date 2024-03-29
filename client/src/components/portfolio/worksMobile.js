import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';

const WorksMobile = (props) => {
    let skills = props.works.tech.map((tech, index) => (
        <li key={index} className='tech-title'>
            {tech}
        </li>
    ));

    return (
        <Modal show={props.openOverlay} onHide={props.closeOverlay}>
            <Modal.Header closeButton />

            <h3 id='title'>{props.works.name}</h3>
            <div className='lay-img'>
                <div className='img-and-caption'>
                    <img
                        id='over-img'
                        src={process.env.PUBLIC_URL + props.works.img}
                        alt={props.works.name}
                    />
                    <p id='info-text'>{props.works.info}</p>
                </div>
                <ul id='techs'>{skills}</ul>
            </div>
            <ul className='links'>
                <li className='git-ov'>
                    <a href={props.works.github}>GITHUB</a>
                </li>
                <li className='demo-ov'>
                    <a href={props.works.demo}>DEMO</a>
                </li>
            </ul>
        </Modal>
    );
};

WorksMobile.propTypes = {
    works: PropTypes.object.isRequired,
};

export default WorksMobile;
