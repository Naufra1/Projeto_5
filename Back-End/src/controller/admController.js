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

export async function patchUser(field, id) {
  if (field.name !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET name = ? WHERE id = ${id}`, [field.name]);
    });
  }
  if (field.email !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET email = ? WHERE id = ${id}`, [
        field.email,
      ]);
    });
  }
  if (field.password !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET password = ? WHERE id = ${id}`, [
        field.password,
      ]);
    });
  }
  if (field.origin_password !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET password = ? WHERE id = ${id}`, [
        field.password,
      ]);
    });
  }
  if (field.sintomas !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET sintomas = ? WHERE id = ${id}`, [
        field.sintomas,
      ]);
    });
  }
  if (field.profissional !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET profissional = ? WHERE id = ${id}`, [
        field.profissional,
      ]);
    });
  }
  if (field.risco !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET risco = ? WHERE id = ${id}`, [
        field.risco,
      ]);
    });
  }
  if (field.sexo !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET sexo = ? WHERE id = ${id}`, [field.sexo]);
    });
  }
  if (field.idade !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET idade = ? WHERE id = ${id}`, [
        field.idade,
      ]);
    });
  }
  if (field.municipio !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET municipio = ? WHERE id = ${id}`, [
        field.municipio,
      ]);
    });
  }
  if (field.surname !== "") {
    return openDb().then((db) => {
      return db.run(`UPDATE Users SET surname = ? WHERE id = ${id}`, [
        field.surname,
      ]);
    });
  }
}
