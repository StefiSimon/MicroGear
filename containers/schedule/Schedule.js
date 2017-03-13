import React, {Component} from 'react';
import './Schedule.scss';


const makeCourse = (nr, desc, tip, ora, data, detalii) => {
  return {nr, desc, tip, ora, data, detalii: detalii || "fara detalii"};
}

const beginners = [
  makeCourse("1", "Curs Pilot", "Incepatori", "32 Febr", "10:00 - 11:00",
      "Meet the team"),
  makeCourse("2", "Aprofundare limbaj C", "Incepatori", "33 Febr", "11:00 - 12:00",
      "Fundamente (variable, structura unui program)"),
  makeCourse("3", "LCD Text", "Incepatori", "34 Febr", "13:00 - 17:00"),
  makeCourse("4", "Timpul Descopera Toate", "Incepatori", "34 Febr", "13:00 - 17:00"),
  makeCourse("5", "Curs printare 3D la Hackerspace", "Incepatori", "34 Febr", "13:00 - 17:00"),
  makeCourse("6", "Decolarea!", "Avansati", "34 Febr", "13:00 - 17:00"),
  makeCourse("7", "Senzor sunet + aplicație pian", "Avansati", "34 Febr", "13:00 - 17:00"),
  makeCourse("8", "IR Sensor", "Avansati", "34 Febr", "13:00 - 17:00"),
  makeCourse("9", "Curs printare 3D la Hackerspace", "Avansati", "34 Febr", "13:00 - 17:00"),
  makeCourse("10", "Q&A", "Avansati", "34 Febr", "13:00 - 17:00")
];
const advanced = [
  makeCourse("1","Curs pilot", "Avansati", "32 Febr", "10:00 - 11:00"),
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
        <table className="course">
          <tr className="icon icon-gears"></tr>
          <br />
          <br />
          <tr className="course__desc course__title">{desc}</tr>
          <tr className="course__desc course__detalii">{detalii}</tr>
          <tr className="course__desc course__data">{data}</tr>
          <tr className="course__desc course__ora">{ora}</tr>
        </table>
    );
  }
}

const dataToCourse = (elem) => <Course data={elem} key={elem.tip + elem.nr}/>;

class Schedule extends Component {
  render() {
    return (
        <div className="schedule-container" id="program">
          <div className="schedule-container-title">Programul Cursurilor</div>

          <table className="timetable-container">
            <th>
                <span>Incepatori</span>
            </th>
            <th>
              <span>Avansati</span>
            </th>
            <tr>
              <td>
                <div className="timetable timetable__beginners">
                  {beginners.map(dataToCourse)}
                </div>
              </td>
              <td>
                <div className="timetable timetable__advanced">
                  {advanced.map(dataToCourse)}
                </div>
              </td>
            </tr>
          </table>
        </div>

    );
  }
}

export default Schedule;
