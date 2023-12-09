import express from "express";
import path from "path";
import mustache from "mustache-express";

import router from "./routes";

const server = express();
server.use(express.static(path.join(__dirname, "../public")));
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(router);

const port = 80;

server.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
