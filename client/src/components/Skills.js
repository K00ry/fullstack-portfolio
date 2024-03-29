import React, {Component} from 'react';
import {Element} from 'react-scroll/modules';
import {ReactComponent as ReactL} from '../svg/react.svg';
import {ReactComponent as Redux} from '../svg/redux.svg';
import {ReactComponent as Html} from '../svg/html.svg';
import {ReactComponent as Css} from '../svg/css.svg';
import {ReactComponent as Sass} from '../svg/sass.svg';
import {ReactComponent as Js} from '../svg/js.svg';
import {ReactComponent as Jquery} from '../svg/jquery.svg';
import {ReactComponent as Node} from '../svg/node.svg';
import {ReactComponent as Mongo} from '../svg/mongodb.svg';
import {ReactComponent as Express} from '../svg/express.svg';
import {ReactComponent as Es6} from '../svg/es6.svg';
import {ReactComponent as Php} from '../svg/php.svg';
import {ReactComponent as Word} from '../svg/wordpress.svg';
import {ReactComponent as Webpack} from '../svg/webpack.svg';
import {ReactComponent as Docker} from '../svg/docker.svg';
import {ReactComponent as Ec2} from '../svg/ec2.svg';
import {ReactComponent as Aws} from '../svg/aws.svg';
import {ReactComponent as Heroku} from '../svg/heroku.svg';
import {ReactComponent as Git} from '../svg/git.svg';
import ScrollTrigger from 'react-scroll-trigger';

class Skills extends Component {
    state = {
        visible: false,
    };
    onEnterViewport = () => {
        this.setState({
            visible: true,
        });
    };

    onExitViewport = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        let AnimeClass;
        this.state.visible === true
            ? (AnimeClass = 'scaleDownIn')
            : (AnimeClass = 'scaleDownOut');

        return (
            <section
                id='section-4'
                className={` container skills panel third ${AnimeClass}`}
            >
                <ScrollTrigger
                    throttleScroll={-100}
                    onEnter={this.onEnterViewport}
                    onExit={this.onExitViewport}
                >
                    <Element name='skills' className='skills-main-area '>
                        <div className='skills-title__block'>
                            <h3 className='skills-title__block--title'>MY SKILLS</h3>
                        </div>
                        <div className='closing-info'>
                            <p>
                                I love the challenge of learning new tech everyday, and
                                that is more than enough reason to love tech, especially
                                web development.
                            </p>
                        </div>
                        <div className='skills-main'>
                            <div className='skills'>
                                <div className='skills__col '>
                                    <h2>Front-end</h2>
                                    <div className='skills__col--svg fe'>
                                        <ReactL />
                                        <Redux />
                                        <Html />
                                        <Css />
                                        <Sass />
                                        <Js />
                                        <Jquery />
                                    </div>
                                </div>
                                <div className='skills__col '>
                                    <h2>Back-end</h2>
                                    <div className='skills__col--svg be'>
                                        <Node />
                                        <Mongo />
                                        <Express />
                                        <Es6 />
                                        <Php />
                                        <Word />
                                    </div>
                                </div>
                                <div className='skills__col '>
                                    <h2>Dev-ops</h2>
                                    <div className='skills__col--svg do'>
                                        <Webpack />
                                        <Docker />
                                        <Ec2 />
                                        <Aws />
                                        <Heroku />
                                        <Git />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className='contact'
                            data-scroll='toggle(.scaleDownIn, .scaleDownOut)'
                        >
                            <h3>Love to hear from you!</h3>
                            <address className='number-email'>
                                <h4>
                                    <a href='mailto:koory.yellow@gmail.com'>
                                        koory.yellow@gmail.com
                                    </a>
                                </h4>
                            </address>
                        </div>
                    </Element>
                </ScrollTrigger>
            </section>
        );
    }
}

export default Skills;
