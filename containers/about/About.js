import React, {Component} from 'react';
import './About.scss';


class Card extends Component {
  render() {
    const {name, imgSrc, role} = this.props;
    return (
        <div className="card">
          <img className="card-image" src={imgSrc}/>
          <div className="card-desc">

            <div className="card-desc__name">{name}</div>
            <div className="card-desc__role">{role}</div>
          </div>
        </div>
    );
  }
}

const dummy = [
  {
    name: "Andrei Apostol",
    imgSrc: "http://i68.tinypic.com/2mxt6o.jpg",
    role: "Coordonator Departament Tehnic & Trainer",
  }, {
    name: "Robert Voiculescu",
    imgSrc: "http://i67.tinypic.com/20rn2wi.jpg",
    role: "Coordonator Departament Promovare",
  }, {
    name: "Dasca Ioana",
    imgSrc: "http://i66.tinypic.com/9s72q1.jpg",
    role: "Manager Proiect"
  },
  {
    name: "Vlad Cristia",
    imgSrc:"http://i68.tinypic.com/16ga5qf.jpg",
    role: "Trainer"
  },
  {
    name: "Alexandru Mitan",
    imgSrc:"http://i65.tinypic.com/2md08xs.jpg",
    role: "Trainer"
  },
  {
    name: "Andrei Marin",
    imgSrc:"http://i67.tinypic.com/25a0zmc.jpg",
    role: "Trainer"
  },
  {
    name: "Alexandru Fierascu",
    imgSrc:"http://i67.tinypic.com/8z0dox.jpg",
    role: "Trainer"
  },
  {
    name: "Stefania Simon",
    imgSrc:"http://i64.tinypic.com/sl02sh.jpg",
    role: "Voluntar"
  }
];


class About extends Component {
  render() {
    return (
        <div className="about-container" id="about">
          <div className="about-container-title">Despre Noi</div>

          <div className="about-container-description"> MicroGear
            este un proiect comunitar dezvoltat de un grup de studenti
            al carui principal gol este sa revitalizeze pasiunea pentru
            stiinta in randul elevilor. Astfel, oferim in perioada 31 martie - 30 aprilie
            o sesiune de training in domeniile programarii si roboticii.
            Cursurile nu vor urma modelul formal al scolii, ci vor avea o
            atmosfera mai relaxata si mai interactiva, imbinand teoria cu
            practica si utilul cu placutul.
          </div>
          <div className="card-container">
            <div>
              {dummy.map(
                  (e) => (<Card key={e.name} name={e.name} imgSrc={e.imgSrc} role={e.role}/>)
              )}
            </div>
          </div>
        </div>
    );
  }
}

export default About;
