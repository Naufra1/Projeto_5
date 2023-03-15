import { openDb } from "../infra/configDb.js";

export async function validateAdm(email) {
  return openDb().then((db) => {
    return db.get(`SELECT * FROM Admin WHERE email = '${email}'`);
  });
}
