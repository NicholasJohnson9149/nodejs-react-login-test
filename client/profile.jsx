import React from 'react';

const Profile = ({ isAuth, authUser }) => {
  return ( isAuth && authUser ? (
      <div>
        <h1>Welcome {authUser}!</h1>
      </div>
      ) : (
      <div>Please log in</div>
      )
    );
}

export default Profile;
