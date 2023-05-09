import express from "express";
import {
  getLivros,
  addLivro,
  updateLivro,
  deleteLivro,
} from "../controllers/livro.js";

const router = express.Router();

router.get("/", getLivros);
router.post("/", addLivro);
router.put("/:id", updateLivro);
router.delete("/:id", deleteLivro);

export default router;
