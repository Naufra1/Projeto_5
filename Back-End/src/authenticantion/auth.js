import jwt from "jsonwebtoken";

export function validate(req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Acesso negado");
  } else {
    try {
      const verified = jwt.verify(token, process.env.SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).send("Token inválido");
    }
  }
};
