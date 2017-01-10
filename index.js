const express = require("express");

const app = express();

const COMPANY_NAME = process.env.COMPANY_NAME ? process.env.COMPANY_NAME : "cassiny";

const MONGODB_ADDR = process.env.MONGODB_PORT_27017_TCP_ADDR ? process.env.MONGODB_PORT_27017_TCP_ADDR : "localhost";
const MONGODB_PORT = process.env.MONGODB_PORT_27017_TCP_PORT ? process.env.MONGODB_PORT_27017_TCP_PORT : "localhost";

app.get("/", (req, res) => {
    res.type("text/html");
    res.send(`
        <h1>${COMPANY_NAME}</h1>
        <ul>
            <li>Host: ${MONGODB_ADDR}</li>
            <li>Port: ${MONGODB_PORT}</li>
        </ul>
        `);
});

app.listen(8080, () => {
    console.log("server is running.");
});
