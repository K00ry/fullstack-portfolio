import React from 'react';
import { ReactComponent as Facebook } from '../svg/social-media/facebook.svg';
import { ReactComponent as Github } from '../svg/social-media/github.svg';
import { ReactComponent as Linkdin } from '../svg/social-media/linkdin.svg';

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();
    const currentDate = ` Kourosh Mirzaei ${year}`;

    return (
        <footer>
            <div className="social">
                <a href="https://www.linkedin.com/in/kourosh-mirzaei-b43362111"
                   aria-label="Linkdin logo">
                    <Linkdin className="social-icon"/>
                </a>
                <a href="https://github.com/K00ry" aria-label="Github logo">
                   <Github className="social-icon"/>
                </a>
                <a href="https://www.facebook.com/koory.mirz" aria-label="Facebook logo">
                    <Facebook className="social-icon" fill="#fff"/>
                </a>
            </div>
            <span className="copy-right-date"> &copy;{currentDate}</span>
        </footer>
    );
};

export default Footer;
