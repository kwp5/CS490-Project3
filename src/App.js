import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

function App(props) {
  const { name } = props;
  const { email } = props;
  return (
    <div id="text" className="textcenter">
      {name}
      {email}
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
