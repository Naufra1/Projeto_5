import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  changeTxt,
  registerAdmin,
  showUsers,
  validateAdm,
  getTxt
} from "../controller/admController.js";
import { validate } from "../authenticantion/auth.js";

export function admRoute(app) {
  //Cadastro do Administrador
  app.post("/adm/register", async (req, res) => {
    let adm = req.body;
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(adm.password, salt);
    adm = {
      ...adm,
      password: hashPassword,
    };

    let admExists = await validateAdm(adm.email);
    if (admExists) {
      return res.status(400).send({ erro: "Usuário já existe" });
    }

    try {
      await registerAdmin(adm);
      res.status(201).send({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Login do Administrador
  app.post("/adm/login", async (req, res) => {
    const adm = req.body;
    if (!adm.email) {
      return res.status(400).send({ error: "O email é obrigatório" });
    }

    if (!adm.password) {
      return res.status(400).send({ error: "A senha é obrigatório" });
    }

    let admExists = await validateAdm(adm.email);
    if (!admExists) {
      return res.status(400).send({ error: "Email ou senha inválido" });
    }

    const checkPassword = await bcrypt.compare(
      adm.password,
      admExists.password
    );
    if (!checkPassword) {
      return res.status(400).send({ error: "Email ou senha inválido" });
    }

    try {
      const token = jwt.sign(admExists, process.env.SECRET);
      res.status(200).send({
        msg: "Administrador logado com sucesso",
        adm: admExists,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });

  app.patch("/adm/about", async (req, res) => {
    const about = req.body;

    if (!about.text) {
      res.status(400).send({ error: "Digite algum texto" });
    }
    await changeTxt(about);
    res.status(200).send({ msg: "Texto trocado com sucesso" });
  });

  app.get("/about", async (req,res) => {
    let about = await getTxt()
    res.status(200).send({ msg: "Texto obtido com sucesso ", about})
  })

  app.get("/adm/list", async (req, res) => {
    try {
      let lista = await showUsers();
      res.status(200).send({ msg: "Usuários listados com sucesso", lista });
    } catch (erro) {
      console.log(erro);
      res.status(404).send({ err: "Usuários não encontrados" });
    }
  });
}
