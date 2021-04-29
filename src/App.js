import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grouping from './AddGroup.js';

const [groupData, setGroupData] = useState([]);
function sendInfo(email) {
  fetch('/addclass', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
      email: { email },
    }),
  });
}

function App(props) {
  const { name } = props;
  const { email } = props;
  const url = '/invite?email=' + email;
  fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: { name },
      email: { email },
    }),
  });

  function getInfo() {
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
  
  getInfo();

  return (
    <div>
      <div id="text" className="login text head padding">
        {name}
        <br />
        {email}
  
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link class="login" to="/">Home</Link>
                </li>
                <li>
                  <Link class="login" to="/add">Add a class</Link>
                </li>
                <li>
                  <Link class="login" to="/grouping">Form a group</Link>
                </li>
              </ul>
            </nav>
  
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/add">
                <Add email={email} />
              </Route>
  
              <Route path="/grouping">
                <Grouping />
              </Route>
  
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <div>
          {groupData}
        </div>
      </div>
      <div>
        <footer class="footer-text">
          <p>Made By: Kyle Partyka, Maamon Sakar, Peter Tran, Samuel Muller</p>
          <a href="https://github.com/kwp5/CS490-Project3">
            <img
              src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
              width="75"
              height="75"
              alt="Github logo"
            ></img>
          </a>
        </footer>
      </div>
    </div>
  );
}

function Home() {
  return <h3>Welcome to Study Dates</h3>;
}

function Add(props) {
  const { email } = props;
  return (
    <form class="form">
      <div>Please input your course information.</div>

      <div>
        <label htmlFor="course_name">Course name:</label>
        <input type="text" id="course_name" name="course_name" required />
        <br />
      </div>

      <div>
        <label htmlFor="course_section">Course section:</label>
        <input type="text" id="course_section" name="course_section" required />
        <br />
      </div>

      <div>
        <label htmlFor="start_time">Start time:</label>
        <input type="time" id="start_time" name="start_time" step="2" required />
        <br />
      </div>

      <div>
        <label htmlFor="end_time">End time:</label>
        <input type="time" id="end_time" name="end_time" step="2" required />
        <br />
      </div>

      <div>
        <input type="radio" id="dayChoice0" name="day" value="0" defaultChecked="checked" />
        <label htmlFor="dayChoice0">Sunday</label>

        <input type="radio" id="dayChoice1" name="day" value="1" />
        <label htmlFor="dayChoice1">Monday</label>

        <input type="radio" id="dayChoice2" name="day" value="2" />
        <label htmlFor="dayChoice2">Tuesday</label>

        <input type="radio" id="dayChoice3" name="day" value="3" />
        <label htmlFor="dayChoice3">Wednesday</label>

        <input type="radio" id="dayChoice4" name="day" value="4" />
        <label htmlFor="dayChoice4">Thursday</label>

        <input type="radio" id="dayChoice5" name="day" value="5" />
        <label htmlFor="dayChoice5">Friday</label>

        <input type="radio" id="dayChoice6" name="day" value="6" />
        <label htmlFor="dayChoice6">Saturday</label>
      </div>
      
      <div>
        <button onclick={() => sendInfo(email)}>Submit</button>
      </div>
    </form>
  );
}
App.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
App.defaultProps = {
  name: '',
  email: '',
};

export default App;
