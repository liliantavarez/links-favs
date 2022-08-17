const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const linkRouter = require("./routers/linkRouter");
const mongoose = require("mongoose");
require("dotenv").config();

/* Definindo template */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

/* Conexão com o banco de dados */
mongoose.connect(process.env.MONGOOSE_URL_CONNECTION);
let db = mongoose.connection;

db.on("error", () => {
	console.log("Houve um erro!");
});

db.once("open", () => {
	console.log("Banco Carregado!");
});

/* Rotas */
app.use("/", linkRouter);

app.listen(PORT, () => {
	console.log("Servidor rodando na porta: ", PORT);
});
