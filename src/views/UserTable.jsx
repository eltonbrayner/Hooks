import React from "react";

const UserTable = ({ data = 0, delUser, editRow }) => {
  const handleDelete = (id) => {
    //Na função foi add a prop delUser
    //Ela espera retornar o id do usuário
    //esse id vem através dessa função com o metodo onClick
    //O metodo foi chamado dentro de uma função
    //Pra ficar explicito a execução e executar antes do click
    delUser(id);
  };

  const handleEdit = (user) => {
    //Na função foi add a prop delUser
    //Ela espera retornar o id do usuário
    //esse id vem através dessa função com o metodo onClick
    //O metodo foi chamado dentro de uma função
    //Pra ficar explicito a execução e executar antes do click
    editRow(user);
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Username</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el) => {
            return (
              <tr key={el.id}>
                <td className="align-middle">{el.name}</td>
                <td className="align-middle">{el.username}</td>
                <td className="text-center">
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleEdit(el)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td className="text-center" colSpan={3}>
              Sem usuários cadastrados
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
