import jwt from "jsonwebtoken";

export function validate(req, res, next) {
  const auth = req.header("authorization");
  if (!auth) {
    res.status(401).send("Acesso negado");
  } else {
    const parts = auth.split(" ");
    const [scheme, token] = parts;
    if (!token) {
      res.status(401).send("Acesso negado");
    }
    if (scheme !== "Bearer") {
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
  }
}
