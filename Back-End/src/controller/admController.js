import { openDb } from "../infra/configDb.js";

export async function validateAdm(email) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Admin WHERE email = ?`, [email]);
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
    return db.all(`SELECT * FROM Users`);
  });
}

export async function changeTxt(about) {
  return openDb().then((db) => {
    return db.run(`UPDATE About SET text=? WHERE id = 1 `, [about.text]);
  });
}

export async function getTxt() {
  return openDb().then((db) => {
    return db.get(`SELECT text FROM About`);
  });
}

export async function deleteUser(id) {
  return openDb().then((db) => {
    return db.run(`DELETE FROM Users WHERE id= ?`, [id]);
  });
}

export async function patchUser(user, id) {
  return openDb().then((db) => {
    return db.get(
      `UPDATE Users SET name=?, surname=?, email=?, risco=?, sintomas=?, municipio=?, profissional=?, data=?, password=?, sexo=?, origin_password=?, covid=?  WHERE id='${id}'`,
      [
        user.name,
        user.surname,
        user.email,
        user.risco,
        user.sintomas,
        user.municipio,
        user.profissional,
        user.data,
        user.password,
        user.sexo,
        user.origin_password,
        user.covid,
      ]
    );
  });
}
