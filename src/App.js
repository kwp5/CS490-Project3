import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grouping from './AddGroup.js';
import Add from './AddClass.js';
import List from './ListClasses.js';

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
  const [groupData, setGroupData] = useState([]);
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
                  <Link class="login" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link class="login" to="/add">
                    Add a class
                  </Link>
                </li>
                <li>
                  <Link class="login" to="/grouping">
                    Form a group
                  </Link>
                </li>
                <li>
                  <Link class="login" to="/list">
                    My schedule
                  </Link>
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
              
              <Route path="/list">
                <List />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        </div>
        <div>
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


App.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
App.defaultProps = {
  name: '',
  email: '',
};

export default App;
