import React, { useState, useRef } from 'react';
import './Login.css';
import fetch from 'isomorphic-fetch';

export default function Grouping() {
  const inputRef = useRef(null);
  const [groupData, setGroupData] = useState([]);
  const [groupSection, setGroupSection] = useState([]);
  const [groupStartTime, setGroupStartTime] = useState([]);
  const [groupEndTime, setGroupEndTime] = useState([]);
  const [groupDay, setGroupDay] = useState([]);
  function inviteUser() {
    const url = '/invite?email=' + inputRef.current.value;
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setGroupData(responseData.class);
        setGroupSection(responseData.section);
        setGroupStartTime(responseData['start time']);
        setGroupEndTime(responseData['end time']);
        setGroupDay(responseData.day);
      });
  }

  console.log(groupData);
  return (
    <div class="form">
      <label for="invUser">User's Email:</label>
      <input ref={inputRef} type="text" name="new_email" />
      <br />
      <button type="button" onClick={inviteUser}>
        Add to Group
      </button>
      <div> {groupData} {groupSection} {groupStartTime} {groupEndTime} {groupDay} </div>
    </div>
  );
}
