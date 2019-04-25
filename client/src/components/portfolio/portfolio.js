import React, { Component } from 'react';
import { worksDataMobile, data } from '../../data';

import Works from './works';
import WorksDesktop from './worksDesktop';
import WorksMobile from './worksMobile';
import Sizes from 'react-sizes';
import { ReactComponent as Sass } from '../../svg/sass.svg';
import { ReactComponent as Express } from '../../svg/express.svg';
// import { ReactComponent as Mongo } from '../../svg/mongodb.svg';
// import { ReactComponent as Bootstrap } from '../../svg/bootstrap.svg';
import { ReactComponent as Es6 } from '../../svg/es6.svg';
import { ReactComponent as Git } from '../../svg/git.svg';
import { ReactComponent as Node } from '../../svg/node.svg';
import { ReactComponent as ReactL } from '../../svg/react.svg';
 import ScrollTrigger from "react-scroll-trigger";
import {ReactComponent as Css} from "../../svg/css.svg";
import {ReactComponent as Word} from "../../svg/wordpress.svg";



class Portfolio extends Component {
  state = {
      visible2: false,
            works: {
                name: 'Studyum.io',
                img: 'img/work/responsive/15.png',
                info:
                    "Studyum.io is E-learning Platform based on block-chain technology, I'm responsible for entire FullStack structure, From developing UI to user Registration. its a React App in front and uses Wordpress as headless CMS on back-end for ease of use and content management.",
                tech: [
                    <ReactL/>,
                    <Es6/>,
                    <Node/>,
                    <Express/>,
                    <Css/>,
                    <Sass/>,
                    <Word/>,
                    <Git/>,
                ],
                demo: 'https://studyum.io',
                github: 'https://github.com/K00ry/studyum',
            },
            responsiveMobile: false,
            show: false,
            projectViewIndex:0,
        };
    onEnterViewport = () => {
        this.setState({
            visible2: true
        });
    };

    onExitViewport = () => {
        this.setState({
            visible2: false
        });
    };

    isItActive = index => {
        return this.state.projectViewIndex === index;
    };


    getArray = rightWork => {
        this.setState({
            works: data[rightWork],
            show: true,
            projectViewIndex: rightWork
        });
    };


    handleClose =()=> {
        this.setState({ show: false });
    };




    render() {
        let AnimeClass2;
        this.state.visible2 === true ? AnimeClass2 = "scaleDownIn" : AnimeClass2 ="scaleDownOut";

        let isMobile = <WorksMobile
            works={this.state.works}
            openOverlay={this.state.show}
            closeOverlay={this.handleClose}
        />;
        let isDesktop = <WorksDesktop works={this.state.works} />;
        return (
            <ScrollTrigger
                throttleScroll={-100}
                onEnter={this.onEnterViewport}
                onExit={this.onExitViewport}
            >

            <section id="section-2" className={`portfolio panel second .container-fluid ${AnimeClass2}`}
                     // data-scroll="centerHorizontal,toggle(.scaleDownIn, .scaleDownOut),offset(0,250)"
                     // data-scroll="centerHorizontal,toggle(.fromTopIn, .fromTopOut), offset(0,250)"
            >
            <div id="projects" >
                <Works data={worksDataMobile}
                       handleClick={this.getArray}
                       isItActive={this.isItActive}
                        />

                {this.props.isMobile ? isMobile : isDesktop}
            </div>
            </section>
            </ScrollTrigger>

        );
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 766,
});
export default Sizes(mapSizesToProps)(Portfolio);