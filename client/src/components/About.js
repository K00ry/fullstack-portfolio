import React, {Component} from 'react';
import ScrollTrigger from "react-scroll-trigger";
import {Element } from 'react-scroll';
import { ReactComponent as Sass } from '../svg/sass.svg';
import { ReactComponent as Express } from '../svg/express.svg';
import { ReactComponent as Mongo } from '../svg/mongodb.svg';

import { ReactComponent as Css } from '../svg/css.svg';
import { ReactComponent as Es6 } from '../svg/es6.svg';
import { ReactComponent as Git } from '../svg/git.svg';
import { ReactComponent as Js } from '../svg/js.svg';
import { ReactComponent as Node } from '../svg/node.svg';
import { ReactComponent as Php } from '../svg/php.svg';
import { ReactComponent as ReactL } from '../svg/react.svg';
import { ReactComponent as Webpack } from '../svg/webpack.svg';
import { ReactComponent as Docker } from '../svg/docker.svg';
import { ReactComponent as Word } from '../svg/wordpress.svg';
import { ReactComponent as Html } from '../svg/html.svg';
import { ReactComponent as Jquery } from '../svg/jquery.svg';
import { ReactComponent as Heroku } from '../svg/heroku.svg';
import { ReactComponent as Redux } from '../svg/redux.svg';
import { ReactComponent as Ec2 } from '../svg/ec2.svg';
import { ReactComponent as Aws } from '../svg/aws.svg';




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
            <section id="section-3" className={`about panel third ${AnimeClass}`}
                     // data-scroll="toggle(.fromTopIn, .fromTopOut)"
            >
                <Element name="about" className="about-main "
                     // data-scroll="toggle(.fadeIn, .fadeOut), offset(0,350)"
                >
                    <div className="about-me-info ">
                        <h3>ABOUT ME</h3>
                        <p>I’m a full stack Web Developer with a background in music. I was born and raised in Tehran, Iran and moved to NYC about a decade ago as a member of the internationally recognized band The YellowDogs.<br/>
                        I always had a strong/intense passion for technology, so after recognizing the links between tech and music, I decided to pursue a career in tech.<br/>
                        I started my journey by acquiring FEWD Tech Degree from Treehouse, followed by a few years of self-education while simultaneously developing various projects working for startups and businesses. I love learning new skills and sharing what I have learned because I believe the best way to master your skills is to share them with others.</p>
                        {/*<p>I am passionate about web technology, producing music, and being creative. I love learning new skills and sharing what I have learned because I believe the best way to master your skills is to share them with others. </p>*/}
                    </div>
                    <div className="port-head-2-container"><h1 className="port-head-2">MY SKILLS</h1></div>
                    <div className="skills-main">

                        <div className="skills"
                             // data-scroll="toggle(.scaleDownIn, .scaleDownOut)"
                        >
                            <div className="skills__col ">
                                <h2>Front-end</h2>
                                <div className="skills__col--svg fe">
                                <ReactL/>
                                <Redux/>

                                <Html/>
                                <Css/>
                                <Sass/>
                                <Js/>
                                    <Jquery/>
                                    {/*<Bootstrap/>*/}
                                </div>
                            </div>
                            <div className="skills__col ">
                                <h2>Back-end</h2>
                                <div className="skills__col--svg be">
                                    <Node/>
                                <Mongo/>
                                <Express/>
                                <Es6/>
                                <Php/>
                                <Word/>

                            </div>

                            </div>
                            <div className="skills__col ">
                                <h2>Dev-ops</h2>
                                <div className="skills__col--svg do">
                                    <Webpack/>
                                <Docker/>
                                <Ec2/>
                                    <Aws/>
                                <Heroku/>
                                <Git/>

                            </div>

                            </div>











                        </div>

                    </div>
                    <div className="about-me-info">

                        <p>I love the challenge of learning new tech everyday, and that is more than enough reason to love tech, especially web development.</p>
                    </div>
                    <div className="contact" data-scroll="toggle(.scaleDownIn, .scaleDownOut)">
                        <h3>Love to hear from you!</h3>
                        <address className="number-email">
                            <h4><a href="mailto:koory.yellow@gmail.com">koory.yellow@gmail.com</a></h4>
                            <h4><a href="tel:+1(917)-414-6858">+1 (917)-414-6858</a></h4>
                        </address>
                    </div>
                </Element>
            </section>
            </ScrollTrigger>

        );
    }
}

export default About;