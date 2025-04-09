import React from "react";

const UserSwitcher = ({ users, currentUser, setUser }) => {
  return (
    <select
    className = "px-2 py-1 border border-gray-300 ml-4 mt-6  "
      value={currentUser?._id || ""}
      onChange={(e) => setUser(users.find((u) => u._id === e.target.value))}
    >
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.username}
        </option>
      ))}
    </select>
  );
};

export default UserSwitcher;