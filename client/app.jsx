import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <input type="text" name="password" onClick={(e) => {handlePasswordChange(e)}}/>
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

        <Route path="/login/" component={Login} />
        <Route path="/register/" render={props => <Register 
          registerUser={this.registerUser} 
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          />} />
        <Route path="/profile/" component={Profile} />
        </div>
      </Router>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
