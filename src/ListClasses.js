import React, { useState, useRef } from 'react';
import './Login.css';
import fetch from 'isomorphic-fetch';

export default function List() {
  return (
    <div class = "schedule">
      <div>Your Schedule</div>
      
      <h5>Sunday</h5>
      <h5>Monday</h5>
        <div>CS301 002 12:30 pm 1:50pm</div>
        <div>YWCC307 012 2:30 pm 3:50pm</div>
        <div>ACCT117 102 6:00 pm 8:50pm</div>
      <h5>Tuesday</h5>
        <div>CS490 006 12:30 pm 1:50pm</div>
        <div>CS435 006 2:30 pm 3:30pm</div>
        <div>CS435 006 4:00 pm 5:20pm</div>
      <h5>Wednesday</h5>
        <div>CS301 002 12:30 pm 1:50pm</div>
      <h5>Thursday</h5>
        <div>CS490 006 12:30 pm 1:50pm</div>
        <div>CS435 006 4:00 pm 5:20pm</div>
        <div>CS351 102 6:00 pm 8:50pm</div>
      <h5>Friday</h5>
      <h5>Saturday</h5>
    </div>
  );
}