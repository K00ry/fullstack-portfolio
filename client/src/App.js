import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import ScrollTrigger from 'scrolltrigger-classes';
// import Sizes from 'react-sizes';
// import ScrollTrigger from "react-scroll-trigger";

import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import BackgroundVideo from "./components/BackgroundVideo";
class App extends Component {
  state ={
    greet:'',
    note:'',
      visible: false

  };

  componentDidMount() {
      document.addEventListener('DOMContentLoaded', function () {
          new ScrollTrigger({

              // offset: {
              //     x: 0,
              //     y: 20
              // },
              // addHeight: true,
              // once: true
          }, document.body, window);
      });


      // axios.post('/').then(response=>{
      //   console.log(response);
      //   const{greet,note}= response.data;
      //   this.setState({
      //     greet,
      //     note
      //   })
      // })
  }

    // onEnterViewport = () => {
    //     this.setState({
    //         visible: true
    //     });
    // };
    //
    // onExitViewport = () => {
    //     this.setState({
    //         visible: false
    //     });
    // };


  render() {
      // let desk = <BackgroundVideo/>;
      // let mob;


    return (
      <div className="App">
        {/*<h2>{this.state.greet}</h2>*/}
        {/*<p>{this.state.note}</p>*/}
          {/*{this.props.isMobile ? mob : desk}*/}
          <BackgroundVideo/>

        <main id="main-of-main">
          <Navigation/>
          <Home/>

          <Portfolio />

          <About/>
        </main>
        <Footer/>


      </div>
    );
  }
}

// const mapSizesToProps = ({ width }) => ({
//     isMobile: width < 766,
// });
export default App;
