import React from 'react';
import { useFetchUsersQuery } from '../utils/usersApi';

const UsersDashboard = ({ onEdit }) => {
  const { data, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.data.map((user) => (
        <div key={user.id} className="p-4 border" onClick={() => onEdit(user)}>
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersDashboard;
