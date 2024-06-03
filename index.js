const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/", (req, res) => {
    console.log('masuk non-blocking')
    res.status(200).send("This page is non-blocking");
    console.log('keluar non-blocking')
});

app.get("/blocking", async (req, res) => {
    console.log('masuk blocking')
    let counter = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
        counter++;
    }
    console.log('keluar blocking')
    res.status(200).send(`result is ${counter}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});