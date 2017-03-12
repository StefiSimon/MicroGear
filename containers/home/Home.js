import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    // const transform = require('dom-css-transform');
    // const header = document.getElementById('home');
    // let lastScrollTop = 0;
    // const delta = 5;
    // $(window).on('scroll', () => {
    //   const nowScrollTop = $(window).scrollTop();
    //   if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
    //     transform(header, {
    //       translate: [0, nowScrollTop / 3, 0],
    //     });
    //     lastScrollTop = nowScrollTop;
    //   }
    // });
  }

  render() {
    return (
        <div id="home" className="home-container" data-parallax="active">
          <div className="home-container-image">
            <img src="http://i67.tinypic.com/epq0ck.jpg" />
          </div>
          <div className="sections-container">
            <div className="section section-basic">
              <div className="container">
                Lala
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;