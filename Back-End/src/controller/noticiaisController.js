import { openDb } from "../infra/configDb.js";

export async function getNews() {
  return openDb().then((db) => {
    return db.all(`SELECT * FROM Noticiais ORDER BY date DESC LIMIT 2`);
  });
}

export async function postNews(news) {
  return openDb().then((db) => {
    return db.run(`INSERT INTO Noticiais (author,title,desc,date) VALUES(?,?,?,?)`, [
      news.author,
      news.title,
      news.desc,
      news.data
    ]);
  });
}
