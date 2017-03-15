import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return(
        <footer className="footer-container">
          <table className="footer-container-table">
            <tr className="footer-logo">
              <td className="footer-container-image">
                <img src="http://i66.tinypic.com/ild7jc.png" />
              </td>
              <td>
                <a className="footer-icon icon icon-facebook" href="https://www.facebook.com/MicroGearSeminar/" target="_blank"></a>
              </td>
              <td>
                <a className="footer-icon icon icon-email" href="mailto:apo.andrei23@yahoo.com" target="_top"></a>
              </td>
              <td className="footer-logo-text">Inscrie-te cat mai poti!</td>
            </tr>
          </table>
        </footer>
    );
  }
}

export default Footer;