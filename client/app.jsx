import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" name="username" />
            <br/>
            <p>Password</p>
            <input type="text" name="password" />
          </label>
          <br />
          <button>Login</button>
        </form>
    </div>);
}

const Register = ({ registerUser, handleUsernameChange, handlePasswordChange }) => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" name="username" onChange={(e) => {handleUsernameChange(e)}}/>
          <br/>
          <p>Password</p>
          <input type="password" name="pass" onChange={(e) => {handlePasswordChange(e)}}/>
        </label>
        <br />
        <button onClick={(e) => {registerUser(e)}}>Submit</button>
      </form>
    </div>);
}

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>);
}
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuth: false,
    };

    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    console.log(e.target.value);
    this.setState({
      password: e.target.value
    });
  }

  registerUser(e) {
    e.preventDefault();
    const validationRegex = /^[a-zA-Z0-9]+$/;
    
    if (this.state.username.match(validationRegex) && this.state.password.match(validationRegex)) {
      axios.post('/register/', {
        username: this.state.username,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      alert('Please use Alphanumerical values for username and password!');
    }
  }

  loginUser() {

  }

  render() {
    return (
      <Router>
        <div>
        <Link to="/login/">Login</Link>
        <span> </span>
        <Link to="/register/">Register</Link>

        <Route path="/login/" render={props => <Login 
          loginUser={this.loginUser} 
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          />} />
        <Route path="/register/" render={props => <Register 
          registerUser={this.registerUser} 
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          />} />
        <Route path="/profile/" component={Profile} />
        </div>
      </Router>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
