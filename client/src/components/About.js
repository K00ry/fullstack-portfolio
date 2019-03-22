import React, {Component} from 'react';
// import {skills_svg} from "../data";
import { ReactComponent as Sass } from '../svg/sass.svg';
import { ReactComponent as Express } from '../svg/express.svg';
import { ReactComponent as Mongo } from '../svg/mongodb.svg';
import { ReactComponent as Bootstrap } from '../svg/bootstrap.svg';
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




class About extends Component {


    state = {


    };



    render() {

        // let skillIcons = this.state.skills.map((value,index) => <img className="logo-skill" key={index} src={process.env.PUBLIC_URL + value} alt="skill-logo"/>);
        // let skillIcons = this.state.skills.map(value => {
        //
        // });
            // React.createElement(value,{},null)
        // let skillIcons;
        // const TagName = this.state.skills[0];
        // return skillIcons = <TagName />;



        // console.log(skillIcons);

        return (
            <section id="section-3" className="about panel third"
                     // data-scroll="toggle(.fromTopIn, .fromTopOut)"
            >
                <div className="about-main" >
                    <div className="about-me-info">
                        <p>I am passionate about web technology, producing music, and being creative. I love learning new skills and sharing what I have learned because I believe the best way to master your skills is to share them with others. </p>
                    </div>
                    <div className="port-head-2-container"><h1 className="port-head-2">SKILLS</h1></div>
                    <div className="skills-main">

                        <div className="skills-icons"
                             // data-scroll="toggle(.scaleDownIn, .scaleDownOut)"
                        >
                            <Mongo/>
                            <Express/>
                            <ReactL/>
                            <Node/>
                            <Es6/>
                            <Html/>
                            <Css/>
                            <Sass/>
                            <Js/>
                            <Jquery/>
                            <Php/>
                            <Word/>
                            <Webpack/>

                            <Bootstrap/>
                            <Docker/>
                            <Heroku/>
                            <Git/>





                        </div>

                    </div>
                    <div className="about-me-info">
                        <p>I love the challenge of learning new tech everyday, and that is more than enough reason to love tech, especially front-end development.</p>
                    </div>
                    <div className="contact" data-scroll="toggle(.scaleDownIn, .scaleDownOut)">
                        <h3>Love to hear from you!</h3>
                        <address className="number-email">
                            <h4><a href="mailto:koory.yellow@gmail.com">koory.yellow@gmail.com</a></h4>
                            <h4><a href="tel:+1(917)-414-6858">+1 (917)-414-6858</a></h4>
                        </address>
                    </div>
                </div>
            </section>

        );
    }
}

export default About;