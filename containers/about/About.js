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

for (var i = 0; i < 10; i++) {
    dummy.push({
        name: "Alex" + i,
        imgSrc: "http://i2.kym-cdn.com/entries/icons/facebook/000/012/443/Naamloos-2_bewerkt-1.jpg",
        role: "middle-end-dev",}
    );
}

class About extends Component {
    render() {
        return(
            <div className="about__container">
                <h1 className="about__title">About Us</h1>

                <div className="about__para">Cloudbase Solutions is a privately held company committed to cloud computing and interoperability, having two offices in Romania (Timisoara and Iasi) and one soon in the USA.</div>
                <div className="about__para">Our vision is to change the way the world sees the OpenStack community by opening it up to the Windows world. We believe in the opportunities given by the interaction between heterogeneous systems, which switches the focus from limited technological options to a broad range of choices available at the touch of a button.</div>
                <div className="about__para">Which is why we made it our company mission to bridge the worlds of modern enterprise and cloud computing by bringing OpenStack to Windows based infrastructures. This effort starts with developing and maintaining all the crucial Windows and Hyper-V OpenStack components and culminates with a product range which includes orchestration for Hyper-V, SQL Server, Active Directory, Exchange and SharePoint Server via Juju charms and Heat templates.</div>
                <div className="about__para">Furthermore, to solve the perceived complexity of OpenStack deployments, we developed v-magine, bringing a reliable, fast and easy bare-metal deployment model to hybrid and multi hypervisor OpenStack clouds with mixed compute, SDN and storage requirements, ranging from proof of concepts to large scale infrastructures.</div>
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
