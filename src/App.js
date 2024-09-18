import React, { useState } from 'react';
import UsersDashboard from './components/userDashboard';
import UserModal from './components/userModal';
import { useAddUserMutation } from './utils/usersApi';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [addUser] = useAddUserMutation();

  const handleAddUser = async (newUser) => {
    try {
      await addUser(newUser).unwrap();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <UsersDashboard onEdit={handleEditUser} />
      <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddUser}
        user={editingUser}
      />
    </div>
  );
}

export default App;
