const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});