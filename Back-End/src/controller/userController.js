import { openDb } from "../infra/configDb.js";

export async function validateUser(email) {
  return openDb().then((db) => {
    return db.get(
      `SELECT id,name,email,sintomas,profissional,risco,surname,sexo,data,password,covid FROM Users WHERE email = '${email}'`
    );
  });
}

export async function registerUser(user) {
  return openDb().then((db) => {
    return db.run(
      `INSERT INTO Users (name,surname,email,password,origin_password,sexo,data,municipio,covid) VALUES(?,?,?,?,?,?,?,?,?)`,
      [
        user.name,
        user.surname,
        user.email,
        user.password,
        user.origin_password,
        user.sexo,
        user.data,
        user.municipio,
        user.covid,
      ]
    );
  });
}

export async function infoUser(id) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Users WHERE id = '${id}'`);
  });
}

export async function sendInfo(userInfo, id) {
  return openDb().then((db) => {
    return db.get(
      `UPDATE Users SET risco=?, sintomas=?, profissional=?, covid=?  WHERE id='${id}'`,
      [userInfo.risco, userInfo.sintomas, userInfo.profissional, userInfo.covid]
    );
  });
}

export async function getSintomas() {
  return openDb().then((db) => {
    return db.get(`SELECT COUNT(sintomas) AS sintomas FROM Users WHERE sexo = 'Masculino'`);
  });
}

export async function getRisco() {
  return openDb().then((db) => {
    return db.get(
      `SELECT COUNT((SELECT covid FROM Users WHERE covid = 'sim')) AS risco FROM Users WHERE risco = 'Criança'`
    );
  });
}

export async function getProfissional() {
  return openDb().then((db) => {
    return db.get(
      `SELECT COUNT(id) AS prof FROM Users WHERE profissional = 'laboratorio'`
    );
  });
}
