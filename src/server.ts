import 'reflect-metadata';
import express from 'express';
import './database/index';

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Hello World - NLW04" });
});

app.listen(3333, () => console.log("Server is running!"));