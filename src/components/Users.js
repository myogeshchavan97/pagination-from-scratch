import React from 'react';
import { USERS_PER_PAGE } from '../utils/constants';
import User from './User';

const Users = ({ users, page }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  return (
    <React.Fragment>
      {selectedUsers.map(user => (
        <User key={user.login.uuid} {...user} />
      ))}
    </React.Fragment>
  );
};

export default Users;
