"use client";
import "../../../App.css";
import React, { useEffect, useState } from "react";
import { User } from "../../../types/user-type";
import { getAllUsers, updateUser } from "../../../services/user-service";

const UserPageTest: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [updatedUsername, setUpdatedUsername] = useState<string>("");
  const [updatedEmail, setUpdatedEmail] = useState<string>("");
  const [updatedAccountType, setUpdatedAccountType] = useState<"technician" | "superadmin" | "customer">("technician");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(
          users.map((user) => ({
            ...user,
            account_type: user.account_type as "technician" | "superadmin" | "customer", // Ensure the account_type matches
          }))
        );
      } catch (error: any) {
        setError(error.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateClick = (user: User) => {
    setSelectedUser(user);
    setUpdatedUsername(user.username);
    setUpdatedEmail(user.email);
    setUpdatedAccountType(user.account_type);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (selectedUser) {
      const updatedUserData = {
        username: updatedUsername,
        email: updatedEmail,
        account_type: updatedAccountType,
      };

      try {
        const updatedUser = await updateUser(selectedUser.user_id, updatedUserData);
        setUsers(users.map((user) => (user.user_id === selectedUser.user_id ? updatedUser : user)));

        setIsUpdateModalOpen(false);
      } catch (error: any) {
        setError(error.message || "Failed to update user.");
      }
    }
  };

  const handleModalClose = () => {
    setIsUpdateModalOpen(false);
  };

  if (loading) return <p className="text-center text-lg text-gray-600">Loading users...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">User List</h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full table-auto text-left bg-white border-separate border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <th className="px-6 py-3 text-lg font-medium">Username</th>
              <th className="px-6 py-3 text-lg font-medium">Email</th>
              <th className="px-6 py-3 text-lg font-medium">Account Type</th>
              <th className="px-6 py-3 text-lg font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.user_id} className="border-t hover:bg-gray-100 transition duration-300">
                  <td className="px-6 py-4 border-b border-gray-200">{user.username}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{user.email}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{user.account_type}</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center space-x-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => handleUpdateClick(user)}>
                      View
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400" onClick={() => handleUpdateClick(user)}>
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Update User</h3>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input id="username" type="text" value={updatedUsername} onChange={(e) => setUpdatedUsername(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input id="email" type="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="account_type" className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select id="account_type" value={updatedAccountType} onChange={(e) => setUpdatedAccountType(e.target.value as "technician" | "superadmin" | "customer")} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="technician">Technician</option>
                <option value="superadmin">Superadmin</option>
                <option value="customer">Customer</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600" onClick={handleModalClose}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handleUpdateSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPageTest;
