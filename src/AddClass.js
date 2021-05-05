import React, { useState, useRef } from 'react';
import './Login.css';
import fetch from 'isomorphic-fetch';

export default function Add(props) {
  const { email } = props;
  const [course, setCourse] = useState();
  const [section, setSection] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [day, setDay] = useState();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    
    
    console.log(course);
    console.log(section);
    console.log(startTime);
    console.log(endTime);
    console.log(day);
    
    alert(`Submitted new course: ${course}`)
  }
  
  return (
    <form class="form" onSubmit={handleSubmit}>
      <div>Please input your course information.</div>

      <div>
        <label htmlFor="course_name">Course name:</label>
        <input type="text" id="course_name" name="course_name" required onChange={event => setCourse(event.target.value)}/>
        <br />
      </div>

      <div>
        <label htmlFor="course_section">Course section:</label>
        <input type="text" id="course_section" name="course_section" required onChange={event => setSection(event.target.value)}/>
        <br />
      </div>

      <div>
        <label htmlFor="start_time">Start time:</label>
        <input type="time" id="start_time" name="start_time" step="1" required onChange={event => setStartTime(event.target.value)}/>
        <br />
      </div>

      <div>
        <label htmlFor="end_time">End time:</label>
        <input type="time" id="end_time" name="end_time" step="1" required onChange={event => setEndTime(event.target.value)}/>
        <br />
      </div>

      <div>
        <input type="radio" id="dayChoice0" name="day" value="0" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice0">Sunday</label>

        <input type="radio" id="dayChoice1" name="day" value="1" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice1">Monday</label>

        <input type="radio" id="dayChoice2" name="day" value="2" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice2">Tuesday</label>

        <input type="radio" id="dayChoice3" name="day" value="3" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice3">Wednesday</label>

        <input type="radio" id="dayChoice4" name="day" value="4" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice4">Thursday</label>

        <input type="radio" id="dayChoice5" name="day" value="5" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice5">Friday</label>

        <input type="radio" id="dayChoice6" name="day" value="6" onChange={event => setDay(event.target.value)}/>
        <label htmlFor="dayChoice6">Saturday</label>
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}