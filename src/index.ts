import express from "express";
import configure from "./configure";

const app = express();
configure(app).listen(2048);
