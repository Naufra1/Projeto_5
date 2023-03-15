import { infoUser } from "../controller/userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function admRoute(app) {
  app.get("/adm/info/:id", async (req, res) => {
    const id = req.params.id;
    let user = await infoUser(id);
    if (!user) {
      res.status(404).send({ error: "Usuário não encontrado" });
    }
    res.status(200).send(user);
  });
}
