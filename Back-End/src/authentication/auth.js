import jwt from "jsonwebtoken";

export function validate(req, res, next) {
  const auth = req.header("authorization");
  if (!auth) {
    res.status(401).send({ msg: "Token invalido" });
  } else {
    const parts = auth.split(" ");
    const [scheme, token] = parts;
    if (!token) {
      return res.status(401).send({ msg: "Token invalido 1" });
    }
    if (scheme !== "Bearer") {
      return res.status(401).send({ msg: "Token invalido 2" });
    } else {
      try {
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
          if (error) {
            return res.status(401).send({ msg: "Token inválido 3" });
          }
          req.user = decoded.id;
          return next();
        });
      } catch (error) {
        return res.status(401).send("Token inválido 4");
      }
    }
  }
}
