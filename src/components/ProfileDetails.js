import React from 'react';

const ProfileDetails = (props) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
      <img src={props.user.avatar} alt={props.user.name} />
    </div>
  );
};

export default ProfileDetails;
