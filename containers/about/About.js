import React, { Component } from 'react';
import './About.scss';


class Card extends Component{
    render(){
        const {name, imgSrc, role} = this.props;
        return(
            <div className="card">
                <img src={imgSrc}/>
                <div className="card__desc">
                    <p className="card__name">{name}</p>
                    <p className="card__role">{role}</p>
                </div>
            </div>
        );
    }
}

const dummy = [
    {
        name: "Apo",
        imgSrc: "http://cdn1.aradon.ro/2014/11/Sfantul-Andrei.jpg",
        role: "bauss",
    },{
        name: "Alex",
        imgSrc: "http://i2.kym-cdn.com/entries/icons/facebook/000/012/443/Naamloos-2_bewerkt-1.jpg",
        role: "middle-end-dev",
    },{
        name: "Stefi",
        imgSrc: "http://www.thedailymash.co.uk/images/stories/hipster4254.jpg",
        role: "Doamna Front-end"
    },{
        name: "",
        imgSrc: "",
        role: "Haker",
    }
];

for (var i = 0; i < 30; i++) {
    dummy.push({
        name: "Alex" + i,
        imgSrc: "http://i2.kym-cdn.com/entries/icons/facebook/000/012/443/Naamloos-2_bewerkt-1.jpg",
        role: "middle-end-dev",}
    );
}

class About extends Component {
    render() {
        return(
            <div className="temp-container">
                <h1 className="about__title">About Us</h1>
                <h1 className="about__title">Meet the team!</h1>
                <div className="card-container">
                    {dummy.map(
                        (e) => (<Card key={e.name} name={e.name} imgSrc={e.imgSrc} role={e.role}/>)
                    )}
                </div>
            </div>
        );
    }
}

export default About;
