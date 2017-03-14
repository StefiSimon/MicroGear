import './Technologies.scss';
import React, {Component} from 'react';

const technologies = [
  {
    name: "Arduino",
    imgSrc: "http://i68.tinypic.com/18dn9s.jpg",
    description: "Platforma Arduino este open-source si usor de folosit"
  },
  {
    name: "Senzoristica",
    imgSrc: "http://i63.tinypic.com/bjaoer.png",
    description: "Adunarea informatiilor despre mediul inconjurator"
  },
  {
    name: "Robotica",
    imgSrc: "http://i65.tinypic.com/2q80jd4.jpg",
    description: "Cu pasi mici ne indreptam spre viitor"
  },
  {
    name: "3D printing",
    imgSrc: "http://i66.tinypic.com/296g1gh.png",
    description: "Mai mult decat un hobby"
  }
];

class Technologies extends Component {

  render() {
    return (
        <div className="tech-container" id="tehnologii">
          <div className="tech-container-title">
            Tehnologii Folosite
          </div>
          <div className="tech-container-desc">
            Cateva dintre tehnologiile pe care le vom folosi in cadrul cursurilor
          </div>
          <div>
            {technologies.map((element, index) =>
                (

                    <div className="tech-table-container" id="tehnologii">
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