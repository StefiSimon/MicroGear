import React, {Component} from 'react';
import './Schedule.scss';


const makeCourse = (desc, data) => {
  return { desc, data };
}

const beginners = [
  makeCourse("Curs Pilot", "31 Martie - 2 Aprilie"),
  makeCourse("Aprofundare limbaj Arduino", "7 - 9 Aprilie"),
  makeCourse("LCD Text", "14 - 16 Aprilie"),
  makeCourse("Multifunction Shield", "21 - 23 Aprilie"),
  makeCourse("3D Printing", "28 - 30 Aprilie")
];
const advanced1 = [
  makeCourse("Curs pilot", "31 Martie - 2 Aprilie"),
  makeCourse("Să ne aprindem beculetele", "31 Martie - 2 Aprilie"),
  makeCourse("Senzor ultrasonic", "7 - 9 Aprilie"),
  makeCourse("Sunet si lumina", "7 - 9 Aprilie"),
  makeCourse("Matrice LED si joystick", "14 - 16 Aprilie")
];
const advanced2 = [
  makeCourse("Decolarea!", "14 - 16 Aprilie"),
  makeCourse("Senzor sunet Infrared", "21 - 23 Aprilie"),
  makeCourse("IR Sensor", "21 - 23 Aprilie"),
  makeCourse("3D Printing", "28 - 30 Aprilie"),
  makeCourse("Q&A", "28 - 30 Aprilie")
]

class Course extends Component {
  render() {
    const { desc, data} = this.props.data;
    return (
        <table className="course">
          <tr className="icon icon-gears"></tr>
          <tr className="course__desc course__title">{desc}</tr>
          <tr className="course__desc course__detalii">{data}</tr>
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
                  {advanced2.map(dataToCourse)}
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
