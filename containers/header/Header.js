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
                <img src="http://i68.tinypic.com/f10b4w.png" />
              </a>
              <div className="header-container-button" onClick={() => this.toggleMenu('toggle')}>
                <div className="icon icon-burger">
                </div>
              </div>
            </div>

            <div className="header-container-menu">
                <ul className="header-container-menu-desktop">
                  <li className="link">
                    <span className="icon icon-info"></span> Despre
                  </li>
                  <li className="link">
                    <span className="icon icon-sign-in"></span> Inscriere
                  </li>
                  <li className="link">
                    <span className="icon icon-calendar"></span> Program
                  </li>
                  <li className="link">
                    <span className="icon icon-tools"></span> Tehnologii
                  </li>
                  <li className="link">
                    <span className="icon icon-contact"></span> Contact
                  </li>
                </ul>

                <ul className="header-container-menu-mobile" onMouseLeave={() => this.toggleMenu('close')} onClick={() => this.toggleMenu('close')}>
                  <li className="link">
                    <span className="icon icon-info"></span> Despre
                  </li>
                  <li className="link">
                    <span className="icon icon-sign-in"></span> Inscriere
                  </li>
                  <li className="link">
                    <span className="icon icon-calendar"></span> Program
                  </li>
                  <li className="link">
                    <span className="icon icon-tools"></span> Tehnologii
                  </li>
                  <li className="link">
                    <span className="icon icon-contact"></span> Contact
                  </li>
                </ul>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;