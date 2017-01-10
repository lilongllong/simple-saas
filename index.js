const express = require("express");

const app = express();

const COMPANY_NAME = process.env.COMPANY_NAME;

app.get("/", (req, res) => {
    res.send(`Hello ${ COMPANY_NAME ? COMPANY_NAME : "stranger"}!`);
});

app.listen(8080, () => {
    console.log("server is running.");
});
