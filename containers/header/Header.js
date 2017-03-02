import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="header-container">
            <div className="header-container-logo">
              <div className="header-container-logo-float">
                <span className="logo">
                  <img src="http://www.ripoffreport.com/d/r1054977-cqdcr3-zl9ur9ddte/gtg.png" />
                </span>
              </div>
            </div>
            <div className="header-container-menu">
                <ul className="header-container-menu-ul">
                  <li className="link"> Despre </li>
                  <li className="link"> Inscriere </li>
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