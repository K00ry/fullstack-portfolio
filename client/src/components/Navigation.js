import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-light bg-faded navigation-bar is-visible container">
                <Scrollspy  items={ ['section-1', 'section-2','section-3']}
                            className="nav navbar-nav" currentClassName="active-me"
                            // offset={500}
                >
                    <li className="nav-item " >
                        <a href="#section-1" className="nav-link" id="home-link">HOME</a>
                    </li>
                    <li className="nav-item" >
                        <a href="#section-2" className="nav-link" id="port-link" >PORTFOLIO</a>
                    </li>
                    <li className="nav-item" >
                        <a href="#section-3" className="nav-link" id="about-link">ABOUT</a>
                    </li>
                </Scrollspy>
            </nav>
        );
    }
}

export default Navigation;