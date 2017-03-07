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
              <a className="header-container-logo">
                <img src="https://scontent.fotp3-2.fna.fbcdn.net/v/t31.0-8/14715450_387428041600877_4956678542402155955_o.png?oh=228f94a935e279ee81e97a24acf9ab25&oe=597073E8" />
              </a>
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