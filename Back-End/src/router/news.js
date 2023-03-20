import { getNews, postNews } from "../controller/noticiaisController.js";
import { validate } from "../authentication/auth.js";

export function newsRoute(app) {
  app.get("/news", async (req, res) => {
    try {
      let news = await getNews();
      return res
        .status(200)
        .send({ msg: "Noticiais listadas com sucesso!", news });
    } catch (err) {
      return res.status(400).send({ err: `${err}` });
    }
  });

  app.post("/news/send", validate, async (req, res) => {
    let news = req.body;
    try {
      await postNews(news);
      return res.status(200).send({ msg: "Noticia publicata com sucesso" });
    } catch (err) {
      return res.status(400).send({ err: `${err}` });
    }
  });
}
