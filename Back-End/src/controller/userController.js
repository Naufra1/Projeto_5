import { openDb } from "../infra/configDb.js";

export async function validateUser(email) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Users WHERE email = '${email}'`);
  });
}

export async function registerUser(user) {
  return openDb().then((db) => {
    return db.run(
      `INSERT INTO Users (name,email,password,sintomas,profissional,risco,sexo,idade,municipio) VALUES(?,?,?,?,?,?)`,
      [
        user.name,
        user.email,
        user.password,
        user.sintoma,
        user.profissial,
        user.risco,
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
