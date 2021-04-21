import express from "express";
import "./database"
import { routes } from "./routes";

const app = express();

app.disable("x-powered-by"); // recomendação do sonar

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running on port 3000"));
