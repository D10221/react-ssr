import express from "express";
import configure from "./configure";

const app = express();
const port = 2048;
configure(app).listen(port, (error: Error) => {
    if (error) {
        console.error(error);
        return process.exit(-1);
    }
    console.log("React SSR listening on PORT: %s", port);
});
