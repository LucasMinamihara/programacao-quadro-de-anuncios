import { useState } from "react";
import classes from "./Logar.module.css";

function Logar() {
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");

  function conferirDados(e) {
    e.preventDefault();

    setSenha("");
    setUsuario("");
  }

  return (
    <div className={classes.container}>
      <p className={classes.textoLogin}>Login</p>
      <form onSubmit={conferirDados} className={classes.formulario}>
        <input
          placeholder="Nome de usuário"
          onChange={(e) => setUsuario(e.target.value)}
          value={usuario}
        ></input>
        <input
          placeholder="Sua senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        ></input>
        <button>Logar!</button>
      </form>
      <p className={classes.criarConta}>Clique aqui para criar uma conta</p>
    </div>
  );
}

export default Logar;
