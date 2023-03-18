import { openDb } from "../infra/configDb.js";

export async function validateUser(email) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Users WHERE email = '${email}'`);
  });
}

export async function registerUser(user) {
  return openDb().then((db) => {
    return db.run(
      `INSERT INTO Users (name,surname,email,password,origin_password,sexo,idade,municipio) VALUES(?,?,?,?,?,?,?,?)`,
      [
        user.name,
        user.surname,
        user.email,
        user.password,
        user.origin_password,
        user.sexo,
        user.idade,
        user.municipio,
      ]
    );
  });
}

export async function infoUser(id) {
  return openDb().then((db) => {
    return db.get(
      `SELECT name,email,sintomas,profissional,risco,sexo,idade,municipio FROM Users WHERE id = '${id}'`
    );
  });
}
