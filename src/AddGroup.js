import React, { useState, useRef } from 'react';
import './Login.css';
import fetch from 'isomorphic-fetch';

export default function Grouping() {
  const inputRef = useRef(null);
  const [groupData, setGroupData] = useState([]);
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
      });
  
  }
  
  var divStyle = {
  color: 'RED',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' 
};
  
console.log(groupData);
  return (
    <div>
      <label for="invUser">User's Email:</label>
      <input ref={inputRef} type="text" name="new_email" />
      <br />
      <button type="button" onClick={inviteUser}>
        Add to Group
      </button>
      <div style={divStyle}> User is In classes: {groupData} </div>
    </div>
  );
}


