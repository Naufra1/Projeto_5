import {
  getProfissional,
  getRisco,
  getSintomas,
  infoUser,
  registerUser,
  sendInfo,
  validateUser,
} from "../controller/userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validate } from "../authentication/auth.js";

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

    if (!user.data) {
      return res.status(400).send({ error: "A data é obrigatório" });
    }

    if (!user.sexo) {
      return res.status(400).send({ error: "O sexo é obrigatório" });
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
      origin_password: user.password,
    };

    let userExists = await validateUser(user.email);
    if (userExists) {
      return res.status(400).send({ erro: "Usuário já existe" });
    }

    try {
      await registerUser(user);
      return res.status(201).send({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Aconteceu um erro no servidor" });
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
      return res
        .status(200)
        .send({ msg: "Usuário logado com sucesso", user: userExists, token });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Pegando as informações do usuario
  app.get("/user/:id", validate, async (req, res) => {
    let id = req.params.id;
    let user = await infoUser(id);
    if (!user) {
      return res.status(404).send({ error: "Usuário não encontrado" });
    }
    return res.status(200).send(user);
  });
  //Inserindo novos valores do usuario
  app.patch("/user/send/:id", validate, async (req, res) => {
    let id = req.params.id;
    let userInfo = req.body;
    try {
      await sendInfo(userInfo, id);
      return res.status(200).send({ msg: "Dado enviados com sucesso" });
    } catch (err) {
      return res
        .status(404)
        .send({ erro: "Usuário não encontrado", err: { err } });
    }
  });

  app.get("/user/show/sintomas", async (req, res) => {
    try {
      let show = await getSintomas();
      return res.status(200).send({ msg: "Dado enviados com sucesso", show });
    } catch (err) {
      return res
        .status(404)
        .send({ erro: "Usuário não encontrado", err: { err } });
    }
  });

  app.get("/user/show/risco", async (req, res) => {
    try {
      let show = await getRisco();
      return res.status(200).send({ msg: "Dado enviados com sucesso", show });
    } catch (err) {
      return res
        .status(404)
        .send({ erro: "Usuário não encontrado", err: { err } });
    }
  });

  app.get("/user/show/prof", async (req, res) => {
    try {
      let show = await getProfissional();
      return res.status(200).send({ msg: "Dado enviados com sucesso", show });
    } catch (err) {
      return res
        .status(404)
        .send({ erro: "Usuário não encontrado", err: { err } });
    }
  });
}
