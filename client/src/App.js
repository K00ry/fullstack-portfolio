import React, { Component } from 'react';
import './App.css';
import ScrollTrigger from 'scrolltrigger-classes';
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import BackgroundVideo from "./components/BackgroundVideo";
import Skills from "./components/Skills";
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
  }




  render() {



    return (
      <div className="App">
          <BackgroundVideo/>
        <main id="main-of-main">
          <Navigation/>
          <Home/>
          <Portfolio />
          <About/>
          <Skills/>
        </main>
        <Footer/>


      </div>
    );
  }
}


export default App;
