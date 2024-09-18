import React, { useEffect, useState } from "react";
import UsersDashboard from "./components/userDashboard";
import UserModal from "./components/userModal";
import { useFetchUsersQuery } from "./utils/usersApi";

function App() {
  const { data: usersData, isLoading } = useFetchUsersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    if (usersData && usersData.data) {
      setUsers(usersData.data);
    }
  }, [usersData]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleEditUser=(userid,user)=>{
    //EDit user
  };

  return (
    <div className="m-10">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="bg-blue-800 m-2 p-2 text-white rounded-sm"
      >
        Add User
      </button>

      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          handleAddUser={handleAddUser}
        />
      )}

      {isLoading && <p>Loading...</p>}

      <UsersDashboard users={users} handleEditUser={handleEditUser}/>
    </div>
  );
}

export default App;
