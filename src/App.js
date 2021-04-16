import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import fetch from 'isomorphic-fetch';
import Grouping from './AddGroup.js'

function App(props) {
  const { name } = props;
  const { email } = props;
  

  fetch('/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'user': {name},
    'email': {email}
  })
});
  
  return (
    <div>
      <div id="text" className="textcenter">
        {name}
        {email}
      </div>
      <div>
        <Grouping />
      </div>
    </div>
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
