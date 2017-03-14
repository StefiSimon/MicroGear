import React, { Component } from 'react';
import './Home.scss';
import About from '../about/About';
import Schedule from '../schedule/Schedule';
import Technologies from '../technologies/Technologies';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';

class Home extends Component {
  render() {
    return (
        <div id="home" className="home-container" data-parallax="active">
          <div className="home-container-image">
            <img src="http://i67.tinypic.com/epq0ck.jpg" />
          </div>
          <div className="sections-container">
            <div className="section section-basic">
              <div className="container">
                <About />
                <div className="orange"></div>
                <Schedule />
                <div className="orange"></div>
                <Technologies/>
                <div className="orange"></div>
                <Gallery />
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Home;
