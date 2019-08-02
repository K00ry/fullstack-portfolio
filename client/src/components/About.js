import React, {Component} from 'react';
import ScrollTrigger from "react-scroll-trigger";
import {Element } from 'react-scroll';

class About extends Component {


    state = {
        visible: false
    };
    onEnterViewport = () => {
        this.setState({
            visible: true
        });
    };

    onExitViewport = () => {
        this.setState({
            visible: false
        });
    };



    render() {

        let AnimeClass;
        this.state.visible === true ? AnimeClass = "scaleDownIn" : AnimeClass ="scaleDownOut";


        return (
            <ScrollTrigger
                throttleScroll={-100}
                onEnter={this.onEnterViewport}
                onExit={this.onExitViewport}
            >
            <section id="section-3" className={`container about panel third ${AnimeClass}`}
                     // data-scroll="toggle(.fromTopIn, .fromTopOut)"
            >
                <Element name="about" className="about-main "
                     // data-scroll="toggle(.fadeIn, .fadeOut), offset(0,350)"
                >
                    <div className="about-me-info ">
                        <h3>ABOUT ME</h3>

                        <div className="about-me-info__info">
                            <div className="about-me-info__info--img">
                                <img alt="koory mirzaei" src={process.env.PUBLIC_URL+ 'img/work/koory.png'}/>
                            </div>
                            <p>I’m a full stack Web Developer with a background in music. I was born and raised in Tehran, Iran and moved to NYC about a decade ago as a member of the internationally recognized band The YellowDogs.</p>
                            <p>I always had a strong/intense passion for technology, so after recognizing the links between tech and music, I decided to pursue a career in tech.</p>
                            <p>I started my journey by acquiring FEWD Tech Degree from Treehouse, followed by a few years of self-education while simultaneously developing various projects working for startups and businesses. I love learning new skills and sharing what I have learned because I believe the best way to master your skills is to share them with others.</p>
                        </div>
                        {/*<p>I am passionate about web technology, producing music, and being creative. I love learning new skills and sharing what I have learned because I believe the best way to master your skills is to share them with others. </p>*/}
                    </div>
                </Element>
            </section>


            </ScrollTrigger>

        );
    }
}

export default About;