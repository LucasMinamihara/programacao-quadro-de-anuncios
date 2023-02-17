const logarUsuario = (req, res) => {
  // PEGAR O E-MAIL E SENHA
  res.send("Logar usuário");
};

const registrarUsuario = (req, res) => {
  // salvar os dados no banco de dados
  res.send("Registrar usuário");
};

export { logarUsuario, registrarUsuario };
