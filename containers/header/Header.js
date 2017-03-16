import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {

  componentDidMount() {
    let lastScrollTop = 0;
    $(window).on('scroll', () => {
      const nowScrollTop = $(window).scrollTop();
      if (nowScrollTop >= 200) {
        $('.header-container').removeClass('header-transparent');
        $('.header-container').css('width', '100%');
        $('.header-container-menu-mobile').css('margin-right', '200px');
      } else {
        $('.header-container').addClass('header-transparent');
      }
      lastScrollTop = nowScrollTop;
    });
  }

  toggleMenu = (action) => {

    const menu = document.getElementsByClassName("header-container-menu-mobile")[0];
    switch (action) {
      case 'toggle':
        $(menu).slideToggle();
        break;
      case 'close':
        $(menu).slideUp();
        break;
      default:
        break;
    }
  }

  render() {
    const link = "https://docs.google.com/forms/d/e/1FAIpQLScH_B4RXuVMdS3F1Hs9VUDAlAicCxfWvELKsU7NiweBh_Az-Q/viewform";
    return (
        <header className="header">
          <table className="header-container header-transparent">
            <tr>
              <table className="header-container-title">
                <tr>
                  <td>
                    <a className="header-container-logo" href="#home">
                      <img src="http://i68.tinypic.com/2el5ljq.png"/>
                    </a>
                  </td>
                  <td>
                    <div className="header-container-button" onClick={() => this.toggleMenu('toggle')}>
                      <div className="icon icon-arrow-down">
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              <td>
                <table className="header-container-menu">
                  <tr className="header-container-menu-desktop">
                    <td className="header-container-menu-link">
                      <span className="icon icon-info"></span> <a href="#about">Despre</a>
                    </td>
                    <td className="header-container-menu-link">
                      <span className="icon icon-calendar"></span> <a href="#program">Program</a>
                    </td>
                    <td className="header-container-menu-link">
                      <span className="icon icon-tools"></span> <a href="#tehnologii">Tehnologii</a>
                    </td>
                    <td className="header-container-menu-link">
                      <span className="icon icon-photo"></span> <a href="#galerie">Galerie</a>
                    </td>
                    <a target="_blank" href={link}>

                        <td className="header-container-menu-link">
                          <button className="header-container-menu-button signup-button">
                            <span className="icon icon-sign-in"></span>
                            Inscrie-te acum!
                          </button>
                        </td>
                    </a>
                  </tr>

                  <table className="header-container-menu-mobile" onMouseLeave={() => this.toggleMenu('close')}
                         onClick={() => this.toggleMenu('close')}>
                    <tr>
                      <td className="header-container-menu-link"><span className="icon icon-info"></span> <a href="#about">Despre</a></td>
                    </tr>
                    <tr>
                      <td className="header-container-menu-link"><span className="icon icon-calendar"></span> <a href="#program">Program</a></td>
                    </tr>
                    <tr>
                      <td className="header-container-menu-link"><span className="icon icon-tools"></span> <a href="#tehnologii">Tehnologii</a></td>
                    </tr>
                    <tr>
                      <td className="header-container-menu-link"><span className="icon icon-photo"></span> <a href="#galerie">Galerie</a></td>
                    </tr>
                    <tr>
                      <td className="header-container-menu-link">
                        <a target="_blank" href={link}>

                            <button className="header-container-menu-button signup-button">
                              <span className="icon icon-sign-in"></span>
                              Inscrie-te acum!
                            </button>
                        </a>
                      </td>
                    </tr>
                  </table>
                </table>
              </td>
            </tr>
          </table>
        </header>
    );
  }
}

export default Header;
