import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserModal = ({ isOpen, onClose, onSubmit, user }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: ''
    }
  });

  
  useEffect(() => {
    if (user) {
      reset({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      });
    }
  }, [user, reset]);

  const submitHandler = (data) => {
    onSubmit(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl mb-4">{user ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
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
              {user ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
