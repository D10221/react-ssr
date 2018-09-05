if (process.env.NODE_ENV !== "production") { 
    require("./src/server"); 
} else {
    throw new Error("Not Implemented, yet.");
}
