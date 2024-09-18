import React from 'react';

const UsersDashboard = ({ users }) => {
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border">
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersDashboard;
