const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const router = require("./router");
const PORT = 4000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

http.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`);
});