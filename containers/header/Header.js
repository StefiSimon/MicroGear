import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="header-container">
            <div className="header-container-logo">
              <img src="https://portfolios.kpu.ca/artefact/file/download.php?file=92121&view=37215https://portfolios.kpu.ca/artefact/file/download.php?file=92121&view=37215" />
            </div>
            <div className="header-container-menu">
                <ul className="header-container-menu-ul">
                  <li className="link"> Despre </li>
                  <li className="link"> Inscriere </li>
                  <li className="link"> Tehnologii </li>
                  <li className="link"> Contact </li>
                </ul>

                <div className="header-container-menu-ul-tablet">
                  <div className="icon">
                    <div className="icon-burger"></div>
                  </div>
                </div>

                <div className="header-container-menu-ul-mobile">
                  mobile
                </div>

            </div>
          </div>
        </header>
    );
  }
}

export default Header;