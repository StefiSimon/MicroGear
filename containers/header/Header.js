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
                <img src="https://portfolios.kpu.ca/artefact/file/download.php?file=92121&view=37215https://portfolios.kpu.ca/artefact/file/download.php?file=92121&view=37215" />
              </a>
              <div className="icon header-container-button" onClick={() => this.toggleMenu('toggle')}>
                <div className="icon-burger">
                </div>
              </div>
            </div>

            <div className="header-container-menu">
                <ul className="header-container-menu-desktop">
                  <li className="link"> Despre </li>
                  <li className="link"> Inscriere </li>
                  <li className="link"> Program </li>
                  <li className="link"> Tehnologii </li>
                  <li className="link"> Contact </li>
                </ul>
                <ul className="header-container-menu-mobile" onMouseLeave={() => this.toggleMenu('close')} onClick={() => this.toggleMenu('close')}>
                  <li className="link"> Despre </li>
                  <li className="link"> Inscriere </li>
                  <li className="link"> Program </li>
                  <li className="link"> Tehnologii </li>
                  <li className="link"> Contact </li>
                </ul>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;