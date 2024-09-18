import React, { useState } from "react";
import UserModal from "./userModal";

const UsersDashboard = ({ users, handleEditUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => openEditModal(user)}
          className="p-4 border shadow hover:cursor-pointer hover:font-semibold"
        >
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
      ))}

      {isModalOpen && (
        <UserModal
          user={selectedUser}
          onClose={() => closeEditModal()}
          handleEditUser={handleEditUser}
        />
      )}
    </div>
  );
};

export default UsersDashboard;
