import express from "express";
import cors from "cors";
import livroRoutes from "./routes/livros.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", livroRoutes);

app.listen(8800);
