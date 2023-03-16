import { openDb } from "../infra/configDb.js";

export async function validateAdm(email) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Admin WHERE email = '${email}'`);
  });
}

export async function registerAdmin(adm) {
  return openDb().then((db) => {
    return db.run(`INSERT INTO Admin (name,email,password) VALUES(?,?,?)`, [
      adm.name,
      adm.email,
      adm.password,
    ]);
  });
}

export async function showUsers() {
  return openDb().then((db) => {
    return db.all(
      `SELECT name,email,password,sintomas,profissional,risco,sexo,idade,municipio FROM Users`
    );
  });
}

export async function changeTxt(about) {
  return openDb().then((db) => {
    return db.run(`UPDATE About SET text = ? WHERE id = 1 `, [about]);
  });
}

export async function getTxt(about) {
  return openDb().then((db) => {
    return db.get(`SELECT text FROM About`)
  })
}
