import React, { useState, useEffect } from "react";

const EditUser = ({ currentUser, updateUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user.id, user);
  };

  const handleEdit = () => {
    setEditing(false);
  };

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        className="form-control"
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        className="form-control"
      />
      <button className="btn btn-warning mr-2 mt-2">Update user</button>
      <button onClick={handleEdit} className="btn btn-primary mt-2">
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
