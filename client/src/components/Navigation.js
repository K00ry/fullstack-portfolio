import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';
import { Link} from 'react-scroll';
import Sizes from "react-sizes";

class Navigation extends Component {
    render() {

        let isMobile =<Link to="about" spy={true} smooth={true} offset={-150} duration={1500}>
            <span  className="nav-li--a" id="about-link">ABOUT</span>
        </Link>;
        let isDesktop =<Link to="about" spy={true} smooth={true} offset={-300} duration={1500}>
            <span  className="nav-li--a" id="about-link">ABOUT</span>
        </Link>;
        let portfolioUnderWidth =<Link to="portfolio" spy={true} smooth={true} offset={-250} duration={1500}>
            <span className="nav-li--a" id="port-link">PORTFOLIO</span>
        </Link>;
        let portfolioOverWidth =<Link to="portfolio" spy={true} smooth={true} offset={-200} duration={1500}>
            <span className="nav-li--a" id="port-link">PORTFOLIO</span>
        </Link>;
        return (
            <nav className="navbar sticky-top ">
                <Scrollspy  items={ ['section-1', 'section-2','section-3','section-4']}
                            className="nav navbar-nav container" currentClassName="active-me"
                            offset={-200}
                >

                    <li className="nav-li">
                        <Link to="home" spy={true} smooth={true} offset={-50} duration={1500}>
                            <span className="nav-li--a" id="home-link">HOME</span>
                        </Link>
                    </li>

                    <li className="nav-li" >
                        {this.props.portfolioUnderWidth ? portfolioUnderWidth : portfolioOverWidth}
                     </li>
                    <li className="nav-li" >
                        {this.props.isMobile ? isMobile : isDesktop}
                    </li>
                    <li className="nav-li" >
                        <Link to="skills" spy={true} smooth={true} offset={-250} duration={1500}>
                            <span  className="nav-li--a" id="about-link">SKILLS</span>
                        </Link>
                    </li>
                </Scrollspy>
            </nav>
        );
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 766,
    portfolioUnderWidth:width < 766,
});
export default Sizes(mapSizesToProps)(Navigation);