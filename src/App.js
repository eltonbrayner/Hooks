import React, { useState } from "react";
import "bootswatch/dist/materia/bootstrap.min.css";

import UserTable from "./views/UserTable";
import AddUser from "./views/AddUser";
import EditUser from "./views/EditUser";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    console.log(users.filter((user) => user.id !== id));
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Usuários</h1>
      <div className="row">
        {editing ? (
          <div className="col">
            <h2>Editar Usuário</h2>
            <EditUser
              editRow={editRow}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className="col">
            <h2>Adicionar Usuário</h2>
            <AddUser Action={addUser} />
          </div>
        )}
        <div className="col">
          <h2>Visualizar Usuários</h2>
          <UserTable data={users} delUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
