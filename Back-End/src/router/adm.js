import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validateAdm } from "../controller/admController.js";

export function admRoute(app) {
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
}
