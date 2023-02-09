import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from './Router';
import ProfileDetails from './ProfileDetails';

const Profile = (props) => {
  const { id } = useParams();
  const user = users.find((user) => user.id == id);

  return (
    <ProfileDetails user={user} />
  );
};

export default Profile;
