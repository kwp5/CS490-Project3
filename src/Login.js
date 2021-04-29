import React from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import App from './App';
import GoogleLogin from 'react-google-login';
import landingImage from './landing.png';

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
      <header class="head">
        <div class="container">
          <div class="main">
            <div class="main-part">
              <div>
                <h1 class="login title">Study Dates</h1>
                <p class="login text">
                  A new way to view and schedule classes apart from NJIT's website system. Connect
                  your Google account to log in and start scheduling. <br /> Read more below about
                  the features.
                </p>
              </div>
              <div>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={success}
                  cookiePolicy="single_host_origin"
                />
              </div>
              <div>
                <a
                  class="link"
                  href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                >
                  Create An Account
                </a>
              </div>
            </div>
            <div class="main-part">
              <img class="main-img" src={landingImage} alt="Calendar with grad cap" />
            </div>
          </div>
        </div>
      </header>
      <div class="grid-container">
        <div class="grid-item">
          <h4>Create</h4>
          <p>Take your NJIT classes to the next level by adding your classes into our database</p>
        </div>
        <div class="grid-item">
          <h4>Search</h4>
          <p>Go further by pulling classes from our database that other classmates have made</p>
        </div>
        <div class="grid-item">
          <h4>Organize</h4>
          <p>
            Place those classes into your personal calendar and have them organized to be readible
            and concise
          </p>
        </div>
        <div class="grid-item">
          <h4>Connect</h4>
          <p>
            Add other people's schedules to your calendar to find open spots for meeting up or
            studying
          </p>
        </div>
      </div>
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
  );
}
