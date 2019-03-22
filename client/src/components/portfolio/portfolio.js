import React, { Component } from 'react';
import { worksDataMobile, data } from '../../data';

import Works from './works';
import WorksDesktop from './worksDesktop';
import WorksMobile from './worksMobile';
import Sizes from 'react-sizes';


class Portfolio extends Component {
  state = {
            works: {
                name: 'Pars Jadval',
                img: 'img/work/responsive/6.png',
                info:
                    'This React Built Project is the product showcase of a concrete precast company that i developed for mobile and tablet. Technologies used for this project include: React, React Router, React-Bootstrap, create-react-app, react-transition-group, i18next (for Localization).',
                tech: [
                    'img/work/logos/react.png',
                    'img/work/logos/html.png',
                    'img/work/logos/es6.png',
                    'img/work/logos/css.png',
                    'img/work/logos/js.png',
                    'img/work/logos/sass.svg',
                    'img/work/logos/git.png',
                ],
                demo: 'http://www.parsjadval.kouroshmirzaei.com',
                github: 'https://github.com/K00ry/pars-react',
            },
            responsiveMobile: false,
            show: false,
            projectViewIndex:3,
        };

    isItActive = index => {
        return this.state.projectViewIndex === index;
    };

    // setActiveTab = index => {
    //     this.setState({ projectViewIndex: index });
    // };

    getArray = rightWork => {
        this.setState({
            works: data[rightWork],
            show: true,
            projectViewIndex: rightWork
        });
    };

    // overlayClose = () =>{
    //     this.setState({
    //         show: false,
    //     });
    // };
    handleClose=()=> {
        this.setState({ show: false });
    };

    // handleShow() {
    //     this.setState({ show: true });
    // }


    render() {

        let isMobile = <WorksMobile
            works={this.state.works}
            openOverlay={this.state.show}
            closeOverlay={this.handleClose}
        />;
        let isDesktop = <WorksDesktop works={this.state.works} />;
        return (
            <section id="section-2" className="portfolio panel second container" >
            <div id="projects" data-scroll="toggle(.scaleDownIn, .scaleDownOut)">
                <h1 className="port-head">Work</h1>
                <Works data={worksDataMobile}
                       handleClick={this.getArray}
                       isItActive={this.isItActive}
                        />

                {this.props.isMobile ? isMobile : isDesktop}
                {/*<MediaQuery query="(max-device-width: 767px)">*/}

                    {/*<WorksMobile*/}
                        {/*works={this.state.works}*/}
                        {/*openOverlay={this.state.show}*/}
                        {/*closeOverlay={this.overlayClose}*/}
                    {/*/>*/}
                {/*</MediaQuery>*/}
                {/*<MediaQuery query="(min-device-width: 768px)">*/}

                {/*</MediaQuery>*/}
            </div>
            </section>
        );
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 766,
});
export default Sizes(mapSizesToProps)(Portfolio);