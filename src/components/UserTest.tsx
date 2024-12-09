"use client";
import React, { useEffect, useState } from "react";
import { User } from "../types/user-type";
import userService from "../services/user-service";

const UserPageTest: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers();
        setUsers(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">User List</h2>
      <ul className="mt-2">
        {users.map((user) => (
          <li key={user.user_id} className="border-b py-2">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Account Type:</strong> {user.account_type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPageTest;
