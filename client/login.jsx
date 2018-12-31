import React from 'react';

const Login = ({ loginUser, handleUsernameChange, handlePasswordChange }) => {
  return (
    <div>
      <h1>Login</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" name="username" onChange={(e) => {handleUsernameChange(e)}}/>
            <br/>
            <p>Password</p>
            <input type="password" name="password" onChange={(e) => {handlePasswordChange(e)}}/>
          </label>
          <br />
          <button onClick={(e) => {loginUser(e)}}>Login</button>
        </form>
    </div>);
}

export default Login;
