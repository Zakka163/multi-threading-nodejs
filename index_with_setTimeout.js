const express = require("express");


const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
});

app.get("/blocking", async (req, res) => {
    setTimeout(() => {
        console.log('masuk blocking')
        let counter = 0;
        for (let i = 0; i < 20_000_000_000; i++) {
            counter++;
        }
        console.log('keluar blocking')
        res.status(200).send(`result is ${counter}`);
    }, 0)

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});