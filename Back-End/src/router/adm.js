import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  changeTxt,
  registerAdmin,
  showUsers,
  validateAdm,
  getTxt,
} from "../controller/admController.js";
import { validate } from "../authentication/auth.js";

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
      return res.status(400).json({ erro: "Usuário já existe" });
    }

    try {
      await registerAdmin(adm);
      return res.status(201).json({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Login do Administrador
  app.post("/adm/login", async (req, res) => {
    let adm = req.body;
    if (!adm.email) {
      return res.status(400).json({ error: "O email é obrigatório" });
    }

    if (!adm.password) {
      return res.status(400).json({ error: "A senha é obrigatório" });
    }

    let admExists = await validateAdm(adm.email);
    if (!admExists) {
      return res.status(400).json({ error: "Email ou senha inválido" });
    }

    let checkPassword = await bcrypt.compare(adm.password, admExists.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "Email ou senha inválido" });
    }
    try {
      delete admExists.password
      let token = jwt.sign(admExists, process.env.SECRET);
      return res.status(200).json({
        adm: admExists,
        token: token,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Pega o texto do About
  app.get("/about", async (req, res) => {
    let about = await getTxt();
    return res.status(200).json({ msg: "Texto obtido com sucesso ", about });
  });
  //Modifica o texto do About
  app.patch("/adm/about", validate, async (req, res) => {
    let about = req.body;
    if (!about.text) {
      return res.status(400).json({ error: "Digite algum texto" });
    }
    try {
      await changeTxt(about);
      return res.status(200).json({ msg: "Texto trocado com sucesso", about });
    } catch (err) {
      return res.status(400).json({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Exibi todos os usuarios
  app.get("/adm/list", validate, async (req, res) => {
    try {
      let lista = await showUsers();
      return res
        .status(200)
        .json({ msg: "Usuários listados com sucesso", lista });
    } catch (erro) {
      console.log(erro);
      return res.status(404).json({ err: "Usuários não encontrados" });
    }
  });
}
