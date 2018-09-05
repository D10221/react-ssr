import express, { Express } from "express";
import path from "path";
import render from "./render";
/** */
export default (app: Express) => {
    app.use(express.static(path.resolve(__dirname, "../dist")));
    app.get("/*", render);
    return app;
}