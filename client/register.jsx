import React from 'react';

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

export default Register;
