import './Technologies.scss';
import React, {Component} from 'react';

const technologies = [
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },
  {
    name: "Product Name",
    imgSrc: "http://i63.tinypic.com/2qtisrm.png",
    description: "Short description of the product here" +
    "Short description of the product here" +
    "Short description of the product here"
  },

];

class Technologies extends Component {

  render() {
    return (
        <div className="tech-container">
          <div className="tech-container-title">
            Tehnologii Folosite
          </div>
          <div className="tech-container-desc">
            Short description of the used technologies
          </div>
          <div>
              {technologies.map((element, index) =>
                  (

                        <div className="tech-table-container">
                          <div className="tech-card">
                            <div className="tech-card__img">
                              <img src={element.imgSrc}/>
                            </div>
                            <div className="tech-card__desc">
                              <div className="tech-name">
                                {element.name}
                              </div>
                              <div className="tech-details">
                                {element.description}
                              </div>
                            </div>
                          </div>
                        </div>
                  )
              )}
          </div>
        </div>
    );
  }
}

export default Technologies;