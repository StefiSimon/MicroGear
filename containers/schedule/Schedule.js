import React, {Component} from 'react';
import './Schedule.scss';


const makeCourse = (desc, data, ora) => {
  return { desc, data, ora };
}

const beginners = [
  makeCourse("Curs Pilot", "32 Febr", "10:00 - 11:00"),
  makeCourse("Aprofundare limbaj Arduino", "33 Febr", "11:00 - 12:00"),
  makeCourse("LCD Text", "34 Febr", "13:00 - 17:00"),
  makeCourse("Multifunction Shield", "34 Febr", "13:00 - 17:00"),
  makeCourse("3D Printing", "34 Febr", "13:00 - 17:00")
];
const advanced1 = [
  makeCourse("Curs pilot", "32 Febr", "10:00 - 11:00"),
  makeCourse("Să ne aprindem beculetele", "33 Febr", "11:00 - 12:00"),
  makeCourse("Senzor ultrasonic", "34 Febr", "13:00 - 17:00"),
  makeCourse("Sunet si lumina", "34 Febr", "13:00 - 17:00"),
  makeCourse("Matrice LED si joystick", "34 Febr", "13:00 - 17:00")
];
const advanced2 = [
  makeCourse("Decolarea!", "34 Febr", "13:00 - 17:00"),
  makeCourse("Senzor sunet Infrared", "34 Febr", "13:00 - 17:00"),
  makeCourse("IR Sensor", "34 Febr", "13:00 - 17:00"),
  makeCourse("3D Printing", "34 Febr", "13:00 - 17:00"),
  makeCourse("Q&A", "34 Febr", "13:00 - 17:00")
]

class Course extends Component {
  render() {
    const { desc, ora, data} = this.props.data;
    return (
        <table className="course">
          <tr className="icon icon-gears"></tr>
          <tr className="course__desc course__title">{desc}</tr>
          <tr className="course__desc course__detalii">{data}, {ora}</tr>
        </table>
    );
  }
}

const dataToCourse = (elem) => <Course data={elem} />;

class Schedule extends Component {
  render() {
    return (
        <div className="schedule-container" id="program">
          <div className="schedule-container-title">Programul Cursurilor</div>

          <table className="timetable-container">
            <th>
              <div className="timetable-container-title">Incepatori</div>
            </th>
            <th>
              <div className="timetable-container-title">Avansati I</div>
            </th>
            <th>
              <div className="timetable-container-title">Avansati II</div>
            </th>
            <tr>
              <td>
                <div className="timetable timetable__beginners">
                  {beginners.map(dataToCourse)}
                </div>
              </td>
              <td>
                <div className="timetable timetable__advanced-first">
                  {advanced1.map(dataToCourse)}
                </div>
              </td>
              <td>
                <div className="timetable timetable__advanced-second">
                  {advanced1.map(dataToCourse)}
                </div>
              </td>
            </tr>
          </table>
          <div className="timetable-container-mobile">
            <div className="timetable-container-mobile-title">Incepatori</div>
            <div className="timetable timetable__beginners">
              {beginners.map(dataToCourse)}
            </div>
            <div className="timetable-container-mobile-title">Avansati</div>
            <div className="timetable timetable__advanced">
              {advanced1.map(dataToCourse)}
              {advanced2.map(dataToCourse)}
            </div>
          </div>
        </div>

    );
  }
}

export default Schedule;
