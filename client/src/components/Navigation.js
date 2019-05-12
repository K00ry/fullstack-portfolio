import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';
import { Link} from 'react-scroll';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar sticky-top ">
                <Scrollspy  items={ ['section-1', 'section-2','section-3']}
                            className="nav navbar-nav" currentClassName="active-me"
                            offset={-150}
                >

                    <li className="nav-li " >
                        <Link to="home" spy={true} smooth={true} offset={-50} duration={1500}>
                            <span className="nav-li--a" id="home-link">HOME</span>
                        </Link>
                    </li>

                    <li className="nav-li" >
                        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={1500}>
                            <span className="nav-li--a" id="port-link">PORTFOLIO</span>
                        </Link>
                     </li>
                    <li className="nav-li" >
                        <Link to="about" spy={true} smooth={true} offset={-250} duration={1500}>
                            <span  className="nav-li--a" id="about-link">ABOUT</span>
                        </Link>
                    </li>
                </Scrollspy>
            </nav>
        );
    }
}

export default Navigation;