import express from "express";
import path from "path";
import render from "./render";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", render);

app.listen(2048);
