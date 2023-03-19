import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  changeTxt,
  registerAdmin,
  showUsers,
  validateAdm,
  getTxt,
  deleteUser,
  patchUser,
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
      return res.status(400).send({ erro: "Usuário já existe" });
    }

    try {
      await registerAdmin(adm);
      return res.status(201).send({ msg: "Usuário criado com sucesso" });
    } catch (err) {
      return res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Login do Administrador
  app.post("/adm/login", async (req, res) => {
    let adm = req.body;
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

    let checkPassword = await bcrypt.compare(adm.password, admExists.password);
    if (!checkPassword) {
      return res.status(400).send({ error: "Email ou senha inválido" });
    }
    try {
      let token = jwt.sign(admExists, process.env.SECRET, { expiresIn: 86400 });
      return res.status(200).send({
        admExists,
        token: token,
      });
    } catch (err) {
      return res.status(500).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Pega o texto do About
  app.get("/about", async (req, res) => {
    let about = await getTxt();
    return res.status(200).send({ msg: "Texto obtido com sucesso ", about });
  });
  //Modifica o texto do About
  app.patch("/adm/about", validate, async (req, res) => {
    let about = req.body;
    if (!about.text) {
      return res.status(400).send({ error: "Digite algum texto" });
    }
    try {
      await changeTxt(about);
      return res.status(200).send({ msg: "Texto trocado com sucesso", about });
    } catch (err) {
      return res.status(400).send({ error: "Aconteceu um erro no servidor" });
    }
  });
  //Exibi todos os usuarios
  app.get("/adm/list", validate, async (req, res) => {
    try {
      let lista = await showUsers();
      return res
        .status(200)
        .send({ msg: "Usuários listados com sucesso", lista });
    } catch (err) {
      return res.status(404).send({ err: "Usuários não encontrados" });
    }
  });
  //Deletar o usuario escolhido
  app.delete("/adm/delete/:id", validate, async (req, res) => {
    let id = req.params.id;
    try {
      let deletedUser = await deleteUser(id);
      return res
        .status(200)
        .send({ msg: "Usuário deletado com sucesso", deletedUser });
    } catch (err) {
      return res.status(404).send({ erro: "Usuário não encontrado" });
    }
  });
  // Modifica o usuario escolhido
  app.patch("/adm/update/:id", validate, async (req, res) => {
    let id = req.params.id;
    let user = req.body;
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(user.origin_password, salt);
    user = {
      ...user,
      password: hashPassword,
      origin_password: user.origin_password,
    };
    try {
      await patchUser(user, id);
      return res.status(200).send({ msg: "Usuário modificado com sucesso" });
    } catch (err) {
      return res
        .status(404)
        .send({ erro: "Usuário não encontrado1", err: { err } });
    }
  });
}
