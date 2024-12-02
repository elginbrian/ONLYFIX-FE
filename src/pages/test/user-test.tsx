import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/user-service";
import { User } from "../../types/user";

const UserTest: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        setError("Failed to fetch users");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Test Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            <strong>{user.username}</strong> - {user.email} ({user.account_type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTest;
