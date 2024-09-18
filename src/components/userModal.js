import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../utils/usersApi';

const UserModal = ({ onClose, handleAddUser }) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: ''
    }
  });
  const [addUser] = useAddUserMutation();


  const onSubmit = async (data) => {
    try {
      const newUser = await addUser(data).unwrap();
      handleAddUser(newUser);
      onClose();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Add user</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="first_name" className="block">First Name</label>
            <input
              id="first_name"
              type="text"
              {...register('first_name', { required: true })}
              className="border p-2 w-full"
            />
            {errors.first_name && <p className="text-red-500">First name is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="block">Last Name</label>
            <input
              id="last_name"
              type="text"
              {...register('last_name', { required: true })}
              className="border p-2 w-full"
            />
            {errors.last_name && <p className="text-red-500">Last name is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500">Email is required.</p>}
          </div>

          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
