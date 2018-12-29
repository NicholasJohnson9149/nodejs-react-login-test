import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Login from './login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuth: false,
      authUser: '',
    };

    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
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
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      alert('Please use Alphanumerical values for username and password!');
    }
  }

  loginUser(e) {
    e.preventDefault();
    const validationRegex = /^[a-zA-Z0-9]+$/;
    
    if (this.state.username.match(validationRegex) && this.state.password.match(validationRegex)) {
      axios.get('/validate/', {
        params: {      
          username: this.state.username,
          password: this.state.password
        }
      })
      .then((response) => {
        console.log(response);
        this.setState({ authUser: response.data.username, isAuth: true });
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      alert('Please use Alphanumerical values for username and password!');
    }
  }

  render() {
    return (
      <Router>
        <div>
        <Link to="/login/">Login</Link>
        <span> </span>
        <Link to="/register/">Register</Link>
        <span> </span>
        <Link to="/profile/">Profile</Link>        

        <Route path="/login/" render={props => <Login 
          loginUser={this.loginUser} 
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          />} 
        />
        <Route path="/register/" render={props => <Register 
          registerUser={this.registerUser} 
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          />}
        />
        <Route path="/profile/" render={props => <Profile 
          isAuth={this.state.isAuth}
          authUser={this.state.authUser}
          />} 
        />
        </div>
      </Router>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
