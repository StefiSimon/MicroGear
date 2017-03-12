import React, { Component } from 'react';
import About from '../about/About';
import Schedule from '../schedule/Schedule';

class Home extends Component {
  render() {
    return (
        <div id="home">
          <div className="home-container">
            title and other info
            <About/>
            <Schedule/>
          </div>
        </div>
    );
  }
}

export default Home;
