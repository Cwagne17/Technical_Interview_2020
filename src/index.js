const express = require('express');
const app = express();
const PORT = 3000;
app.get("/", (req,res)=> res.send("Express + TypeScript Server"));
app.listen(PORT, ()=> {
    console.log("[Server]: Server is running at http://localhost:${PORT}");
});