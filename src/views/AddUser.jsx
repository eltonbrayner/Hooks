import React, { useState } from "react";

const AddUser = ({ Action }) => {
  //Informações padrão do formulário
  // -> props name = props do state
  // -> props value = props do state
  // -> Fn onChange muda a props do state que por sua vez recebe no value
  const initialFormState = {
    id: null,
    name: "",
    username: "",
  };

  const [user, setUser] = useState(initialFormState);

  //Coleta as informações do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  //Envio informações pro Backend e reseto o formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    //Verifica se os campos usuários e username estão preenchidos
    if (!user.name || !user.username) return;

    //Chama a props Action da função (props.Action ou {Action})
    //E passa o usuário que foi capturado através do handleInputChange
    //E setado com useState na variavel user
    //No arquivo que chama o AddUser é passado uma função para a props Action
    //Aguardando vir através dela o usuário para inserção no banco
    Action(user);
    setUser(initialFormState);
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        value={user.name}
        className="form-control"
        type="text"
        name="name"
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        value={user.username}
        className="form-control"
        type="text"
        name="username"
        onChange={handleInputChange}
      />
      <button className="btn btn-success mt-3">Adicionar Usuário</button>
    </form>
  );
};

export default AddUser;
