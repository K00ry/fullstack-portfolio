import React, { Component } from 'react';
import { worksDataMobile, data } from '../../data';

import Works from './works';
import WorksDesktop from './worksDesktop';
import WorksMobile from './worksMobile';
import Sizes from 'react-sizes';
import {Element } from 'react-scroll';
import { ReactComponent as Sass } from '../../svg/sass.svg';
import { ReactComponent as Express } from '../../svg/express.svg';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
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
                    "Studyum.io (Initial Design) is E-learning Platform based on block-chain technology, I'm responsible for entire FullStack structure, From developing UI to user Registration. I took the jam-stack approach and it keeps growing. Currently, It uses React App in front and Express on the back-end and it uses Wordpress as headless CMS for content management.",
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
                demo: 'https://zealous-brahmagupta-e2fdc0.netlify.com/',
                github: 'https://github.com/STUDYUM/studyum',
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
            closeOverlay={this.handleClose}/>;

        let isDesktop =
            <TransitionGroup component="div" className="wrapper">
                <CSSTransition
                    key={this.state.projectViewIndex}
                    timeout={300}
                    classNames="page">
                    <WorksDesktop works={this.state.works} />
                </CSSTransition>
            </TransitionGroup>;

        return (
            <section id="section-2" className={`portfolio panel second container ${AnimeClass2}`}>
            <ScrollTrigger
                throttleScroll={-200}
                onEnter={this.onEnterViewport}
                onExit={this.onExitViewport}>
                <Element name="portfolio">


            <div id="projects" >
                <Works data={worksDataMobile}
                       handleClick={this.getArray}
                       isItActive={this.isItActive}/>
                       {this.props.isMobile ? isMobile : isDesktop}
            </div>

                </Element>
            </ScrollTrigger>
            </section>

        );
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 766,
});
export default Sizes(mapSizesToProps)(Portfolio);