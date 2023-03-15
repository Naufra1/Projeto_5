import {
  infoUser,
  registerUser,
  validateUser,
} from "../controller/userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validate } from "../authenticantion/auth.js";

export function userRoute(app) {
  //Cadastro
  app.post("/user/register", async (req, res) => {
    let user = req.body;

    if (!user.name) {
      return res.status(400).send({ error: "O nome é obrigatório" });
    }

    if (!user.email) {
      return res.status(400).send({ error: "O email é obrigatório" });
    }

    if (!user.password) {
      return res.status(400).send({ error: "A senha é obrigatório" });
    }

    if (!user.sintomas) {
      return res.status(400).send({ error: "A senha é obrigatório" });
    }

    if (!user.profissional) {
      return res.status(400).send({ error: "Escolha a opção de profissão" });
    }

    if (!user.risco) {
      return res
        .status(400)
        .send({ error: "Escolha se é você está em situação de risco" });
    }

    if (!user.idade) {
      return res.status(400).send({ error: "A idade é obrigatório" });
    }

    if (!user.municipio) {
      return res
        .status(400)
        .send({ error: "O município é obrigatório é obrigatório" });
    }

    if (!user.confirmpassword) {
      return res
        .status(400)
        .send({ error: "A confimação da senha é obrigatório" });
    }

    if (user.password !== user.confirmpassword) {
      return res.status(400).send({ error: "As senhas precisam ser iguais" });
    }

    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(user.password, salt);
    user = {
      ...user,
      password: hashPassword,
    };

    let userExists = await validateUser(user.email);
    if (userExists) {
      return res.status(400).send({ erro: "Usuário já existe" });
    }

    try {
      await registerUser(user);
      res.status(201).send({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Login
  app.post("/user/login", async (req, res) => {
    const user = req.body;
    if (!user.email) {
      return res.status(400).send({ error: "O email é obrigatório" });
    }

    if (!user.password) {
      return res.status(400).send({ error: "A senha é obrigatório" });
    }

    let userExists = await validateUser(user.email);
    if (!userExists) {
      return res.status(400).send({ error: "Email ou senha inválido" });
    }

    const checkPassword = await bcrypt.compare(
      user.password,
      userExists.password
    );
    if (!checkPassword) {
      return res.status(400).send({ error: "Email ou senha inválido" });
    }

    try {
      const token = jwt.sign(userExists, process.env.SECRET);
      res
        .status(200)
        .send({ msg: "Usuário logado com sucesso", user: userExists, token });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //pegando as informações do usuario
  app.get("/user/:id", validate, async (req, res) => {
    const id = req.params.id;
    let user = await infoUser(id);
    if (!user) {
      res.status(404).send({ error: "Usuário não encontrado" });
    }
    res.status(200).send(user);
  });
}
