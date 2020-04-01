import React from 'react';

const User = ({ name, location, email }) => {
  const { first, last } = name;
  const { city, state } = location;
  return (
    <div>
      <p>
        <strong>Name:</strong> {first} {last}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>State:</strong> {state}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <hr />
    </div>
  );
};

export default User;
