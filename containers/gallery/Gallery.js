import React, {Component} from 'react';
import './Gallery.scss';

const images = [
  {
    src: "http://i63.tinypic.com/2qtisrm.png",
  },
  {
    src: "http://cdn1.aradon.ro/2014/11/Sfantul-Andrei.jpg",
  },
]


class Gallery extends Component {
  componentDidMount() {
    let tabindex = 1;
    $(document).ready(function () {
      let windowWidthInit = $(".slider-container").width(),
          slides = $(".slider-container .slide").length,
          move = "";
      $(".slider-container").hover(function () {
        if (windowWidthInit > 700) {
          $(".slider-container .icon").fadeToggle();
        }
      });
      $(".slide").css({"width": windowWidthInit});

      $(".slider-container .icon").click(function () {
        let windowWidth = $(".slider-container").width();
        if ($(this).attr("id") === "right") {
          if (tabindex === slides) {
            tabindex = 1;
            move = "+=" + windowWidth * (slides - 1);
          } else {
            tabindex = tabindex + 1;
            move = "-=" + windowWidth;
          }
        } else {
          if (tabindex === 1) {
            tabindex = slides;
            move = "-=" + windowWidth * (slides - 1);
          } else {
            tabindex = tabindex - 1;
            move = "+=" + windowWidth;
          }
        }
        $(".slider-content").animate({left: move});
      });

    });
    $(window).resize(function () {
      var windowWidth = $(".slider-container").width();
      $(".slide").css({"width": windowWidth});
    });
  }

  render() {
    return (
        <div className="gallery-container">
          <div className="gallery-container-title">
            Galerie Foto
          </div>
          <div className="gallery-container-desc">
            Cateva dintre pozele de la editia trecuta-Aprilie 2016
          </div>

            <div className="slider-container">
              <div className="slider-container-content">
              <div id="left" className="icon icon-prev"></div>
              <div id="right" className="icon icon-next"></div>
              <div className="slider-content">
                {images.map((image) =>
                    (<div className="slide">
                      <img src={image.src} />
                    </div>)
                )}
              </div>
            </div>
            </div>
        </div>
    )
  }
}

export default Gallery;