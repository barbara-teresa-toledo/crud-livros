import { db } from "../db.js";

export const getLivros = (_, res) => {
  const q = "SELECT * FROM livros";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addLivro = (req, res) => {
  const q = "INSERT INTO livros(`titulo`,`autor`,`colecao`) VALUES(?)";

  const values = [req.body.titulo, req.body.autor, req.body.colecao];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro adicionado com sucesso!");
  });
};

export const updateLivro = (req, res) => {
  const q =
    "UPDATE livros SET `titulo` = ?, `autor` = ?, `colecao` = ? WHERE `id` = ?";

  const values = [req.body.titulo, req.body.autor, req.body.colecao];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro atualizado com sucesso!");
  });
};

export const deleteLivro = (req, res) => {
  const q = "DELETE FROM livros WHERE `id` = ?";

  const values = [req.body.titulo, req.body.autor, req.body.colecao];

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro excluído com sucesso!");
  });
};
