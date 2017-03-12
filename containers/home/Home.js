import React, { Component } from 'react';
import About from '../about/About';
class Home extends Component {
  render() {
    return (
        <div id="home">
          <div className="home-container">
            title and other info
            <About/>
          </div>
        </div>
    );
  }
}

export default Home;
