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
              <div className="header-container-logo" href="#home">
                <a href="http://tinypic.com?ref=f10b4w" target="_blank"><img src="http://i68.tinypic.com/f10b4w.png" /></a>
              </div>
              <div className="header-container-button" onClick={() => this.toggleMenu('toggle')}>
                <div className="icon icon-burger">
                </div>
              </div>
            </div>

            <div className="header-container-menu">
                <ul className="header-container-menu-desktop">
                  <li className="link">
                    Despre <span className="icon icon-info"></span>
                  </li>
                  <li className="link">
                    Inscriere <span className="icon icon-sign-in"></span>
                  </li>
                  <li className="link">
                    Program <span className="icon icon-calendar"></span>
                  </li>
                  <li className="link">
                    Tehnologii <span className="icon icon-tools"></span>
                  </li>
                  <li className="link">
                    Contact <span className="icon icon-contact"></span>
                  </li>
                </ul>

                <ul className="header-container-menu-mobile" onMouseLeave={() => this.toggleMenu('close')} onClick={() => this.toggleMenu('close')}>
                  <li className="link">
                    Despre <span className="icon icon-info"></span>
                  </li>
                  <li className="link">
                    Inscriere <span className="icon icon-sign-in"></span>
                  </li>
                  <li className="link">
                    Program <span className="icon icon-calendar"></span>
                  </li>
                  <li className="link">
                    Tehnologii <span className="icon icon-tools"></span>
                  </li>
                  <li className="link">
                    Contact <span className="icon icon-contact"></span>
                  </li>
                </ul>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;