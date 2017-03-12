import React, { Component } from 'react';
import './Schedule.scss';


const makeCourse = (nr, desc, tip, ora, data, detalii) => {
    return {nr, desc, tip, ora, data, detalii: detalii || "fara detalii"};
}

const beginners = [
    makeCourse("1", "Curs Pilot", "Incepatori", "32 Febr", "10:00 - 11:00",
        "Meet the team, make friends, such and such"),
    makeCourse("2", "Aprofundare limbaj C", "Incepatori", "33 Febr", "11:00 - 12:00",
        "fundamente (variable, structura unui program), blink, serial vs analog"),
    makeCourse("3", "LCD Text", "Incepatori", "34 Febr", "13:00 - 17:00"),
    makeCourse("4", "Timpul Descopera Toate", "Incepatori", "34 Febr", "13:00 - 17:00"),
    makeCourse("5", "Curs printare 3D la Hackerspace", "Incepatori", "34 Febr", "13:00 - 17:00"),
];
const advanced = [
    makeCourse("1", "Curs pilot", "Avansati", "32 Febr", "10:00 - 11:00"),
    makeCourse("2", "Să ne aprindem beculetele", "Avansati", "33 Febr", "11:00 - 12:00"),
    makeCourse("3", "Senzor ultrasonic", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("4", "Senzor temperatura + fotorezistor", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("5", "Matrice led + modul joystick", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("6", "Decolarea!", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("7", "Senzor sunet + aplicație pian", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("8", "IR Sensor", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("9", "Curs printare 3D la Hackerspace", "Avansati", "34 Febr", "13:00 - 17:00"),
    makeCourse("10", "Q&A", "Avansati", "34 Febr", "13:00 - 17:00"),
];

class Course extends Component {
    render() {
        const {nr, desc, tip, data, ora, detalii} = this.props.data;
        return (
            <div className="course">
                <div className="course__desc course__nr">{nr}</div>
                <div className="course__desc course__desc">{desc}</div>
                <div className="course__desc course__detalii">{detalii}</div>
                <div className="course__desc course__tip">{tip}</div>
                <div className="course__desc course__data">{data}</div>
                <div className="course__desc course__ora">{ora}</div>
            </div>
        );
    }
}

const dataToCourse = (elem) => <Course data={elem} key={elem.tip + elem.nr}/> ;

class Schedule extends Component {
    render() {
        return(
            <div className="schedule__container">
                <h1 className="schedule__title">Schedule</h1>

                <div className="schedule__para">Content content description description.</div>
                <div className="timetable-container">
                    <div className="timetable timetable__beginners">
                        {beginners.map(dataToCourse)}
                        <div className="filler-photo">
                            <img src="https://thumbs.dreamstime.com/z/diet-woman-eating-vegetable-salad-26750865.jpg" />
                        </div>
                    </div>
                    <div className="timetable timetable__advanced">
                        {advanced.map(dataToCourse)}
                    </div>
                </div>
                <div className="clearfix">
                </div>
            </div>
        );
    }
}

export default Schedule;
