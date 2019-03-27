import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar sticky-top ">
                <Scrollspy  items={ ['section-1', 'section-2','section-3']}
                            className="nav navbar-nav" currentClassName="active-me"
                            offset={-150}
                >
                    <li className="nav-li " >
                        <a href="#section-1" className="nav-li--a" id="home-link">HOME</a>
                    </li>
                    <li className="nav-li" >
                        <a href="#section-2" className="nav-li--a" id="port-link" >PORTFOLIO</a>
                    </li>
                    <li className="nav-li" >
                        <a href="#section-3" className="nav-li--a" id="about-link">ABOUT</a>
                    </li>
                </Scrollspy>
            </nav>
        );
    }
}

export default Navigation;