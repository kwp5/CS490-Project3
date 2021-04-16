import React from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleLogin from 'react-google-login';

export default function Login() {
  const success = (response) => {
    console.log(response);
    console.log(response.profileObj.name);
    console.log(response.profileObj.email);
    ReactDOM.render(
      <React.StrictMode>
        <App name={response.profileObj.name} email={response.profileObj.email} />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  };

  return (
    <div>
      <div className="login title">
        <h1>Class Calendar</h1>
      </div>
      <div className="login button">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={success}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
}
