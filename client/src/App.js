import React, { useEffect, useState } from "react";
import { getUsers } from "./api";
import TodoList from "./components/TodoList";
import UserSwitcher from "./components/UserSwitcher";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      setCurrentUser(res.data[0]);
    });
  }, []);

  return (
    <div>

      <h1 className="w-full flex-items-center justify-center text-center text-2xl sticky top-0">Todo App</h1>
      <UserSwitcher
        users={users}
        currentUser={currentUser}
        setUser={setCurrentUser}
      />
      {currentUser && <TodoList user={currentUser} users = {users} />}
    </div>
  );
}

export default App;
