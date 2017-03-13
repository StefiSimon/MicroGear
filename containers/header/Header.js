import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {

  toggleMenu = (action) => {

    const menu = document.getElementsByClassName("header-container-menu-mobile")[0];
    switch (action) {
      case 'toggle':
        $(menu).slideToggle();
        break;
      case 'close':
        $(menu).slideUp();
        break;
      default: break;
    }
  }

  render() {
    return (
        <header className="header">
          <div className="header-container">

            <div className="header-container-title">
              <a className="header-container-logo" href="#home">
                <img src="http://i68.tinypic.com/2el5ljq.png" />
              </a>
              <div className="header-container-button" onClick={() => this.toggleMenu('toggle')}>
                <div className="icon icon-burger">
                </div>
              </div>
            </div>

            <div className="header-container-menu">
                <ul className="header-container-menu-desktop">
                  <li className="link">
                    <span className="icon icon-info"></span> <a href="#about">Despre</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-sign-in"></span> <a href="#inscriere">Inscriere</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-calendar"></span> <a href="#program">Program</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-tools"></span> <a href="#tehnologii">Tehnologii</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-contact"></span> <a href="#contact">Contact</a>
                  </li>
                </ul>

                <ul className="header-container-menu-mobile" onMouseLeave={() => this.toggleMenu('close')} onClick={() => this.toggleMenu('close')}>
                  <li className="link">
                    <span className="icon icon-info"></span> <a href="#about">Despre</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-sign-in"></span> <a href="#inscriere">Inscriere</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-calendar"></span> <a href="#program">Program</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-tools"></span> <a href="#tehnologii">Tehnologii</a>
                  </li>
                  <li className="link">
                    <span className="icon icon-contact"></span> <a href="#contact">Contact</a>
                  </li>
                </ul>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;